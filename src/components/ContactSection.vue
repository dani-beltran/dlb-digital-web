<template>
  <section id="contact" class="contact">
    <h2 class="section-title">Let's Build Something Great</h2>
    <p class="section-subtitle">Ready to start your next project? Get in touch with us today.</p>
    <button @click="openModal" class="contact-btn">
      Get In Touch →
    </button>
    
    <ContactFormModal :isOpen="isModalOpen" @close="closeModal" />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ContactFormModal from './ContactFormModal.vue';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.contact {
  text-align: center;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.2rem 3rem;
  background: transparent;
  color: var(--text);
  border: 2px solid var(--accent);
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
}

.contact-btn:hover {
  background: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}
</style>
