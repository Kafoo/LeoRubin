<template>
  <div
    class="element centering"
    :class="['element-'+page.id, { active: page.active, 'is-hovered': isHovered, 'is-mounted': isMounted }]"
    @click.stop="handleCircleClick"
    @mouseover="onMouseover"
    @mouseleave="onMouseleave"
  >
    <div class="element-title ma-3">
      <transition name="fade-flip" mode="out-in">
        <ContactInfo v-if="isHovered && page.id === 6" key="contact-info" :is-active="page.active" @discoverProfile="handleDiscoverProfile" />
        <span v-else-if="isHovered" :key="page.name" class="page-name">
          {{ page.name }}
        </span>
        <v-icon v-else :key="page.icon" :icon="page.icon" :size="isMobile?'x-large':'large'"></v-icon>
      </transition>
    </div>
    <transition-group name="bubble-spawn" tag="div" class="bubbles-container">
      <div
        v-if="isHovered && page.bubbles && !page.active"
        v-for="bubble in page.bubbles"
        :key="bubble.icon"
        class="bubble"
        :style="bubbleStyle(bubble)"
      >
        <v-icon :icon="bubble.icon" class="bubble-icon" :style="{ color: page.color }"></v-icon>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from 'vuetify/components';
import ContactInfo from './ContactInfo.vue';

const props = defineProps({
  page: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
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

const isMounted = ref(false);
onMounted(() => {
  setTimeout(() => {    
    if (props.page.id === 6) {
      // The central circle is mounted immediately without animation.
      isMounted.value = true;
      return;
    }
  
    // Stagger the appearance of other circles.
    setTimeout(() => {
      isMounted.value = true;
    }, props.index * 100);
  }, 200);
});

const handleCircleClick = () => {
  // On mobile, we want to trigger the hover state.
  if (props.isMobile) {
    emit('circleClick', props.page.id, false);
    return;
  }
  // On desktop, only non-central circles are clickable.
  if (props.page.id !== 6) {
    emit('circleClick', props.page.id, false);
  }
};

const handleDiscoverProfile = () => {
  emit('circleClick', props.page.id, true);
};

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

const bubbleStyle = (bubble: { angle: number, distance: number }) => {
  return {
    '--angle': `${bubble.angle}deg`,
    '--distance': `-${bubble.distance}%`
  };
};
</script>


<style scoped>
.element{
  /* Variables */
  --element-width: 24%;
  --element-width-hover: 32%;
  --element-base-transition-duration: 0.25s;
  --element-hover-transition-duration: 0.15s;
  --element-active-transition-duration: 500ms;
  --element-appears-duration: 0.8s;
  --element-base-font-size: 3vw;
  --element-base-letter-spacing: 2px;
  --element-base-color: #e0e0e0;
  --element-base-box-shadow: 0px 0px 20px 8px rgb(0 0 0 / 27%);;
  --element-hover-box-shadow: none;
  --element-active-z-index: 10;

  /* Positioning & Sizing */
  position: absolute;
  width: var(--element-width);
  aspect-ratio : 1 / 1;
  border-radius: 1000px;
  cursor: pointer;
  z-index: 1;
  transform: translate(-50%, -50%);

  /* Visuals */
  --bg-opacity: 0.85;
  background-color: rgba(34, 34, 34, var(--bg-opacity));
  backdrop-filter: blur(5px) saturate(150%);
  -webkit-backdrop-filter: blur(5px) saturate(150%);
  box-shadow: var(--element-base-box-shadow);

  /* Typography */
  font-weight: bold;
  font-size: var(--element-base-font-size);
  letter-spacing: var(--element-base-letter-spacing);
  color: var(--element-base-color);
  text-shadow: none;

  /* Transitions */
  transition: all var(--element-appears-duration);
}

.element:hover,
.element.is-hovered {
  width: var(--element-width-hover);
  --bg-opacity: 0.98;
  box-shadow: var(--element-hover-box-shadow);
  z-index: 5;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  transition: width var(--element-hover-transition-duration) ease-in-out;
}

.element-title {
  perspective: 300px;
  min-height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.page-name {
  white-space: nowrap;
}

.fade-flip-enter-active,
.fade-flip-leave-active {
  transition: all 0.2s ease-in-out;
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

.element:not(.is-mounted):not(.element-6) {
  width: 0;
  top: 50%;
  left: 50%;
  z-index: 0;
}

@keyframes shaking-1 {
 from{
  transform: translate(-50%, -50%) rotate(0deg) translateY(-4px) rotate(0deg);
 }
 to{
  transform: translate(-50%, -50%) rotate(360deg) translateY(-4px) rotate(-360deg);
 }
}

@keyframes shaking-2 {
 from{
  transform: translate(-50%, -50%) rotate(0deg) translateY(-4px) rotate(0deg);
 }
 to{
  transform: translate(-50%, -50%) rotate(-360deg) translateY(-4px) rotate(360deg);
 }
}

@keyframes pulse {
  0% {
    transform: scale(1.1);
  }
  10% {
    transform: scale(0.98);
  }
  25% {
    transform: scale(1);
  }
  92% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element-1{
  --angle: -90deg;
  top: calc(50% + var(--radius) * sin(var(--angle)));
  left: calc(50% + var(--radius) * cos(var(--angle)));
  background-color: rgba(58, 42, 26, var(--bg-opacity)); /* Much darker brown */
  animation: shaking-1 8s infinite linear;
}

.element-2{
  --angle: -18deg; /* -90 + 72 */
  top: calc(50% + var(--radius) * sin(var(--angle)));
  left: calc(50% + var(--radius) * cos(var(--angle)));
  background-color: rgba(42, 26, 58, var(--bg-opacity)); /* Much darker purple */
  animation: shaking-2 7s infinite linear;
}

.element-3{
  --angle: 54deg; /* -18 + 72 */
  top: calc(50% + var(--radius) * sin(var(--angle)));
  left: calc(50% + var(--radius) * cos(var(--angle)));
  background-color: rgba(58, 26, 26, var(--bg-opacity)); /* Much darker red */
  animation: shaking-1 5s infinite linear;
}

.element-4{
  --angle: 126deg; /* 54 + 72 */
  top: calc(50% + var(--radius) * sin(var(--angle)));
  left: calc(50% + var(--radius) * cos(var(--angle)));
  background-color: rgba(26, 58, 42, var(--bg-opacity)); /* Much darker green */
  animation: shaking-2 9s infinite linear;
}

.element-5{
  --angle: 198deg; /* 126 + 72 */
  top: calc(50% + var(--radius) * sin(var(--angle)));
  left: calc(50% + var(--radius) * cos(var(--angle)));
  background-color: rgba(26, 42, 58, var(--bg-opacity)); /* Much darker blue */
  animation: shaking-1 6s infinite linear;
}

.element-6{
  /* Positioning & Sizing */
  width: var(--center-element-width);
  top: 50%;
  left: 50%;
  padding-left: 0px; /* Remove padding-left for better centering */

  /* Visuals */
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1); /* Unique border */
  cursor: pointer;
  color: black;

  /* Typography */
  font-size: 2.5vw; /* Override base font-size */
  letter-spacing: 3px; /* Override base letter-spacing */
}

/* Pulsing Background for central circle */
.element-6::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  cursor: default;
  border-radius: 1000px;
  background-color: rgb(212, 212, 212);
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.7);
  animation: pulse 2.5s infinite ease-in-out;
}

/* Medium circle */
.element-6::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180%;
  height: 180%;
  z-index: -2;
  border-radius: 1000px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: 1.3s ease-in-out;
  opacity: 0;
  animation: fadeIn 1s ease-in-out 1.4s forwards;
}

.element-6.element.is-hovered::after,
.element-6.element:hover::after {
  width: 0;
  height: 0;
  transition: 200ms;
}

@media (min-width: 1000px) {
  .element {
     font-size: 1.5em;
  }
  .element:hover {
     font-size: 1.6em;
  }
  .element-6{
     font-size: 1.3em;
  }
}


.element-6.is-hovered,
.element-6:hover{
  width: 60%;
  z-index: 0;
  transition: all 500ms;
  cursor: default;
}

.element-6.is-hovered::before,
.element-6:hover::before {
  animation: none;
}

.element.active{
  /* Sizing & Positioning */
  width: 400%;
  z-index: var(--element-active-z-index);
  top: 50%;
  left: 50%;

  /* Visuals */
  --bg-opacity: 1;
  color: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  filter: none;

  /* Transitions */
  transition: 
    width var(--element-active-transition-duration) ease-in-out,
    top var(--element-active-transition-duration) ease-in-out,
    left var(--element-active-transition-duration) ease-in-out,
  ;
}
</style>
