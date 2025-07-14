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
    }, 500);
  }

  const close = () => {
    pages.forEach(page => {
      page.active = false
    });
  }


</script>

<style scoped>



.penta-container {
  --element-width: 27%;
  --element-width-hover: 30%;
  overflow: visible;
  width: 90%;
  max-width: 800px;
  margin: 70px auto;
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


@media (max-width: 600px) {
  .penta-container {
     margin: 40px auto;
  }
}

.plop{
  display: none !important;
}

.v-img{
  overflow: visible;
}

.element{
  position: absolute;
  width: var(--element-width);
  aspect-ratio : 1 / 1;
  border-radius: 1000px;
  cursor: pointer;
  transition: 0.2s;
  opacity: 0.97;
  font-weight: bold;
  font-size: 2vw;
  word-spacing: 100vw;
  letter-spacing: 2px;
  color: #e0e0e0; /* Lighter text for dark background */
  text-shadow: none; /* Remove text shadow for cleaner look */
  background-color: rgba(255, 255, 255, 0.05); /* Very subtle base for glass */
  backdrop-filter: blur(8px) saturate(150%); /* Glass effect */
  -webkit-backdrop-filter: blur(8px) saturate(150%); /* For Safari */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5); /* Adjusted shadow */
}

@media (min-width: 1000px) {
  .element {
     font-size: 1.2em;
  }
}

.element:hover{
  width: var(--element-width-hover);
  transition: 0.2s ease-in-out; /* Smoother transition */
  opacity: 1;
  border: none;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.6); /* More pronounced but soft shadow on hover */
  text-shadow: none;
}

.element-1{
  top: 0%;
  left: calc(50% - var(--element-width)/2);
  background-color: rgba(106, 74, 58, 0.7); /* Semi-transparent brown */
  animation: shaking-1 8s infinite linear;
}

.element-2{
  top: 26.5%;
  right: 3%;
  left: auto;
  background-color: rgba(74, 58, 106, 0.7); /* Semi-transparent purple */
  animation: shaking-2 7s infinite linear;
}

.element-3{
  bottom: 7%;
  right: 13%;
  background-color: rgba(106, 58, 58, 0.7); /* Semi-transparent red */
  animation: shaking-1 5s infinite linear;
}

.element-4{
  bottom: 7%;
  left: 13%;
  background-color: rgba(58, 106, 74, 0.7); /* Semi-transparent green */
  animation: shaking-2 9s infinite linear;
}

.element-5{
  top: 26.5%;
  left: 3%;
  background-color: rgba(58, 74, 106, 0.7); /* Semi-transparent blue */
  animation: shaking-1 6s infinite linear;
}

.element-6{
  border: 0px solid;
  width: 15%;
  top: 44.4%;
  left: 42.5%;
  background-color: rgba(74, 74, 74, 0.7); /* Semi-transparent grey for central element */
  backdrop-filter: blur(8px) saturate(150%); /* Apply glass effect to central element too */
  -webkit-backdrop-filter: blur(8px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.7); /* Keep existing shadow for central element */
  font-size: 1.5vw;
  color: #e0e0e0; /* Lighter text */
  text-shadow: none;
  letter-spacing: 3px; /* Slightly less aggressive letter spacing */
  padding-left: 0px; /* Remove padding-left for better centering */
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
  --width: 22%;
  width: var(--width);
  left: calc(50% - var(--width)/2);
  top: calc(52% - var(--width)/2);
}

.element.active{
  width: 400%;
  z-index: 10;
  opacity: 1;
  color: transparent;
  transition: 400ms ease-in-out; /* Add ease-in-out for smoother effect */
  text-shadow: none;
}

.element-1.active,
.element-5.active{
  top: -150%;
  left: -150%;
}

.element-2.active{
  top: -150%;
  right: -150%;
}

.element-3.active{
  bottom: -150%;
  right: -150%;
}

.element-4.active{
  bottom: -150%;
  left: -150%;
}

.element-6.active{
  top: -150%;
  left: -150%;
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
