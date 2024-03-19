<template>


  <v-app-bar absolute :height="mobile?100:170" flat color="transparent">
    <v-toolbar-title class="centering">
      <v-img src="/textlogo.png" :width="mobile?'250px':'500px'"></v-img>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { useDisplay } from 'vuetify';

export default {

  name: 'Header',

  setup () {
    const display = useDisplay()
    const mobile = isMobile(display)
    return {
      mobile
    }
  }
}

</script>

<style scoped>

.v-app-bar{
  border-bottom: 1px solid #6f6f6f;
  z-index: 0 !important;
}

</style>
