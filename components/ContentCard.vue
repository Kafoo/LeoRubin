<template>
  <v-card class="content-card mb-10" v-motion-slide-visible-once-bottom>
    <v-card-text class="pa-5">
      <h2 v-if="title" class="text-h4 mb-4">{{ title }}</h2>
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
