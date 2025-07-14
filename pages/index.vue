<template>
  <div class="penta-container centering">

    <!--
    <div class="cross">
      <MdiIcon icon="mdiClose" class="close" @click="close"/>
    </div>
    -->

    <v-img src="/circle.png" width="100%" aspect-ratio="1">

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
    }, 750);
  }

  const close = () => {
    pages.forEach(page => {
      page.active = false
    });
  }


</script>

<style scoped>

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


.penta-container {
  --element-width: 27%;
  --element-width-hover: 30%;
  overflow: visible;
  width: 90%;
  max-width: 800px;
  margin: 70px auto;
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
  color: #cacaca;
  text-shadow: 0 0 7px black;
  box-shadow: 1px 1px 20px 0px #000000a6;
}

@media (min-width: 1000px) {
  .element {
     font-size: 1.2em;
  }
}

.element:hover{
  width: var(--element-width-hover);
  transition: 0.12s;
  opacity: 1;
  border: none;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.568);
  text-shadow: none;
}

.element-1{
  top: 0%;
  left: calc(50% - var(--element-width)/2);
  background-color: #8d633d;
  animation: shaking-1 8s infinite linear;
}

.element-2{
  top: 26.5%;
  right: 3%;
  left: auto;
  background-color: #50327f;
  animation: shaking-2 7s infinite linear;
}

.element-3{
  bottom: 7%;
  right: 13%;
  background-color: #7F1D1D;
  animation: shaking-1 5s infinite linear;
}

.element-4{
  bottom: 7%;
  left: 13%;
  background-color: #4c775d;
  animation: shaking-2 9s infinite linear;
}

.element-5{
  top: 26.5%;
  left: 3%;
  background-color: #4f7b97;
  animation: shaking-1 6s infinite linear;
}

.element-6{
  border: 0px solid;
  width: 15%;
  top: 44.4%;
  left: 42.5%;
  background-color: #e2e2d2;
  box-shadow: 0px 1px 50px 10px #757575;
  font-size: 1.5vw;
  color: #606060;
  text-shadow: none;
  letter-spacing: 5px;
  padding-left: 4px;
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
  transition: 750ms ease-in-out;
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
