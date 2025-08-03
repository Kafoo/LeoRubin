<template>
  <v-card class="content-card" rounded="xl" elevation="0">
    <v-card-text class="px-5 pt-12 pb-14 content-card-text">
      <slot></slot>
    </v-card-text>
    <div v-if="$slots.footer" class="footer-slot pa-5">
      <slot name="footer"></slot>
    </div>
  </v-card>
</template>

<script setup lang="ts">

</script>


<style scoped>

h2{
  font-family: "Caveat Brush";
  font-size: 3.5rem;
  font-weight: normal;
  letter-spacing: 0.5rem;
  color: rgb(75, 75, 75);
}

.content-card {
  background-color: rgb(231, 231, 231);
  overflow: hidden;
}

.content-card-text{
    background-image: url('texture_white.jpeg');
}

.footer-slot {
  background: url('texture_noir.jpg');
  background-size: cover;
  color: rgb(233, 233, 233);
  border: 1px solid rgb(228, 228, 228);
  border-top: none;;
  border-radius: 0 0 24px 24px;
}

@media screen and (max-width: 600px) {
  h2 {
    font-size: 2.5rem;
    letter-spacing: 0.3rem;
  }
}
</style>
