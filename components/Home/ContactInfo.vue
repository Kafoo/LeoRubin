<template>
  <div class="contact-info">
    <div class="contact-name">Antoine Guillard</div>
    <div class="contact-detail">
      <v-icon icon="mdi-phone" size="small"></v-icon>
      <span>06 42 40 29 16</span>
    </div>
    <div class="contact-detail">
      <v-icon icon="mdi-email" size="small"></v-icon>
      <span>ant.guillard@gmail.com</span>
    </div>
    <v-btn v-if="!isActive" variant="outlined" size="small" class="profil-button" @click.stop="$emit('discoverProfile')">Découvrir mon profil</v-btn>
  </div>
</template>

<script setup lang="ts">
import { VIcon, VBtn } from 'vuetify/components';

defineEmits(['discoverProfile']);

defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-size: 0.7em;
  text-align: center;
}

.contact-name {
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

.contact-detail {
  display: flex;
  align-items: center;
  gap: 0.5em;
  opacity: 0.9;
  white-space: nowrap;
}

.profil-button {
  margin-top: 1em;
}
</style>
