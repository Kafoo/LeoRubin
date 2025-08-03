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
        <v-card
          class="info-bubble-card pa-8"
          elevation="8"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
        >
          <v-card-title class="text-h6 bubble-title">Ma boîte à outils</v-card-title>
          <v-card-text class="bubble-text">
            <p class="mb-4">
              Je sélectionne les technologies les plus adaptées pour répondre aux besoins spécifiques de chaque projet. Voici mes outils de prédilection :
            </p>
            <ul class="tool-list">
              <li>Vue.js, Vuetify</li>
              <li>Laravel, PHP</li>
              <li>APIs REST</li>
              <li>CMS (WordPress, Strapi...)</li>
              <li>Assistance par IA</li>
            </ul>
          </v-card-text>
        </v-card>
      </div>

    </div>    


  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import ProjectSection from '~/components/Creation/ProjectSection.vue';
import { creationIcons } from '~/ts/data/creationIcons';
</script>

<style scoped>

.project-section{
  max-width: 1200px;
}

.bubbles-container {
  display: flex;
  justify-content: center;
  position: relative;
}

.info-bubble-card {
  max-width: 450px;
  border-radius: 16px;
  background-color: #f5f5f5;
  backface-visibility: hidden;
}

.bubble-title {
  color: #0d490d;
  font-family: 'Recursive', sans-serif;
  justify-content: center;
  text-align: center;
  padding-bottom: 1rem;
}

.bubble-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  text-align: left;
}

.tool-list {
  list-style-type: '✔  ';
  padding-left: 1.5rem;
}

.tool-list li {
  margin-bottom: 0.5rem;
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
