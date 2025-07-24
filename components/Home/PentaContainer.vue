<template>
  <div class="penta-container centering">

    <!--
    <div class="cross">
      <MdiIcon icon="mdiClose" class="close" @click="close"/>
    </div>
    -->

    <v-img src="~/public/circle2.png" width="100%" aspect-ratio="1" @load="imageLoaded = true">

      <template v-if="imageLoaded">
        <div v-if="!animationsAreComplete" class="overlay"></div>
        <HomeInteractiveCircle
          v-for="(page, index) in pages"
          :key="page.id"
          :page="page"
          :index="index"
          :is-hovered="hoveredId === page.id"
          :is-mobile="isMobile"
          @circle-click="newPage"
          @circle-mouseover="hoveredId = page.id"
          @circle-mouseleave="hoveredId = null"
        />
      </template>

    </v-img>
  </div>
</template>

<script setup lang="ts">
  const imageLoaded = ref(false);
  const isMobile = ref(false);
  const animationsAreComplete = ref(false);

  onMounted(() => {
    // Simple check for touch support to identify mobile devices
    isMobile.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setTimeout(() => {
      animationsAreComplete.value = true;
    }, 1700);
  });

  const hoveredId = ref<number | null>(null);

  watch(hoveredId, (newVal, oldVal) => {
    if (isMobile.value) {
      if (newVal !== null && oldVal === null) {
        // A circle has been hovered, add listener for the next click outside.
        // Use a timeout to prevent the current click from being caught immediately.
        setTimeout(() => document.addEventListener('click', onOutsideClick), 0);
      } else if (newVal === null && oldVal !== null) {
        // All circles de-hovered, remove the listener.
        document.removeEventListener('click', onOutsideClick);
      }
    }
  });

  onUnmounted(() => {
    document.removeEventListener('click', onOutsideClick);
  });

  const pages = reactive([
    {
      id: 1,
      name:'Création',
      active: false,
      path: '/creation',
      icon: 'mdi-xml',
      bubbles: [
        { icon: 'mdi-monitor-dashboard', angle: 45, distance: 140 },
        { icon: 'mdi-storefront-outline', angle: 130, distance: 135 },
        { icon: 'mdi-pencil', angle: 290, distance: 145 }
      ],
      color: 'rgb(7, 61, 0)'
    },
    {
      id: 2,
      name:'Projets',
      active: false,
      path: '/projects',
      icon: 'mdi-briefcase-outline',
      bubbles: [
        { icon: 'mdi-monitor-shimmer', angle: 20, distance: 145 },
        { icon: 'mdi-check-bold', angle: 280, distance: 135 },
        { icon: 'mdi-image-text', angle: 160, distance: 130 }
      ],
      color: 'rgb(24, 29, 87)'
    },
    {
      id: 3,
      name:'Merci',
      active: false,
      path: '/merci',
      icon: 'mdi-star-outline',
      bubbles: [
        { icon: 'mdi-thumb-up-outline', angle: 0, distance: 130 },
        { icon: 'mdi-heart-outline', angle: 130, distance: 135 },
        { icon: 'mdi-message-text-outline', angle: 240, distance: 145 }
      ],
      color: 'rgb(101, 24, 24)'
    },
    {
      id: 4,
      name:'FAQ',
      active: false,
      path: '/faq',
      icon: 'mdi-help',
      bubbles: [
        { icon: 'mdi-robot-outline', angle: 20, distance: 130 },
        { icon: 'mdi-lightbulb-on-outline', angle: 120, distance: 145 },
        { icon: 'mdi-chat-question-outline', angle: 240, distance: 135 }
      ],
      color: 'rgb(101, 81, 23)'
    },
    {
      id: 5,
      name:'Support',
      active: false,
      path: '/support',
      icon: 'mdi-cogs',
      bubbles: [
        { icon: 'mdi-server-network', angle: 0, distance: 145 },
        { icon: 'mdi-wrench-outline', angle: 120, distance: 135 },
        { icon: 'mdi-shield-lock-outline', angle: 220, distance: 140 }
      ],
      color: 'rgb(59, 57, 46)'
    },
    {
      id: 6,
      name:'Kafoo',
      active: false,
      path: '/kafoo',
      icon: 'mdi-account',
      color: 'rgb(42, 42, 42)'
    },
  ])

  const navigateToPage = (pageId: number) => {
    const page = pages.find(p => p.id === pageId);
    if (page) {
      page.active = true;
      setTimeout(() => {
        const router = useRouter();
        router.push(page.path);
      }, 300);
    }
  };

  const onOutsideClick = () => {
    hoveredId.value = null;
  };

  const newPage = (pageId: number, fromButton: boolean = false) => {
    if (isMobile.value) {
      // On mobile, first tap shows bubbles, second tap navigates.
      if (hoveredId.value === pageId) {
        // On second tap, navigate if it's a button click, or if it's not the central circle.
        if (fromButton || pageId !== 6) {
          navigateToPage(pageId);
        }
      } else {
        hoveredId.value = pageId;
      }
    } else {
      // On desktop, click navigates if it's a button click, or if it's not the central circle.
      if (fromButton || pageId !== 6) {
        navigateToPage(pageId);
      }
    }
  }
</script>

<style scoped>

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  border-radius: 50%;
}

.penta-container {
  --radius: 32.5%;
  --center-element-width: 17%;
  overflow: visible;
  width: min(100%, 100vh);
  max-height: 100vh;
  aspect-ratio: 1;
  max-width: 850px;

  /* Centering with absolute positioning */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.v-img{
  overflow: visible;
}

.close{
  position: fixed;
  top: 50px;
  right: 50px;
  font-size: 30px;
  z-index: 10000;
  cursor: pointer;
}


</style>
