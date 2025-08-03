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

      <ProjectSection class="project-section mb-12" style="margin-top: -150px;"/>

      <div class="bubbles-container my-16">
        <InfoBubble
          v-for="(bubble, index) in bubbles"
          :key="index"
          :title="bubble.title"
        >
          <p>{{ bubble.content }}</p>
        </InfoBubble>
      </div>

    </div>    


  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import ProjectSection from '~/components/Creation/ProjectSection.vue';
import InfoBubble from '~/components/Creation/InfoBubble.vue';
import { creationIcons } from '~/ts/data/creationIcons';

const bubbles = [
  {
    title: 'Analyse des besoins',
    content: 'Écoute et analyse de votre projet pour proposer une solution technique adaptée.'
  }
];
</script>

<style scoped>

.project-section{
  max-width: 1200px;
}

.bubbles-container {
  display: flex;
  flex-direction: column;
  position: relative;
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
