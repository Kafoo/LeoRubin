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

      <div class="bubbles-container my-16">
        <v-card
          class="info-bubble-card pa-md-12 pa-8"
          elevation="8"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
        >
          <v-card-title class="bubble-title">Une prise en charge de A à Z</v-card-title>
          <v-card-text class="bubble-text">
            <p class="mb-8">
              De la conception à la mise en ligne, je peux piloter toutes les étapes de la création de votre site web pour vous offrir une solution clé en main.
            </p>
            <v-list bg-color="transparent" class="service-list text-left">
              <v-list-item
                prepend-icon="mdi-palette-swatch-outline"
                title="Front-end"
                subtitle="Interface utilisateur et expérience visuelle"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-database-cog-outline"
                title="Back-end"
                subtitle="Logique serveur et gestion des données"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-rocket-launch-outline"
                title="Déploiement & Hébergement"
                subtitle="Mise en ligne et maintenance du serveur"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-web"
                title="Nom de domaine & SEO"
                subtitle="Réservation d'adresse et optimisation"
              ></v-list-item>
            </v-list>
            <v-divider class="my-8"></v-divider>
            <p class="flexibility-text">
              <strong>Mon intervention est flexible.</strong> Nous pouvons définir ensemble le périmètre de ma mission pour qu'elle s'adapte parfaitement à vos besoins et à votre budget.
            </p>
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
  max-width: 750px;
  border-radius: 24px;
  background-image: url('texture_white.jpeg');
  background-color: #f5f5f5;
  backface-visibility: hidden;
  border: 1px solid rgba(0,0,0,0.05);
}

.bubble-title {
  color: #0d490d;
  font-family: 'Recursive', sans-serif;
  justify-content: center;
  text-align: center;
  padding-bottom: 1.5rem;
  font-size: 1.75rem !important;
  font-weight: 500;
  line-height: 1.3;
}

.bubble-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  text-align: center;
}

.service-list .v-list-item {
  margin-bottom: 1rem;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.service-list .v-list-item-title {
  font-weight: 500;
}

.service-list .v-list-item-subtitle {
  white-space: normal;
  opacity: 0.8;
}

.service-list .v-icon {
  color: #073d00;
  font-size: 2rem;
  margin-right: 1.5rem;
  opacity: 0.9;
}

.flexibility-text {
  font-size: 1rem;
  font-style: italic;
  opacity: 0.9;
  max-width: 90%;
  margin: 0 auto;
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
