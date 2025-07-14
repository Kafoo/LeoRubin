<template>
  <v-app :class="backgroundClass">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">

const route=ref(useRoute())
const backgroundClass = computed({

  get() {

    const page = route.value.path


    if (page == '/') {
      return 'home'
    } else if (page == '/pratiques') {
      return 'pratiques'
    } else if (page == '/actualites') {
      return 'actualites'
    } else if (page == '/ressources') {
      return 'ressources'
    } else if (page == '/contact') {
      return 'contact'
    } else if (page == '/temoignages') {
      return 'temoignages'
    } else {
      return null
    }
  },
  // setter
  set(newValue) {
  
  }

})

</script>


<style scoped>

.v-application {
  background-color: #d1d1bd;
  transition: background-color 0.75s ease-in-out;
}

</style>
