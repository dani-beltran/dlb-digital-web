<template>
  <footer>
    <p>&copy; 2025 DLB Digital. All rights reserved.</p>
  </footer>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
footer {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 0;
  border-top: 1px solid var(--border);
  text-align: left;
  color: #666;
}

@media (max-width: 768px) {
  footer {
    text-align: center;
  }
  
}
</style>
