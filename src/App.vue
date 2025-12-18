<template>
  <div id="app">
    <NavBar @open-contact-modal="openContactModal" />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ContactSection @open-contact-modal="openContactModal" />
    <FooterSection />
    <ContactFormModal :isOpen="isContactModalOpen" @close="closeContactModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import ContactFormModal from './components/ContactFormModal.vue'

const isContactModalOpen = ref(false)

const openContactModal = () => {
  isContactModalOpen.value = true
}

const closeContactModal = () => {
  isContactModalOpen.value = false
}
</script>

<style>
@import './styles/main.css';
</style>
