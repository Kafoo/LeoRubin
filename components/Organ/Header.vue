<template>


  <v-app-bar height="80" color="#ffffff57">
    <div class="centering pointer" @click.stop="$router.push('/')">
      <img class="ml-6 mr-2" src="/logo.png" height="70"/>
      <v-toolbar-title>Kafoo</v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script setup lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { useDisplay } from 'vuetify';

const display = useDisplay()
const mobile = isMobile(display)
const drawer = ref(false)

</script>

<style scoped>

</style>
