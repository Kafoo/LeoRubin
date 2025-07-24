<template>
  <div class="bubble" :style="style">
    <v-icon :icon="bubble.icon" class="bubble-icon"></v-icon>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { VIcon } from 'vuetify/components';

const props = defineProps({
  bubble: {
    type: Object as () => { icon: string; angle: number; distance: number },
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

const style = computed(() => {
  const colorWithAlpha = props.color.replace('rgb', 'rgba').replace(')', ', 0.8)');
  return {
    '--angle': `${props.bubble.angle}deg`,
    '--distance': `-${props.bubble.distance}%`,
    'background-color': colorWithAlpha,
  };
});
</script>

<style scoped>
.bubble {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 35%;
  aspect-ratio: 1/1;
  margin-top: -17.5%;
  margin-left: -17.5%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  filter: brightness(70%);
  transform: rotate(var(--angle)) translateY(var(--distance, -140%)) rotate(calc(-1 * var(--angle)));
}

.bubble-icon {
  font-size: 1.5em;
  color: white;
}
</style>
