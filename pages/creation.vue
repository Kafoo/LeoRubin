<template>
  <div class="creation-page-container">

    <v-btn
      icon="mdi-home-outline"
      to="/"
      class="home-button"
      variant="flat"
      color="rgba(255, 255, 255, 0.15)"
      title="Retour à l'accueil"
    ></v-btn>
    <HeroSection
      title="Création"
      subtitle="Développement de solutions web sur-mesure."
      :icons="creationIcons"
      background-color="#073d00"
    />
    <div class="centering-column">

      <ProjectSection class="project-section mb-100" style="margin-top: -150px;"/>

      <ServicesSection class="my-16" />

    </div>    


  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import ProjectSection from '~/components/Creation/ProjectSection.vue';
import ServicesSection from '~/components/Creation/ServicesSection.vue';
import { creationIcons } from '~/ts/data/creationIcons';
</script>

<style scoped>

.project-section{
  max-width: 1200px;
}


.creation-page-container {
  position: relative;
}

.creation-page-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background-color: rgb(236, 236, 236);
}

.home-button {
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 10;
}

</style>
