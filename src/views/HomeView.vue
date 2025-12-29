<template>
  <div id="home">
    <HeroSection />
    <ServicesSection />
    <SpecialtiesSection />
    <AboutSection />
    <ContactSection @open-contact-modal="openContactModal" />
    <FooterSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import SpecialtiesSection from '../components/SpecialtiesSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

const emit =defineEmits(['open-contact-modal'])

const openContactModal = () => {
  // Emit event to parent (App.vue)
  emit('open-contact-modal')
}
</script>

<style scoped>
#home {
  width: 100%;
}
</style>
