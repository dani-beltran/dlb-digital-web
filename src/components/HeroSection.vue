<template>
    <BackgroundGrid>
      <section id="hero" class="hero">
        <div class="hero-content">
          <h1>Building Digital Excellence</h1>
          <p>We craft innovative software solutions that transform businesses and drive growth in the digital age.</p>
          <a href="#services" class="cta-btn">Explore Our Services</a>
        </div>
      </section>
    </BackgroundGrid>
</template>

<script setup>
import BackgroundGrid from './BackgroundGrid.vue';
</script>

<style scoped>

.hero {
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  z-index: 2;
  padding: 0 5%;
}

.hero h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;
  opacity: 0;
  animation: fadeUp 1s forwards;
}

.hero p {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto 3rem;
  opacity: 0;
  animation: fadeUp 1s 0.2s forwards;
}

.cta-btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: var(--accent);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s;
  opacity: 0;
  animation: fadeUp 1s 0.4s forwards;
}

.cta-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from {
    transform: translateY(20px);
  }
}
</style>
