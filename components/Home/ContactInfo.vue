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
  font-size: 0.9em;
  text-align: center;
  font-weight: normal;
  font-family: 'Philosopher', sans-serif;
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

.profil-button {
  padding: 0.5em 1.5em;
  border-radius: 20px;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #333;
  background-color: transparent;
  cursor: pointer;
  font-size: 0.9em;
}

.profil-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.4);
}


@media (max-width: 1000px) {
  
  .contact-info {
    font-size: 0.95em;
  }
  .contact-name{
    margin-bottom: 0.5em;;
  }
  .contact-detail{
    margin-bottom: 0.5em;
  }
  .profil-button {
    border-radius: 8px;
  }

}

</style>
