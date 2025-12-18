<template>
  <div id="app">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
@import './styles/main.css';
</style>
