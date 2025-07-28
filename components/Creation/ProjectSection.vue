<template>
  <ContentCard title="Votre projet" class="mx-5 mb-10" style="margin-top: -150px;">
    <v-row class="pa-2">
      <v-col
        v-for="(item, i) in projectItems"
        :key="i"
        cols="12"
        md="6"
        lg="4"
        class="text-center pa-5"
      >
        <v-icon :icon="item.icon" size="64" class="mb-4" :color="item.color"></v-icon>
        <h3 class="text-h6 mb-2">{{ item.title }}</h3>
        <p class="text-body-1">{{ item.subtitle }}</p>
      </v-col>
    </v-row>
    <template #footer>
      <div class="text-center">
        <p class="text-body-1 mb-4">
          Quel que soit votre projet, la première étape est de prendre contact pour que nous puissions définir ensemble la meilleure solution.
        </p>
        <v-btn href="#contact" color="primary" variant="flat" size="large" rounded="lg">
          Discutons de votre projet
        </v-btn>
      </div>
    </template>
  </ContentCard>
</template>

<script setup lang="ts">
import ContentCard from '~/components/ContentCard.vue';

const projectItems = [
  {
    icon: 'mdi-rocket-launch-outline',
    title: 'Lancer une nouvelle activité',
    subtitle: 'Créer une présence en ligne professionnelle pour démarrer votre projet.',
    color: 'primary'
  },
  {
    icon: 'mdi-autorenew',
    title: 'Moderniser un site existant',
    subtitle: 'Mettre à jour le design, la technologie ou les fonctionnalités de votre site actuel.',
    color: 'teal'
  },
  {
    icon: 'mdi-cart-outline',
    title: 'Vendre en ligne',
    subtitle: 'Mettre en place une boutique e-commerce performante et sécurisée.',
    color: 'green'
  },
  {
    icon: 'mdi-tools',
    title: 'Développer un outil sur-mesure',
    subtitle: 'Créer une application web ou un intranet pour répondre à un besoin métier spécifique.',
    color: 'deep-orange'
  },
  {
    icon: 'mdi-post-outline',
    title: 'Créer un blog ou un portfolio',
    subtitle: 'Partager vos idées, vos créations ou présenter votre travail de manière professionnelle.',
    color: 'blue-grey'
  },
  {
    icon: 'mdi-robot-industrial-outline',
    title: 'Automatiser un processus',
    subtitle: 'Gagner en efficacité en créant un outil qui automatise des tâches répétitives.',
    color: 'purple'
  }
];
</script>
