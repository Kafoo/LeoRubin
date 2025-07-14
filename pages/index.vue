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
      >
        <div class="element-title ma-3 text-center">{{page.name}}</div>
      </div>

    </v-img>
  </div>
</template>

<script setup lang="ts">


  const pages = reactive([
    {
      id: 1,
      name:'Pratiques',
      active: false,
      path: '/pratiques'
    },
    {
      id: 2,
      name:'Actualités',
      active: false,
      path: '/actualites'
    },
    {
      id: 3,
      name:'Ressources',
      active: false,
      path: '/ressources'
    },
    {
      id: 4,
      name:'Contact',
      active: false,
      path: '/contact'
    },
    {
      id: 5,
      name:'Témoignages',
      active: false,
      path: '/temoignages'
    },
    {
      id: 6,
      name:'Léo',
      active: false,
      path: '/leo'
    },
  ])

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
  --element-width: 30%;
  --element-width-hover: 33%;
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
  --element-base-bg: #222222;
  --element-base-box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.5);
  --element-hover-box-shadow: none;
  --element-active-z-index: 10;
}


@keyframes shaking-1 {
 from{
  transform: rotate(0deg) translateY(-4px) rotate(0deg);
 }
 to{
  transform: rotate(360deg) translateY(-4px) rotate(-360deg);
 }
}

@keyframes shaking-2 {
 from{
  transform: rotate(0deg) translateY(-4px) rotate(0deg);
 }
 to{
  transform: rotate(-360deg) translateY(-4px) rotate(360deg);
 }
}

.v-img{
  overflow: visible;
}

.element{
  /* Positioning & Sizing */
  position: absolute;
  width: var(--element-width);
  aspect-ratio : 1 / 1;
  border-radius: 1000px;
  cursor: pointer;
  z-index: 1;

  /* Visuals */
  opacity: 0.85;
  background-color: var(--element-base-bg);
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

@media (min-width: 1000px) {
  .element {
     font-size: 1.2em;
  }
}

.element:hover{
  width: var(--element-width-hover);
  transition: var(--element-hover-transition-duration) ease-in-out;
  opacity: 1;
  box-shadow: var(--element-hover-box-shadow);
}

.element-1{
  top: 2.5%; /* Medium position */
  left: calc(50% - var(--element-width)/2);
  background-color: #3a2a1a; /* Much darker brown */
  animation: shaking-1 8s infinite linear;
}

.element-2{
  top: 25.0%; /* Medium position */
  left: 65.9%; /* Medium position */
  background-color: #2a1a3a; /* Much darker purple */
  animation: shaking-2 7s infinite linear;
}

.element-3{
  top: 61.3%; /* Medium position */
  left: 54.1%; /* Medium position */
  background-color: #3a1a1a; /* Much darker red */
  animation: shaking-1 5s infinite linear;
}

.element-4{
  top: 61.3%; /* Medium position */
  left: 15.9%; /* Medium position */
  background-color: #1a3a2a; /* Much darker green */
  animation: shaking-2 9s infinite linear;
}

.element-5{
  top: 25.0%; /* Medium position */
  left: 4.1%; /* Medium position */
  background-color: #1a2a3a; /* Much darker blue */
  animation: shaking-1 6s infinite linear;
}

.element-6{
  /* Positioning & Sizing */
  width: 15%; /* Override base width */
  top: 42.5%;
  left: 42.5%;
  padding-left: 0px; /* Remove padding-left for better centering */

  /* Visuals */
  background-color: #2a2a2a; /* Much darker grey for central element */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Unique border */
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.7); /* Override base box-shadow */

  /* Typography */
  font-size: 1.5vw; /* Override base font-size */
  letter-spacing: 3px; /* Override base letter-spacing */
}

@media (min-width: 1000px) {
  .element-6{
     font-size: 1em;
  }
}

.element-1:hover{
  left: calc(50% - var(--element-width-hover)/2);
}

.element-6:hover{
  --width: 60%;
  width: var(--width);
  left: calc(50% - var(--width)/2);
  top: calc(50% - var(--width)/2);
  z-index: 0;
}

.element.active{
  /* Sizing & Positioning */
  width: 400%;
  z-index: var(--element-active-z-index);
  top: -150%;
  left: -150%;

  /* Visuals */
  opacity: 1;
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
