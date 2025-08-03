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
    } else if (page == '/creation') {
      return 'creation'
    } else if (page == '/projects') {
      return 'projects'
    } else if (page == '/merci') {
      return 'merci'
    } else if (page == '/faq') {
      return 'faq'
    } else if (page == '/support') {
      return 'support'
    } else if (page == '/kafoo') {
      return 'kafoo'
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
  background: url('test1bis.jpg');
  background-size: cover;
  background-position: center;
  position: relative; /* Establish positioning context for absolute children */
}

</style>

<style>

</style>
