<template>
  <div
    class="info-bubble-wrapper"
    :class="side"
    v-motion
    :initial="{ opacity: 0, x: side === 'left' ? -100 : 100 }"
    :visible-once="{ opacity: 1, x: 0, transition: { duration: 500, delay: 100 } }"
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
  side: {
    type: String, // 'left' or 'right'
    default: 'left',
    validator: (value: string) => ['left', 'right'].includes(value),
  }
})
</script>

<style scoped>
.info-bubble-wrapper {
  display: flex;
  width: 50%;
  margin-bottom: 4rem;
  position: relative;
}
.info-bubble-wrapper.left {
  align-self: flex-start;
  padding-right: 40px;
  justify-content: flex-end;
  text-align: right;
}
.info-bubble-wrapper.right {
  align-self: flex-end;
  padding-left: 40px;
  justify-content: flex-start;
}

.info-bubble-dot {
  width: 20px;
  height: 20px;
  background-color: #1976D2; /* Vuetify primary color */
  border-radius: 50%;
  border: 3px solid #073d00;
  position: absolute;
  top: 20px; /* Align with card title */
  z-index: 1;
}
.info-bubble-wrapper.left .info-bubble-dot {
  right: -10px;
}
.info-bubble-wrapper.right .info-bubble-dot {
  left: -10px;
}

.info-bubble-card {
  max-width: 450px;
  border-radius: 16px;
  background-color: #f5f5f5;
}

.bubble-title {
  color: #0d490d;
  font-family: 'Recursive', sans-serif;
}

.bubble-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}
</style>
