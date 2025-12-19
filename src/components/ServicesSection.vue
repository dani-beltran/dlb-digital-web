<template>
  <section id="services">
    <h2 class="section-title">Our Services</h2>
    <p class="section-subtitle">Comprehensive solutions tailored to your business needs</p>
    <div class="services-grid">
      <div class="service-card" v-for="service in services" :key="service.title">
        <div class="service-icon">{{ service.icon }}</div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { icon: '💻', title: 'Web Development', desc: 'Custom web applications built with modern technologies, optimized for performance and user experience.' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Native and cross-platform mobile solutions that engage users and drive business results.' },
  { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and migration services to power your digital transformation.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces designed with your users and business goals in mind.' },
  { icon: '🔧', title: 'DevOps', desc: 'Streamlined deployment pipelines and infrastructure management for continuous delivery.' },
  { icon: '🤝', title: 'Consulting', desc: 'Strategic technology guidance to help you make informed decisions and maximize ROI.' }
]
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: all 0.4s;
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--accent);
  transform: translateY(-5px);
}

.service-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  transition: transform 0.4s;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.service-card p {
  color: #a0a0a0;
  line-height: 1.7;
}
</style>
