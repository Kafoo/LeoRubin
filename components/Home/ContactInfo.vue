<template>
  <div class="contact-info pb-3">
    <div class="contact-name">Antoine Guillard</div>
    <div class="contact-detail selectable-text">
      <v-icon icon="mdi-phone" size="small"></v-icon>
      <span>06 42 40 29 16</span>
    </div>
    <div class="contact-detail selectable-text">
      <v-icon icon="mdi-email" size="small"></v-icon>
      <span>ant.guillard@gmail.com</span>
    </div>
    <div
    v-if="!isActive"
    class="profil-button"
    @click.stop="$emit('discoverProfile')"
    >Mon Profil</div>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from 'vuetify/components';

// Defines the custom events that this component can emit.
defineEmits(['discoverProfile']);

// Defines the properties that this component accepts.
defineProps({
  // A boolean to indicate if the parent circle is in its 'active' state.
  isActive: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
/* Base styles for the contact information container. */
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-size: 0.9em;
  text-align: center;
  font-weight: normal;
  font-family: 'Philosopher', sans-serif;
  margin-top: 1em;
}

.contact-name {
  font-size: 1.2em;
}

.contact-detail {
  display: flex;
  align-items: center;
  gap: 0.5em;
  opacity: 0.9;
  white-space: nowrap;
}

/* Styles for the "Mon Profil" button. */
.profil-button {
  padding: 0.3em 1em;
  border-radius: 15px;
  letter-spacing: 1px;
  transition: background-color 0.2s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #333;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.1em;
  margin-top: 0.5em;
}

.profil-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}


/* Responsive adjustments for smaller screens. */
@media (max-width: 799px) {
  
  .contact-info {
    font-size: 1em;
  }
  .profil-button {
    border-radius: 8px;
  }

}

</style>
