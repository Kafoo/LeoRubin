<template>
  <div
    class="info-bubble-wrapper"
    v-motion
    :initial="{ opacity: 0, scaleX: 0 }"
    :visible-once="{ opacity: 1, scaleX: 1, transition: { duration: 500, delay: 100 } }"
  >
    <v-card class="info-bubble-card" elevation="8">
      <v-card-title class="text-h6 bubble-title">{{ title }}</v-card-title>
      <v-card-text class="bubble-text">
        <slot></slot>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.info-bubble-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 8rem;
  position: relative;
  backface-visibility: hidden;
}

.info-bubble-card {
  max-width: 450px;
  border-radius: 16px;
  background-color: #f5f5f5;
}

.bubble-title {
  color: #0d490d;
  font-family: 'Recursive', sans-serif;
  justify-content: center;
  text-align: center;
}

.bubble-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  text-align: left;
}
</style>
