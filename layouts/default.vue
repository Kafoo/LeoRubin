<template>

  <OrganHeader v-if="page !== 'home'"/>
  <OrganHomeHeader v-if="page == 'home'"/>

  <v-main>
    <slot/>
  </v-main>
  
</template>

<script setup lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { useDisplay } from 'vuetify';

const display = useDisplay()
const mobile = isMobile(display)

const route=ref(useRoute())
const page = computed({

  get() {

    const path = route.value.path

    if (path == "/") {
      return 'home'
    } else if (path == '/other') {
      return 'other'
    } else {
      return null
    }
  },
  // setter
  set(newValue) {
  
  }

})


</script>