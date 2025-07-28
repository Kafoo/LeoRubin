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
}

.content-card {
  background-color: rgb(219, 219, 219);
}

</style>