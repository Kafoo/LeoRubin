<template>
  <div class="penta-container centering my-10">
    <v-img src="/pentagram.png" width="90vw" max-width="800px">
      <div class="element element-1"></div>
      <div class="element element-2"></div>
      <div class="element element-3"></div>
      <div class="element element-4"></div>
      <div class="element element-5"></div>
      <div class="element element-6"></div>
    </v-img>
  </div>
</template>

<script lang="ts">


export default {

  name: 'Home',

  setup () {
    return {
    }
  }
}

</script>

<style scoped>

.element{
  position: absolute;
  width: 30%;
  aspect-ratio : 1 / 1;
  border: 3px solid black;
  border-radius: 1000px;
  cursor: pointer;
  transition: 0.2s;
}

.element:hover{
  width: 32%;
  transition: 0.2s;
}

.element-1{
  top: 3%;
  left: 35%;
  background-color: #6f6f6fc4;
}

.element-1:hover{
  left: 34%;
}

.element-2{
  top: 27%;
  right: 3%;
  background-color: #135c0ad9;
}

.element-3{
  bottom: 5%;
  right: 15%;
  background-color: #781313d1;
}

.element-4{
  bottom: 5%;
  left: 15%;
  background-color: #5a6400d8;
}

.element-5{
  top: 27%;
  left: 3%;
  background-color: #211c84d7;
}

.element-6{
  border: 4px solid;
  width: 15%;
  top: 44.4%;
  left: 42.5%;
  background-color: #ffffffa1;
}

.element-6:hover{
  width: 16%;
  left: 42%;
  top: 43.9%;
}
</style>
