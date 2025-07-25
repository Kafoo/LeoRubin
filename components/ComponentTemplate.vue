<template>
  <div></div>
</template>

<script lang="ts">

import { isMobile } from '~/ts/functions/composition/displayHelpers';
import { useDisplay } from 'vuetify';

export default {

  name: '',

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
