<template>


  <v-app-bar>
    <img class="mr-3 ml-6" src="/logo.jpg" height="45"/>
    <v-toolbar-title>Léo Rubin</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn>Pratiques</v-btn>
      <v-btn>A propos</v-btn>
      <v-btn>Contact</v-btn>
      <v-btn>
        <MdiIcon
        style="width: 20px;"
        icon="mdiHome"
        size="30"
        height="30"
        width="30"
        ></MdiIcon>
      </v-btn>
    </v-toolbar-items>
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

</style>
