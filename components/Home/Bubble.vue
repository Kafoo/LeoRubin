<template>
  <div class="bubble" :style="style">
    <v-icon :icon="bubble.icon" class="bubble-icon"></v-icon>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { VIcon } from 'vuetify/components';

// Component properties definition
const props = defineProps({
  // The bubble object containing its icon and positioning data
  bubble: {
    type: Object as () => { icon: string; angle: number; distance: number },
    required: true
  },
  // The base color inherited from the parent circle, used for the background
  color: {
    type: String,
    required: true
  }
});

// Computes the inline style for the bubble.
const style = computed(() => {
  // Make the parent color transparent for the background.
  const colorWithAlpha = props.color.replace('rgb', 'rgba').replace(')', ', 0.8)');
  return {
    // CSS variables used for positioning the bubble around the parent circle.
    '--angle': `${props.bubble.angle}deg`,
    '--distance': `-${props.bubble.distance}%`,
    'background-color': colorWithAlpha,
  };
});
</script>

<style scoped>
/* Styles for the bubble element. */
.bubble {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 35%;
  aspect-ratio: 1/1;
  /* Use negative margins to center the bubble based on its own size. */
  margin-top: -17.5%;
  margin-left: -17.5%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  filter: brightness(70%); /* Darken the background color. */
  /* 
    The transform positions the bubble.
    1. It rotates the bubble's position around the center of the parent.
    2. It translates it outwards along the Y-axis.
    3. It rotates the bubble back so the icon inside remains upright.
  */
  transform: rotate(var(--angle)) translateY(var(--distance, -140%)) rotate(calc(-1 * var(--angle)));
}

/* Styles for the icon inside the bubble. */
.bubble-icon {
  font-size: 1.5em;
  color: white;
}
</style>
