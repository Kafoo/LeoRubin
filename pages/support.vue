<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <div class="text-center mb-12">
          <h1 class="text-h2 font-weight-bold mb-4" style="color: white;">Support & Maintenance</h1>
          <p class="text-h6 font-weight-light" style="color: #f0f0f0;">
            Un site web vit et évolue. Je vous accompagne pour garantir sa pérennité, sa sécurité et ses performances.
          </p>
        </div>

        <v-card class="content-card mb-10">
          <v-card-text class="pa-5">
            <h2 class="text-h4 mb-4">Gestion Technique</h2>
            <v-list lines="one" bg-color="transparent">
              <v-list-item prepend-icon="mdi-server-network" title="Hébergement & Mise en ligne"></v-list-item>
              <v-list-item prepend-icon="mdi-shield-check-outline" title="Maintenance technique & Sécurité"></v-list-item>
              <v-list-item prepend-icon="mdi-backup-restore" title="Sauvegardes & Mises à jour"></v-list-item>
              <v-list-item prepend-icon="mdi-earth" title="Gestion de noms de domaine & SSL"></v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-card class="content-card mb-10">
          <v-card-text class="pa-5">
            <h2 class="text-h4 mb-4">Optimisation & Évolution</h2>
            <v-list lines="one" bg-color="transparent">
              <v-list-item prepend-icon="mdi-speedometer" title="Audit & Optimisation des performances"></v-list-item>
              <v-list-item prepend-icon="mdi-google-analytics" title="Amélioration du référencement (SEO)"></v-list-item>
              <v-list-item prepend-icon="mdi-plus-box-multiple" title="Développement de nouvelles fonctionnalités"></v-list-item>
              <v-list-item prepend-icon="mdi-brush" title="Refonte graphique ou technique"></v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-card class="content-card mb-10">
          <v-card-text class="pa-5 text-center">
            <p class="text-body-1">
              Ces services s'appliquent aux sites que je développe (<nuxt-link to="/creation" class="text-link">voir l'offre de création</nuxt-link>) mais aussi à des projets existants, après un audit initial.
            </p>
            <p class="text-body-1 mt-2">
              Pour toute question, la <nuxt-link to="/faq" class="text-link">FAQ</nuxt-link> est un bon point de départ.
            </p>
          </v-card-text>
        </v-card>

        <!-- Section: Contact -->
        <v-card class="content-card text-center">
          <v-card-text class="pa-5">
            <h2 class="text-h4 mb-4">Contact</h2>
            <p class="mb-4">Un besoin spécifique ? Contactez-moi pour en discuter.</p>
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
