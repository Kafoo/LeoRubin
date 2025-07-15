<template>
  <div
    class="element centering"
    :class="['element-'+page.id, page.active ? 'active' : '']"
    @click="$emit('circleClick', page.id)"
    @mouseover="$emit('circleMouseover', page.id)"
    @mouseleave="$emit('circleMouseleave')"
  >
    <div class="element-title ma-3">
      <transition name="fade-flip" mode="out-in">
        <span v-if="isHovered" :key="page.name" class="page-name">{{ page.name }}</span>
        <v-icon v-else :key="page.icon" :icon="page.icon" class="page-icon"></v-icon>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from 'vuetify/components';

defineProps({
  page: {
    type: Object,
    required: true
  },
  isHovered: {
    type: Boolean,
    default: false
  }
});

defineEmits(['circleClick', 'circleMouseover', 'circleMouseleave']);
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

.fade-flip-enter-active,
.fade-flip-leave-active {
  transition: all 0.15s ease-in-out;
}

.fade-flip-enter-from,
.fade-flip-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
}
</style>
