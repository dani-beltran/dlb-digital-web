<template>
  <section id="about" class="about">
    <div class="about-content">
      <div class="about-text">
        <h2 class="section-title">Who We Are</h2>
        <p>DLB Digital is a forward-thinking software development company dedicated to delivering exceptional digital solutions. We combine technical expertise with creative innovation to help businesses thrive in an increasingly digital world.</p>
        <p>Our team of experienced developers, designers, and strategists work collaboratively to bring your vision to life, ensuring every project exceeds expectations.</p>
      </div>
      <div class="stats">
        <div class="stat">
          <span class="stat-number">25+</span>
          <span class="stat-label">Projects Delivered</span>
        </div>
        <div class="stat">
          <span class="stat-number">10+</span>
          <span class="stat-label">Happy Clients</span>
        </div>
        <div class="stat">
          <span class="stat-number">12</span>
          <span class="stat-label">Years Experience</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.about {
  background: rgba(255, 255, 255, 0.02);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  margin-bottom: 1.5rem;
}

.about-text p {
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent);
  display: block;
}

.stat-label {
  color: #a0a0a0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}
</style>
