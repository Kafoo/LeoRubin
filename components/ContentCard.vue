<template>
  <v-card class="content-card" rounded="xl" elevation="0">
    <v-card-text class="pa-5">
      <div class="centering text-center">
        <h2 v-if="title" class="mb-10">{{ title }}</h2>
      </div>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>


<style scoped>

h2{
  font-family: "Caveat";
  font-size: 3.5rem;
  font-weight: normal;
  letter-spacing: 0.5rem;
  text-decoration: underline;
  text-underline-offset: 0.4rem;
  text-decoration-thickness: 0.2rem;
}

.content-card {
  background-color: rgb(219, 219, 219);
}

@media screen and (max-width: 600px) {
  h2 {
    font-size: 2.5rem;
    letter-spacing: 0.3rem;
  }
}
</style>
