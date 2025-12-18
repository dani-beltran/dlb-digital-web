<template>
  <nav id="nav">
    <div class="logo">DLB Digital</div>
    <ul class="nav-links">
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const nav = document.getElementById('nav')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  })
})
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

nav.scrolled {
  border-bottom-color: var(--border);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  color: var(--text);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 1.5rem;
  }
}
</style>
