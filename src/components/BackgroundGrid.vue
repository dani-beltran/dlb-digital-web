<template>
  <div class="bg-grid-wrapper" @mousemove="handleMouseMove">
    <div class="bg-grid" ref="gridRef" :style="gridStyle">
        <div 
        v-for="n in 600" 
        :key="n" 
        :class="['grid-item', { 'hovered': isItemHovered(n), 'adjacent': isItemAdjacent(n) }]"
        :style="getItemStyle(n)"
        ></div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const mouseX = ref(50);
const mouseY = ref(50);
const gridRef = ref(null);
const hoveredItem = ref(null);
const mouseGridX = ref(0);
const mouseGridY = ref(0);

const COLS = 30;
const ROWS = 20;

const handleMouseMove = (e) => {
  if (!gridRef.value) return;
  
  const gridRect = gridRef.value.getBoundingClientRect();
  const gridX = e.clientX - gridRect.left;
  const gridY = e.clientY - gridRect.top;
  
  // Update mouse position as percentage
  mouseX.value = (gridX / gridRect.width) * 100;
  mouseY.value = (gridY / gridRect.height) * 100;
  
  const col = Math.floor((gridX / gridRect.width) * COLS);
  const row = Math.floor((gridY / gridRect.height) * ROWS);
  
  if (col >= 0 && col < COLS && row >= 0 && row < ROWS) {
    hoveredItem.value = row * COLS + col + 1;
    mouseGridX.value = gridX;
    mouseGridY.value = gridY;
  } else {
    hoveredItem.value = null;
  }
};

const gridStyle = computed(() => {
  const skewX = ((mouseX.value - 50) / 50) * 3;
  const skewY = ((mouseY.value - 50) / 50) * 3;
  
  return {
    '--mouse-x': `${mouseX.value}%`,
    '--mouse-y': `${mouseY.value}%`,
    '--skew-x': `${skewX}deg`,
    '--skew-y': `${skewY}deg`,
  };
});

const isItemHovered = (n) => {
  return hoveredItem.value === n;
};

const isItemAdjacent = (n) => {
  if (!hoveredItem.value) return false;
  
  const hoveredRow = Math.floor((hoveredItem.value - 1) / COLS);
  const hoveredCol = (hoveredItem.value - 1) % COLS;
  
  const itemRow = Math.floor((n - 1) / COLS);
  const itemCol = (n - 1) % COLS;
  
  const rowDiff = Math.abs(itemRow - hoveredRow);
  const colDiff = Math.abs(itemCol - hoveredCol);
  
  return rowDiff <= 1 && colDiff <= 1 && !(rowDiff === 0 && colDiff === 0);
};

const getItemStyle = (n) => {
  const itemRow = Math.floor((n - 1) / COLS);
  const itemCol = (n - 1) % COLS;
  
  if (!hoveredItem.value) {
    return {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      backgroundColor: `rgba(59, 130, 246, 0.03)`,
    };
  }
  
  if (isItemHovered(n) || isItemAdjacent(n)) {
    const gridRect = gridRef.value?.getBoundingClientRect();
    if (!gridRect) return {};
    
    const cellWidth = gridRect.width / COLS;
    const cellHeight = gridRect.height / ROWS;
    
    const itemCenterX = itemCol * cellWidth + cellWidth / 2;
    const itemCenterY = itemRow * cellHeight + cellHeight / 2;
    
    const deltaX = mouseGridX.value - itemCenterX;
    const deltaY = mouseGridY.value - itemCenterY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = Math.sqrt(cellWidth * cellWidth + cellHeight * cellHeight) * 1.5;
    
    const intensity = isItemHovered(n) ? 1 : Math.max(0, 1 - distance / maxDistance);
    
    // Calculate inward pull based on mouse position relative to cell
    const pullX = (deltaX / cellWidth) * 20 * intensity;
    const pullY = (deltaY / cellHeight) * 20 * intensity;
    
    // Deform the polygon corners inward toward the mouse
    const topLeft = `${Math.max(0, pullX > 0 && pullY > 0 ? pullX : 0)}% ${Math.max(0, pullX > 0 && pullY > 0 ? pullY : 0)}%`;
    const topRight = `${100 - Math.max(0, pullX < 0 && pullY > 0 ? -pullX : 0)}% ${Math.max(0, pullX < 0 && pullY > 0 ? pullY : 0)}%`;
    const bottomRight = `${100 - Math.max(0, pullX < 0 && pullY < 0 ? -pullX : 0)}% ${100 - Math.max(0, pullX < 0 && pullY < 0 ? -pullY : 0)}%`;
    const bottomLeft = `${Math.max(0, pullX > 0 && pullY < 0 ? pullX : 0)}% ${100 - Math.max(0, pullX > 0 && pullY < 0 ? -pullY : 0)}%`;
    
    return {
      clipPath: `polygon(${topLeft}, ${topRight}, ${bottomRight}, ${bottomLeft})`,
      backgroundColor: `rgba(59, 130, 246, ${0.05 + intensity * 0.25})`,
    };
  }
  
  return {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    backgroundColor: `rgba(59, 130, 246, 0.05)`,
  };
};
</script>

<style scoped>
.bg-grid-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.bg-grid {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: repeat(20, 1fr);
  animation: gridMove 10s linear infinite alternate;
  transition: filter 0.3s ease;
  filter: contrast(1.1);
  mask-image: radial-gradient(
    ellipse at 50% 50%,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.2) 25%,
    rgba(0, 0, 0, 0.08) 50%,
    rgba(0, 0, 0, 0.05) 75%,
    rgba(0, 0, 0, 0.01) 100%
  );
}

.grid-item {
  position: relative;
  transition: clip-path 0.15s ease-out, background-color 0.15s ease-out;
  border: 1px solid rgba(59, 130, 246, 0.08);
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}
</style>
