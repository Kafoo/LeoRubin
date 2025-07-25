<template>
  <div class="hero-section text-center" v-motion-fade-visible-once :delay="200">
    <div class="floating-icons">
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
    <div style="z-index: 1;">
      <h1 class="text-h3 text-md-h1 mb-6 page-title" style="color: white;">{{ title }}</h1>
      <p class="text-h6 text-md-h5 font-weight-light page-subtitle" style="color: #f0f0f0;">
        {{ subtitle }}
      </p>
    </div>
    <div class="scroll-indicator" style="z-index: 2;">
      <v-icon size="x-large" color="white">mdi-chevron-down</v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});

const icons = [
  { name: 'mdi-language-html5', size: 'x-large', transform: 'rotate(-15deg)', position: { top: '15%', left: '10%', animationDelay: '0s', animationDuration: '5s' } },
  { name: 'mdi-language-css3', size: 'large', transform: 'rotate(10deg)', position: { top: '20%', right: '12%', animationDelay: '1s', animationDuration: '7s' } },
  { name: 'mdi-language-javascript', size: 'x-large', transform: 'rotate(5deg)', position: { top: '65%', left: '5%', animationDelay: '2s', animationDuration: '6s' } },
  { name: 'mdi-wordpress', size: 'large', transform: 'rotate(-10deg)', position: { top: '75%', right: '8%', animationDelay: '0.5s', animationDuration: '8s' } },
  { name: 'mdi-database', size: 'large', transform: 'rotate(15deg)', position: { bottom: '10%', left: '20%', animationDelay: '1.5s', animationDuration: '5s' } },
  { name: 'mdi-cellphone-link', size: 'large', transform: 'rotate(20deg)', position: { top: '40%', right: '20%', animationDelay: '2.5s', animationDuration: '7s' } },
  { name: 'mdi-language-php', size: 'x-large', transform: 'rotate(-5deg)', position: { bottom: '15%', right: '25%', animationDelay: '3s', animationDuration: '6s' } },
  { name: 'mdi-sitemap', size: 'large', transform: 'rotate(-20deg)', position: { top: '50%', left: '12%', animationDelay: '1.2s', animationDuration: '8s' } },
  { name: 'mdi-vuejs', size: 'x-large', transform: 'rotate(12deg)', position: { top: '35%', left: '30%', animationDelay: '0.8s', animationDuration: '7.5s' } },
  { name: 'mdi-laravel', size: 'large', transform: 'rotate(-8deg)', position: { top: '65%', right: '35%', animationDelay: '2.2s', animationDuration: '5.5s' } },
  { name: 'mdi-git', size: 'large', transform: 'rotate(18deg)', position: { bottom: '15%', left: '45%', animationDelay: '3.5s', animationDuration: '8s' } },
  { name: 'mdi-rocket-launch-outline', size: 'large', transform: 'rotate(-12deg)', position: { top: '10%', right: '30%', animationDelay: '0.2s', animationDuration: '6.5s' } },
];
</script>

<style scoped>
.hero-section {
  min-height: 86vh;
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
  bottom: -5px;
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
