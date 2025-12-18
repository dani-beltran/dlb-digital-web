<template>
  <section class="hero">
    <div class="bg-grid"></div>
    <div class="hero-content">
      <h1>Building Digital Excellence</h1>
      <p>We craft innovative software solutions that transform businesses and drive growth in the digital age.</p>
      <a href="#services" class="cta-btn">Explore Our Work</a>
    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
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

.bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
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
