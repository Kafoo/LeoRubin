<template>
  <div
    class="element centering"
    :class="['element-'+page.id, { active: page.active, 'is-hovered': isHovered, 'is-mounted': isMounted }]"
    @click.stop="handleCircleClick"
    v-on="isMobile ? {} : { mouseover: onMouseover, mouseleave: onMouseleave }"
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
      <Bubble
        v-if="isHovered && page.bubbles && !page.active"
        v-for="bubble in page.bubbles"
        :key="bubble.icon"
        :bubble="bubble"
        :color="page.color"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from 'vuetify/components';
import ContactInfo from './ContactInfo.vue';
import Bubble from './Bubble.vue';

// Component properties definition
const props = defineProps({
  // The page object containing data for the circle (name, icon, etc.)
  page: {
    type: Object,
    required: true
  },
  // The index of the circle, used for staggering the appearance animation
  index: {
    type: Number,
    required: true
  },
  // Boolean to indicate if the circle is currently being hovered
  isHovered: {
    type: Boolean,
    default: false
  },
  // Boolean to indicate if the view is on a mobile device
  isMobile: {
    type: Boolean,
    default: false
  }
});

// Definition of events emitted by the component
const emit = defineEmits(['circleClick', 'circleMouseover', 'circleMouseleave']);

// A ref to control the mounted state, used for the appearance animation
const isMounted = ref(false);
onMounted(() => {
  // A short delay before starting the mounting animations
  setTimeout(() => {    
    if (props.page.id === 6) {
      // The central circle (id: 6) is mounted immediately without a staggered animation.
      isMounted.value = true;
      return;
    }
  
    // Stagger the appearance of other circles to create a sequential animation effect.
    setTimeout(() => {
      isMounted.value = true;
    }, props.index * 130);
  }, 200);
});

// Handles click events on the circle.
const handleCircleClick = () => {
  // On mobile, a click simulates a hover to show details before navigating.
  if (props.isMobile) {
    emit('circleClick', props.page.id, false);
    return;
  }
  // On desktop, only non-central circles are clickable for navigation.
  if (props.page.id !== 6) {
    emit('circleClick', props.page.id, false);
  }
};

// Handles the click on the "Discover Profile" button inside the central circle.
const handleDiscoverProfile = () => {
  emit('circleClick', props.page.id, true);
};

// Emits an event when the mouse enters the circle area (desktop only).
const onMouseover = () => {
  emit('circleMouseover', props.page.id);
};

// Emits an event when the mouse leaves the circle area (desktop only).
const onMouseleave = () => {
  emit('circleMouseleave');
};

</script>


<style scoped>
/* Base styles for all interactive circles. */
.element{
  /* CSS variables for dynamic styling and transitions. */
  --element-width: 24%; /* Default width of the circle. */
  --element-width-hover: 32%; /* Width of the circle on hover. */
  --element-base-transition-duration: 0.25s;
  --element-hover-transition-duration: 0.15s;
  --element-active-transition-duration: 500ms;
  --element-appears-duration: 0.8s;
  --element-base-font-size: 3vw;
  --element-base-letter-spacing: 2px;
  --element-base-color: #e0e0e0;
  --element-base-box-shadow: 0px 0px 20px 8px rgb(0 0 0 / 27%);;
  --element-hover-box-shadow: none;
  --element-active-z-index: 10; /* z-index when a circle is active/clicked. */

  /* Positioning & Sizing */
  position: absolute;
  width: var(--element-width);
  aspect-ratio : 1 / 1;
  border-radius: 1000px;
  cursor: pointer;
  z-index: 1;
  transform: translate(-50%, -50%); /* Center the element on its coordinates. */

  /* Visuals */
  --bg-opacity: 0.85; /* Default background opacity. */
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
  transition: all var(--element-appears-duration); /* Transition for initial appearance. */
}

/* Styles for when a circle is hovered (or tapped on mobile). */
.element:hover,
.element.is-hovered {
  width: var(--element-width-hover); /* Increase size. */
  --bg-opacity: 0.98; /* Make background more opaque. */
  box-shadow: var(--element-hover-box-shadow);
  z-index: 5; /* Bring to front. */
  backdrop-filter: none; /* Remove blur to make text readable. */
  -webkit-backdrop-filter: none;
  /* Smooth transition for size and position changes. */
  transition: 
    width var(--element-hover-transition-duration) ease-in-out,
    top var(--element-hover-transition-duration) ease-in-out,
    left var(--element-hover-transition-duration) ease-in-out;
}

/* Container for the icon or text inside the circle. */
.element-title {
  perspective: 300px; /* For 3D transform effects on children. */
  min-height: 2.5em; /* Ensure consistent height. */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  font-family: Philisopher, sans-serif;
  letter-spacing: 0.15em;
}

.page-name {
  white-space: nowrap;
}

/* Transition for the content (icon/text) inside the circle. */
.fade-flip-enter-active,
.fade-flip-leave-active {
  transition: all 0.2s ease-in-out;
}

/* Defines the start and end states of the flip animation. */
.fade-flip-enter-from,
.fade-flip-leave-to {
  opacity: 0;
  transform: rotateY(90deg); /* Flip effect. */
}

/* Container for the small bubbles that appear on hover. */
.bubbles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Transition for the appearance and disappearance of bubbles. */
.bubble-spawn-enter-active,
.bubble-spawn-leave-active {
  transition: all 0.3s ease-out;
}

/* Defines the start and end states for the bubble spawn animation. */
.bubble-spawn-enter-from,
.bubble-spawn-leave-to {
  opacity: 0;
  /* Start from the center and scale up to their final position. */
  transform: rotate(var(--angle)) translateY(var(--distance, -140%)) rotate(calc(-1 * var(--angle))) scale(0);
}

/* Initial state for outer circles before they animate into place. */
.element:not(.is-mounted):not(.element-6) {
  width: 0; /* Start with no width. */
  top: 50%; /* Start from the center. */
  left: 50%;
  z-index: 0;
}

/* Keyframe animations for a subtle floating/shaking effect. */
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
  15% {
    transform: scale(1);
  }
  95% {
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

/* Individual styles for each of the 5 outer circles. */
/* Each has a unique position, color, and animation timing. */
.element-1{
  --angle: -90deg; /* Angle for positioning. */
  /* Positioned using trigonometry relative to the container center. */
  top: calc(50% + var(--radius) * sin(var(--angle)));
  left: calc(50% + var(--radius) * cos(var(--angle)));
  background-color: rgba(7, 61, 0, var(--bg-opacity));
  animation: shaking-1 8s infinite linear;
}

.element-2{
  --angle: -18deg; /* -90 + 72 */
  top: calc(50% + var(--radius) * sin(var(--angle)));
  left: calc(50% + var(--radius) * cos(var(--angle)));
  background-color: rgba(24, 29, 87, var(--bg-opacity));
  animation: shaking-2 7s infinite linear;
}

.element-3{
  --angle: 54deg; /* -18 + 72 */
  top: calc(50% + var(--radius) * sin(var(--angle)));
  left: calc(50% + var(--radius) * cos(var(--angle)));
  background-color: rgba(101, 24, 24, var(--bg-opacity));
  animation: shaking-1 5s infinite linear;
}

.element-4{
  --angle: 126deg; /* 54 + 72 */
  top: calc(50% + var(--radius) * sin(var(--angle)));
  left: calc(50% + var(--radius) * cos(var(--angle)));
  background-color: rgba(101, 81, 23, var(--bg-opacity));
  animation: shaking-2 9s infinite linear;
}

.element-5{
  --angle: 198deg; /* 126 + 72 */
  top: calc(50% + var(--radius) * sin(var(--angle)));
  left: calc(50% + var(--radius) * cos(var(--angle)));
  background-color: rgba(59, 57, 46, var(--bg-opacity));
  animation: shaking-1 6s infinite linear;
}

/* Styles for the central circle (element-6). */
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
/* Pulsing background effect for the central circle. */
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
/* Decorative ring around the central circle. */
.element-6::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160%;
  height: 160%;
  z-index: -2;
  border-radius: 1000px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: 1s ease-in-out;
  opacity: 0;
  animation: fadeIn 1s ease-in-out 1s forwards;
}

.element-6.element.is-hovered::after,
.element-6.element:hover::after {
  width: 0;
  height: 0;
  transition: 200ms;
}

/* Responsive styles for larger screens (desktop). */
@media (min-width: 800px) {
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

/* Responsive styles for smaller screens (mobile). */
@media (max-width: 799px) {
  .element {
    --element-width: 26%; /* Adjust size for mobile. */
    --element-width-hover: 30%;
    --element-base-font-size: 3vw;
  }

  /* On hover, move circles slightly towards the center to prevent overflow. */
  .element.is-hovered:not(.element-6), .element:hover:not(.element-6) {
    --radius: 30%;
  }

  .element-6 {
    font-size: 3.5vw;
  }

  .element-6.is-hovered,
  .element-6:hover {
    width: 75%;
  }
}

/* Hover state for the central circle. */
.element-6.is-hovered,
.element-6:hover{
  width: 60%; /* Enlarge on hover. */
  z-index: 0;
  transition: all 500ms;
  cursor: default;
}

.element-6.is-hovered::before,
.element-6:hover::before {
  animation: none;
}

/* Styles for when a circle is 'active' (clicked, before navigating). */
.element.active{
  /* Sizing & Positioning */
  width: 400%; /* Greatly expand to fill the screen. */
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
