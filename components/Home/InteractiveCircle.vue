<template>
  <div
    class="element centering"
    :class="['element-'+page.id, page.active ? 'active' : '']"
    @click.stop="$emit('circleClick', page.id)"
    @mouseover="onMouseover"
    @mouseleave="onMouseleave"
  >
    <div class="element-title ma-3">
      <transition name="fade-flip" mode="out-in">
        <div v-if="isHovered && page.id === 6" key="contact-info" class="contact-info">
          <div class="contact-name">Antoine Guillard</div>
          <div class="contact-detail">
            <v-icon icon="mdi-phone" size="small"></v-icon>
            <span>06 42 40 29 16</span>
          </div>
          <div class="contact-detail">
            <v-icon icon="mdi-email" size="small"></v-icon>
            <span>ant.guillard@gmail.com</span>
          </div>
        </div>
        <span v-else-if="isHovered" :key="page.name" class="page-name">{{ page.name }}</span>
        <v-icon v-else :key="page.icon" :icon="page.icon" size="x-large"></v-icon>
      </transition>
    </div>
    <transition-group name="bubble-spawn" tag="div" class="bubbles-container">
      <div
        v-if="isHovered && page.bubbles && !page.active"
        v-for="(bubbleIcon, index) in page.bubbles"
        :key="bubbleIcon"
        class="bubble"
        :style="bubbleStyle(index, page.bubbles.length)"
      >
        <v-icon :icon="bubbleIcon" class="bubble-icon" :style="{ color: page.color }"></v-icon>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from 'vuetify/components';

const props = defineProps({
  page: {
    type: Object,
    required: true
  },
  isHovered: {
    type: Boolean,
    default: false
  },
  isMobile: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['circleClick', 'circleMouseover', 'circleMouseleave']);

const onMouseover = () => {
  if (!props.isMobile) {
    emit('circleMouseover', props.page.id);
  }
};

const onMouseleave = () => {
  if (!props.isMobile) {
    emit('circleMouseleave');
  }
};

const bubbleStyle = (index: number, total: number) => {
  const baseAngle = (360 / total) * index;

  // Pseudo-random but deterministic values
  const seed = props.page.id * 100 + index;
  const random1 = Math.sin(seed) * 10000;
  const angleOffset = (random1 - Math.floor(random1) - 0.5) * 40; // -20 to 20 deg

  const random2 = Math.sin(seed + 1) * 10000;
  const distance = 140 + (random2 - Math.floor(random2) - 0.5) * 40; // 120% to 160%

  return {
    '--angle': `${baseAngle + angleOffset}deg`,
    '--distance': `-${distance}%`
  };
};
</script>

<style scoped>
.element{
  /* Positioning & Sizing */
  position: absolute;
  aspect-ratio : 1 / 1;
  border-radius: 1000px;
  cursor: pointer;
  z-index: 1;
  transform: translate(-50%, -50%);

  /* Visuals */
  --bg-opacity: 0.85;
  background-color: rgba(34, 34, 34, var(--bg-opacity));
  backdrop-filter: blur(8px) saturate(150%);
  -webkit-backdrop-filter: blur(8px) saturate(150%);
  box-shadow: var(--element-base-box-shadow);
  filter: url(#glass-distortion);

  /* Typography */
  font-weight: bold;
  font-size: var(--element-base-font-size);
  word-spacing: 100vw;
  letter-spacing: var(--element-base-letter-spacing);
  color: var(--element-base-color);
  text-shadow: none;

  /* Transitions */
  transition: var(--element-base-transition-duration);
}

.element:hover{
  width: var(--element-width-hover);
  transition: var(--element-hover-transition-duration) ease-in-out;
  --bg-opacity: 1;
  box-shadow: var(--element-hover-box-shadow);
  z-index: 5;
}

.element-title {
  perspective: 300px;
  min-height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-name {
  white-space: nowrap;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-size: 0.5em;
  text-align: center;
  white-space: nowrap;
}

.contact-name {
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

.contact-detail {
  display: flex;
  align-items: center;
  gap: 0.5em;
  opacity: 0.9;
}

.fade-flip-enter-active,
.fade-flip-leave-active {
  transition: all 0.15s ease-in-out;
}

.fade-flip-enter-from,
.fade-flip-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
}

.bubbles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.bubble {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 35%;
  aspect-ratio: 1/1;
  margin-top: -17.5%;
  margin-left: -17.5%;
  background-color: rgba(170, 170, 170, 0.795);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  transform: rotate(var(--angle)) translateY(var(--distance, -140%)) rotate(calc(-1 * var(--angle)));
}

.bubble-icon {
  font-size: 1.5em;
}

.bubble-spawn-enter-active,
.bubble-spawn-leave-active {
  transition: all 0.3s ease-out;
}

.bubble-spawn-enter-from,
.bubble-spawn-leave-to {
  opacity: 0;
  transform: rotate(var(--angle)) translateY(var(--distance, -140%)) rotate(calc(-1 * var(--angle))) scale(0);
}
</style>
