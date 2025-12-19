<template>
  <nav id="nav">
    <div class="logo" @click.prevent="navigateToHomeSection('hero')">DLB Digital</div>
    
    <!-- Hamburger Menu Button -->
    <button class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    
    <!-- Navigation Links -->
    <ul class="nav-links" :class="{ active: isMenuOpen }">
      <li><a href="#services" @click.prevent="handleNavClick('services')">Services</a></li>
      <li><a href="#signature-services" @click.prevent="handleNavClick('signature-services')">Signature Services</a></li>
      <li><a href="#about" @click.prevent="handleNavClick('about')">About</a></li>
      <li><a href="#blog" @click.prevent="handleBlogClick()">Blog</a></li>
      <li><a href="#" @click.prevent="handleContactClick">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const emit = defineEmits(['open-contact-modal'])
const router = useRouter()
const route = useRoute()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const openContactModal = () => {
  emit('open-contact-modal')
}

const handleNavClick = (sectionId) => {
  closeMenu()
  navigateToHomeSection(sectionId)
}

const handleBlogClick = () => {
  closeMenu()
  navigateToBlog()
}

const handleContactClick = () => {
  closeMenu()
  openContactModal()
}

const navigateToHomeSection = (sectionId) => {
  if (route.path !== '/') {
    // Navigate to home first, then scroll to section
    router.push('/').then(() => {
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    })
  } else {
    // Already on home, just scroll
    scrollToSection(sectionId)
  }
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const navHeight = document.getElementById('nav').offsetHeight
    const sectionTop = section.offsetTop - navHeight - 20 // 20px extra offset
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    })
  }
}

const navigateToBlog = (article = 'home') => {
  router.push('/blog/' + article)
}

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
  cursor: pointer;
}

.logo:hover {
  transform: scale(1.025);
  transition: transform 0.3s;
}

/* Hamburger Menu Button */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;
}

.hamburger span {
  width: 25px;
  height: 2px;
  background: var(--text);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
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
  nav {
    padding: 1rem 5%;
  }

  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    flex-direction: column;
    background: rgba(15, 15, 15, 0.98);
    backdrop-filter: blur(20px);
    padding: 5rem 2rem 2rem;
    gap: 2rem;
    transition: right 0.3s ease;
    border-left: 1px solid var(--border);
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links a::after {
    display: none;
  }

  .nav-links a {
    font-size: 1.1rem;
  }
}
</style>
