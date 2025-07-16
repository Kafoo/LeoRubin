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
    >Découvrir mon profil</div>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from 'vuetify/components';

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
  font-size: 0.8em;
  text-align: center;
  font-weight: normal;
  font-family: 'Philosopher', sans-serif;
}

.contact-name {
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
  margin-top: 0.5em;
  padding: 0.5em 1em;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  transition: background-color 0.2s;
  cursor: pointer;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

.profil-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
