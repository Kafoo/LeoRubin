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
    <div class="profil-button" @click.stop="$emit('discoverProfile')">Découvrir mon profil</div>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from 'vuetify/components';

defineEmits(['discoverProfile']);
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
  padding: 0.5em 1em;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  transition: background-color 0.2s;
  cursor: pointer;
}

.profil-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.active .profil-button{
  display: none;
}
</style>
