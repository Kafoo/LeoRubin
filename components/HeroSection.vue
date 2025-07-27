<template>
  <div class="hero-section text-center">
    <div class="floating-icons" v-motion-fade-visible-once :delay="200">
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
          color="rgba(255, 255, 255, 0.3)"
        ></v-icon>
      </div>
    </div>
    <div style="z-index: 1;" v-motion-fade-visible-once :delay="100">
      <h1 class="text-h3 text-md-h1 mb-6 page-title" style="color: white;">{{ title }}</h1>
      <p class="text-h6 text-md-h5 font-weight-light page-subtitle" style="color: #f0f0f0;">
        {{ subtitle }}
      </p>
    </div>
    <div class="scroll-indicator" style="z-index: 2;" v-motion-fade-visible-once :delay="800">
      <v-icon size="x-large" color="white">mdi-chevron-down</v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

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
});
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 6rem;
  overflow: hidden; /* Hide parts of icons that go outside */
}

.floating-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-icon-wrapper {
  position: absolute;
  animation-name: float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes float {
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-20px);
	}
	100% {
		transform: translateY(0px);
	}
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
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
  font-family: 'Philosopher', sans-serif;
  letter-spacing: 8px !important;
}

.page-subtitle{
  font-family: monospace;
}
</style>
