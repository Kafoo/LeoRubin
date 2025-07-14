<template>
  <div class="centering-column mt-100">
    <h1>Actualités</h1>
    <v-btn class="mt-8 " size="small" color="#3a3a3a" to="/">Retour à l'accueil</v-btn>
  </div>
</template>

<script setup lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { useDisplay } from 'vuetify';

const display = useDisplay()
const mobile = isMobile(display)


</script>

<style scoped>

</style>
