<template>
  <div
    class="hero-section text-center"
    :class="{ 'gradient-active': gradientReady }"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div
      class="floating-icons"
      v-motion
      :initial="{
        opacity: 0,
      }"
      :enter="{
        opacity: 1,
        transition: {
          duration: 900,
          type: 'keyframes',
          ease: 'easeIn',
        },
      }"
    >
      <div
        v-for="(icon, i) in icons"
        :key="i"
        :style="icon.position"
        class="floating-icon-wrapper"
      >
        <v-icon
          :icon="icon.name"
          :size="icon.size"
          :style="{ transform: icon.transform }"
          :color="`rgba(255, 255, 255, ${icon.opacity || 0.3})`"
        ></v-icon>
      </div>
    </div>
    <div class="mx-3 hero-content-wrapper" v-motion-fade-visible-once :delay="100">
      <h1 class="mb-6 page-title">{{ title }}</h1>
      <p class="text-h6 text-md-h5 font-weight-light page-subtitle" v-motion-fade-visible-once :delay="600">
        {{ subtitle }}
      </p>
    </div>
    <div class="scroll-indicator" style="z-index: 2;" v-motion-fade-visible-once :delay="800">
      <v-icon size="50" color="white">mdi-chevron-down</v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, PropType } from 'vue';

const gradientReady = ref(false);

onMounted(() => {
  setTimeout(() => {
    gradientReady.value = true;
  }, 200);
});

interface Icon {
  name: string;
  size: string;
  transform: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    animationDelay: string;
    animationDuration: string;
  };
  opacity?: number;
}

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  icons: {
    type: Array as PropType<Icon[]>,
    default: () => [],
  },
  backgroundColor: {
    type: String,
    default: 'transparent',
  },
});
</script>

<style scoped>
.hero-content-wrapper {
  transform: translateY(-100px);
}
.hero-section {
  min-height: calc(100vh + 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; /* Hide parts of icons that go outside */
  color: white;
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center 50vh, transparent 50%, rgba(0, 0, 0, 0.514));
  opacity: 0;
  transition: opacity 700ms ease-in;
  pointer-events: none;
}

.hero-section.gradient-active::before {
  opacity: 1;
}

.floating-icons {
  position: absolute;
  height: 100%;
  width: 160%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  pointer-events: none;
}

.floating-icon-wrapper {
  position: absolute;
  animation-name: float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  transform: translate(-50%, -50%);
}

@keyframes float {
	0% {
		transform: translate(-50%, -50%) translateY(0px);
	}
	50% {
		transform: translate(-50%, -50%) translateY(-20px);
	}
	100% {
		transform: translate(-50%, -50%) translateY(0px);
	}
}

.scroll-indicator {
  position: absolute;
  bottom: 240px;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.page-title {
  font-family: 'Recursive', sans-serif;
  margin-bottom: 0 !important;
  /* Responsive styles (mobile-first) */
  font-size: 3.5rem;
}

@media (min-width: 600px) { /* For tablets (sm) and up */
  .page-title {
    font-size: 5rem;
    letter-spacing: 0.5rem;
  }
}

@media (min-width: 960px) { /* For desktops (md) and up */
  .page-title {
    font-size: 7rem;
    letter-spacing: 1rem;
  }
}

.page-subtitle{
  font-family: 'monospace';
}
</style>
