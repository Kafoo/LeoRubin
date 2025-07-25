<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <div class="text-center mb-12" v-motion-fade-visible-once :delay="200">
          <h1 class="text-h2 font-weight-bold mb-4" style="color: white;">Création</h1>
          <p class="text-h6 font-weight-light" style="color: #f0f0f0;">
            Développement de solutions web sur-mesure.
          </p>
        </div>

        <v-card class="content-card mb-10" v-motion-slide-visible-once-bottom>
          <v-card-text class="pa-5">
            <h2 class="text-h4 mb-4">Ma démarche</h2>
            <v-list lines="two" bg-color="transparent">
              <v-list-item prepend-icon="mdi-ear-hearing" title="Analyse des besoins" subtitle="Écoute et analyse de votre projet pour proposer une solution technique adaptée."></v-list-item>
              <v-list-item prepend-icon="mdi-cogs" title="Approche technique flexible" subtitle="Développement sur-mesure (Nuxt, Laravel) ou intégration de CMS (WordPress) selon vos objectifs."></v-list-item>
              <v-list-item prepend-icon="mdi-devices" title="Conception responsive" subtitle="Une expérience utilisateur optimale sur ordinateur, tablette et mobile."></v-list-item>
              <v-list-item prepend-icon="mdi-lightbulb-on-outline" title="Tout type de projet" subtitle="Site vitrine, e-commerce, application métier (SaaS), intranet..."></v-list-item>
            </v-list>
            <p class="text-body-1 mt-4 text-center">
              Consultez mes <nuxt-link to="/projects" class="text-link">projets</nuxt-link> pour voir des exemples concrets.
            </p>
          </v-card-text>
        </v-card>

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
  </v-container>
</template>

<script setup lang="ts">
import ContactInfo from '~/components/Home/ContactInfo.vue';
</script>

<style scoped>
.content-card {
  background-color: rgba(255, 255, 255, 0.9);
  color: #3a3a3a;
}

.text-link {
  color: #1976D2; /* Vuetify primary color */
  text-decoration: none;
  font-weight: bold;
}

.text-link:hover {
  text-decoration: underline;
}
</style>
