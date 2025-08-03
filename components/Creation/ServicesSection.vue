<template>
  <div class="services-section">
    <v-card
      class="services-card pa-md-10 pa-8"
      elevation="8"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
    >
      <v-card-title class="services-title">Prise en charge totale</v-card-title>
      <v-card-text class="services-text">
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
</template>

<script setup lang="ts">
</script>

<style scoped>
.services-section {
  display: flex;
  justify-content: center;
  position: relative;
}

.services-card {
  max-width: 750px;
  border-radius: 24px;
  background-color: #f5f5f5;
  backface-visibility: hidden;
  border: 1px solid rgba(0,0,0,0.05);
}

.services-title {
  font-family: 'Recursive', sans-serif;
  justify-content: center;
  text-align: center;
  padding-bottom: 1.5rem;
  font-size: 2.1rem !important;
  font-weight: 500;
  line-height: 1.3;
}

.services-text {
  font-size: 1.1rem;
  font-family: "Montserrat", sans-serif;
  color: #333;
  text-align: center;
}

.service-list .v-list-item {
  font-family: 'Recursive', sans-serif;
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
  color: rgb(85, 85, 85);
  opacity: 0.9;
  max-width: 90%;
  margin: 0 auto;
}
</style>
