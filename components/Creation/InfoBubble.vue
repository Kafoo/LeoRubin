<template>
  <div
    class="info-bubble-wrapper"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
  >
    <div class="info-bubble-dot"></div>
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
  margin-bottom: 4rem;
  position: relative;
}

.info-bubble-dot {
  width: 20px;
  height: 20px;
  background-color: #1976D2; /* Vuetify primary color */
  border-radius: 50%;
  border: 3px solid #073d00;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.info-bubble-card {
  max-width: 450px;
  border-radius: 16px;
  background-color: #f5f5f5;
  margin-top: 20px;
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
