<template>
  <div class="penta-container centering my-10">
    <div class="cross">
      <MdiIcon icon="mdiClose" class="close" @click="close"/>
    </div>
    <v-img src="/pentagram.png" width="90vw" max-width="800px">

      <div v-for="page in pages" :key="page.id"
      class="element centering"
      :class="['element-'+page.id,
      pages[page.id]?.active?'active':'']"
      @click="newPage(page.id)"
      >
        <div class="element-title">{{page.name}}</div>
      </div>

    </v-img>
  </div>
</template>

<script setup lang="ts">


  const pages = reactive([
    {
      id: 1,
      name:'Pratiques',
      active: false
    },
    {
      id: 2,
      name:'Actualités',
      active: false
    },
    {
      id: 3,
      name:'Ressources',
      active: false
    },
    {
      id: 4,
      name:'Contact',
      active: false
    },
    {
      id: 5,
      name:'Témoignages',
      active: false
    },
    {
      id: 6,
      name:'Qui suis-je',
      active: false
    },
  ])

  onMounted(() => { 
      console.log(document.querySelector('.test')) 

  });

  const newPage = (page:number) => {
    pages[page].active = true
    console.log(pages)
  }

  const close = () => {
    pages.forEach(page => {
      page.active = false
    });
  }


</script>

<style scoped>

.penta-container {
  --element-width: 25%;
  overflow: visible;
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
  border: 3px solid black;
  border-radius: 1000px;
  cursor: pointer;
  transition: 0.2s;
  opacity: 0.9;
  font-weight: bold;
}

.element:hover{
  width: 32%;
  transition: 0.2s;
  opacity: 1;
}

.element-1{
  top: 3%;
  left: calc(50% - var(--element-width)/2);
  background-color: #6f6f6f;
}

.element-1:hover:not(.active){
  left: 34%;
}

.element-2{
  top: 28%;
  right: 3%;
  left: auto;
  background-color: #145c0a;
}

.element-3{
  bottom: 7%;
  right: 15%;
  background-color: #781313;
}

.element-4{
  bottom: 7%;
  left: 15%;
  background-color: #5a6400;
}

.element-5{
  top: 27%;
  left: 3%;
  background-color: #211c84;
}

.element-6{
  border: 4px solid;
  width: 15%;
  top: 44.4%;
  left: 42.5%;
  background-color: #ffffff;
}

.element-6:hover{
  --width: 20%;
  width: var(--width);
  left: calc(50% - var(--width)/2);
  top: calc(52% - var(--width)/2);
}

.element.active{
  width: 300%;
  z-index: 10;
  opacity: 1;
  transition: 1s;
}

.element-1.active,
.element-5.active{
  top: -100%;
  left: -100%;
}

.element-2.active{
  top: -100%;
  right: -100%;
}

.element-3.active{
  bottom: -100%;
  right: -100%;
}

.element-4.active{
  bottom: -100%;
  left: -100%;
}

.close{
  position: absolute;
  top: 50px;
  right: 50px;
  font-size: 30px;
  z-index: 100;
  cursor: pointer;
}


</style>
