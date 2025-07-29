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
      class="creation-header"
      title="Création"
      subtitle="Développement de solutions web sur-mesure."
      :icons="creationIcons"
      />
    <div class="creation-headertail"/>

    <v-row justify="center">
      <v-col cols="12" md="11" lg="9">
        
        <ProjectSection />

        <div class="bubbles-container my-16">
          <InfoBubble
            v-for="(bubble, index) in bubbles"
            :key="index"
            :title="bubble.title"
          >
            <p>{{ bubble.content }}</p>
          </InfoBubble>
        </div>

        <ContentCard title="Un autre besoin ?" v-motion-slide-visible-once-bottom>
          <p class="text-body-1 text-center pa-4">
            Votre projet concerne une <strong>reprise</strong>, une <strong>maintenance</strong>, une <strong>refonte</strong>, de l'<strong>accompagnement</strong>, un <strong>audit</strong> ou l'<strong>optimisation</strong> d'un site existant ?
            <br><br>
            Je vous invite à consulter la page dédiée à ces services.
          </p>
          <div class="text-center mb-2">
            <v-btn to="/support" color="primary" variant="flat">
              <v-icon start>mdi-face-agent</v-icon>
              Services de support
            </v-btn>
          </div>
        </ContentCard>


        <!-- Section: Contact -->
        <v-card class="content-card text-center" v-motion-slide-visible-once-bottom>
          <v-card-text class="pa-5">
            <h2 class="text-h4 mb-4">Contact</h2>
            <p class="mb-4">Discutons de votre projet. Le premier échange est sans engagement.</p>
            <p class="mb-4">Pour en savoir plus sur moi, c'est par <nuxt-link to="/kafoo" class="text-link">ici</nuxt-link>. Vous pouvez aussi lire les <nuxt-link to="/merci" class="text-link">avis</nuxt-link> de mes clients.</p>
            <ContactInfo />
          </v-card-text>
        </v-card>

        <div class="text-center mt-12">
          <v-btn size="small" color="#3a3a3a" to="/">Retour à l'accueil</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import ContactInfo from '~/components/Home/ContactInfo.vue';
import ContentCard from '~/components/ContentCard.vue';
import HeroSection from '~/components/HeroSection.vue';
import ProjectSection from '~/components/Creation/ProjectSection.vue';
import InfoBubble from '~/components/Creation/InfoBubble.vue';
import { creationIcons } from '~/ts/data/creationIcons';

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
  background-color: #073d00; /* Matches element-1 */
  position: relative;
  width: 100%;
}
</style>
