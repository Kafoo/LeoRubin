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
    <div class="creation-header-wrapper" :class="{ 'gradient-active': headerReady }">
      <HeroSection
        class="creation-header"
        title="Création"
        subtitle="Développement de solutions web sur-mesure."
        :icons="creationIcons"
        />
      <div class="creation-headertail"/>
    </div>

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
import { ref, onMounted } from 'vue';
import HeroSection from '~/components/HeroSection.vue';
import ProjectSection from '~/components/Creation/ProjectSection.vue';
import InfoBubble from '~/components/Creation/InfoBubble.vue';
import { creationIcons } from '~/ts/data/creationIcons';

const headerReady = ref(false);

onMounted(() => {
  setTimeout(() => {
    headerReady.value = true;
  }, 200);
});

const bubbles = [
  {
    title: 'Analyse des besoins',
    content: 'Écoute et analyse de votre projet pour proposer une solution technique adaptée.'
  },
  {
    title: 'Approche technique flexible',
    content: 'Développement sur-mesure (Nuxt, Laravel) ou intégration de CMS (WordPress) selon vos objectifs.'
  },
  {
    title: 'Développement & Suivi',
    content: 'Création et développement de la solution, avec des points d\'étape réguliers, suivi du déploiement de votre site. Des solutions de maintenance sont aussi proposées pour la suite.'
  },
  {
    title: 'Mes outils de prédilection',
    content: 'Nuxt.js, Vue.js, et Vuetify pour le front-end. Laravel/PHP pour le back-end. J\'utilise aussi WordPress quand c\'est la solution la plus adaptée.'
  },
  {
    title: 'Conception responsive',
    content: 'Une expérience utilisateur optimale sur ordinateur, tablette et mobile.'
  },
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

.text-link {
  color: #1976D2; /* Vuetify primary color */
  text-decoration: none;
  font-weight: bold;
}

.text-link:hover {
  text-decoration: underline;
}

.creation-headertail{
  top: -5px;
  height: 200px;
  background-color: transparent;
  position: relative;
  width: 100%;
}
</style>
