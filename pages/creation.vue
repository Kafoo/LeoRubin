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


        <div style="height: 1000px;"></div>


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

        <ContentCard title="Ma démarche">
          <v-list lines="two" bg-color="transparent">
            <v-list-item prepend-icon="mdi-ear-hearing" title="Analyse des besoins" subtitle="Écoute et analyse de votre projet pour proposer une solution technique adaptée."></v-list-item>
            <v-list-item prepend-icon="mdi-cogs" title="Approche technique flexible" subtitle="Développement sur-mesure (Nuxt, Laravel) ou intégration de CMS (WordPress) selon vos objectifs."></v-list-item>
            <v-list-item prepend-icon="mdi-devices" title="Conception responsive" subtitle="Une expérience utilisateur optimale sur ordinateur, tablette et mobile."></v-list-item>
            <v-list-item prepend-icon="mdi-lightbulb-on-outline" title="Tout type de projet" subtitle="Site vitrine, e-commerce, application métier (SaaS), intranet..."></v-list-item>
          </v-list>
          <p class="text-body-1 mt-4 text-center">
            Consultez mes <nuxt-link to="/projects" class="text-link">projets</nuxt-link> pour voir des exemples concrets.
          </p>
        </ContentCard>

        <!-- Section: Processus -->
        <div class="mb-12" v-motion-slide-visible-once-bottom>
            <h2 class="text-h4 text-center mb-8" style="color: white;">Le processus</h2>
            <v-timeline align="start" side="end" theme="dark">
                <v-timeline-item dot-color="primary" size="small">
                    <template v-slot:opposite><span class="font-weight-bold">Étape 1</span></template>
                    <v-card class="content-card">
                      <v-card-title class="text-h6">Contact & Devis</v-card-title>
                      <v-card-text>Discussion sur votre projet, vos objectifs et proposition d'un devis gratuit.</v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item dot-color="primary" size="small">
                    <template v-slot:opposite><span class="font-weight-bold">Étape 2</span></template>
                    <v-card class="content-card">
                      <v-card-title class="text-h6">Développement</v-card-title>
                      <v-card-text>Création et développement de la solution, avec des points d'étape réguliers.</v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item dot-color="primary" size="small">
                    <template v-slot:opposite><span class="font-weight-bold">Étape 3</span></template>
                    <v-card class="content-card">
                      <v-card-title class="text-h6">Mise en ligne & Suivi</v-card-title>
                      <v-card-text>Déploiement de votre site. Je propose aussi des solutions de <nuxt-link to="/support" class="text-link">maintenance</nuxt-link> pour la suite.</v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </div>

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
import { creationIcons } from '~/ts/data/creationIcons';
</script>

<style scoped>
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
  background-color: rgba(255, 255, 255, 0.15);
  z-index: -1;
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
