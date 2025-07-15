<template>
  <div class="penta-container centering">

    <!--
    <div class="cross">
      <MdiIcon icon="mdiClose" class="close" @click="close"/>
    </div>
    -->

    <v-img src="/circle2.png" width="100%" aspect-ratio="1">

      <div v-for="page in pages" :key="page.id"
      class="element centering"
      :class="['element-'+page.id,
      pages[page.id-1]?.active?'active':'']"
      @click="newPage(page.id)"
      @mouseover="hoveredId = page.id"
      @mouseleave="hoveredId = null"
      >
        <div class="element-title ma-3 text-center">
          <span v-if="hoveredId === page.id">{{ page.name }}</span>
          <v-icon v-else :icon="page.icon" class="page-icon"></v-icon>
        </div>
      </div>

    </v-img>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from 'vuetify/components';



  const pages = reactive([
    {
      id: 1,
      name:'Création',
      active: false,
      path: '/creation',
      icon: 'mdi-palette'
    },
    {
      id: 2,
      name:'Projets',
      active: false,
      path: '/projects',
      icon: 'mdi-briefcase'
    },
    {
      id: 3,
      name:'Merci',
      active: false,
      path: '/merci',
      icon: 'mdi-heart'
    },
    {
      id: 4,
      name:'FAQ',
      active: false,
      path: '/faq',
      icon: 'mdi-help-circle'
    },
    {
      id: 5,
      name:'Support',
      active: false,
      path: '/support',
      icon: 'mdi-lifebuoy'
    },
    {
      id: 6,
      name:'Kafoo',
      active: false,
      path: '/kafoo',
      icon: 'mdi-account'
    },
  ])

  const hoveredId = ref<number | null>(null);

  const newPage = (page:number) => {
    pages[page-1].active = true
    setTimeout(() => {
    const router = useRouter()
      router.push(pages[page-1].path)
    }, 300);
  }

  const close = () => {
    pages.forEach(page => {
      page.active = false
    });
  }


</script>

<style scoped>



.penta-container {
  --element-width: 28%;
  --element-width-hover: 36%;
  --radius: 32.5%;
  --center-element-width: 15%;
  overflow: visible;
  width: 100%;
  max-width: 800px;

  /* Centering with absolute positioning */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* New variables for better maintainability */
  --element-base-transition-duration: 0.2s;
  --element-hover-transition-duration: 0.15s;
  --element-active-transition-duration: 400ms;
  --element-base-font-size: 3vw;
  --element-base-letter-spacing: 2px;
  --element-base-color: #e0e0e0;
  --element-base-box-shadow: 0px 0px 20px 8px rgb(0 0 0 / 27%);;
  --element-hover-box-shadow: none;
  --element-active-z-index: 10;
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

.v-img{
  overflow: visible;
}

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


.element-1, .element-2, .element-3, .element-4, .element-5 {
  width: var(--element-width);
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
  background-color: rgba(42, 42, 42, var(--bg-opacity)); /* Much darker grey for central element */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Unique border */
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.7); /* Override base box-shadow */

  /* Typography */
  font-size: 2.5vw; /* Override base font-size */
  letter-spacing: 3px; /* Override base letter-spacing */
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


.element-6:hover{
  --width: 60%;
  width: var(--width);
  z-index: 0;
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

  /* Transitions */
  transition: all var(--element-active-transition-duration) ease-in-out, backdrop-filter 0s;
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
