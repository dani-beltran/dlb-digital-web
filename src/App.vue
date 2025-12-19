<template>
  <div id="app">
    <NavBar @open-contact-modal="openContactModal" />
    <router-view @open-contact-modal="openContactModal" />
    <ContactFormModal :isOpen="isContactModalOpen" @close="closeContactModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ContactFormModal from './components/ContactFormModal.vue'
import NavBar from './components/NavBar.vue'

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
