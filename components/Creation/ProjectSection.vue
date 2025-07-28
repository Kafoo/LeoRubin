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
        <v-icon :icon="item.icon" size="64" class="mb-4" color="grey-darken-1"></v-icon>
        <h3 class="text-h6 mb-2 project-title">{{ item.title }}</h3>
        <p class="text-body-1 project-subtitle">{{ item.subtitle }}</p>
      </v-col>
    </v-row>
    <template #footer>
      <div class="text-center centering-column">
        <p class="footer-text pa-6">
          Quel que soit votre projet, un premier contact n'engage à rien et permettra de savoir si nous avons envie de nous lancer dans cette aventure ensemble.
        </p>
        <v-btn class="ma-3" color="primary" variant="flat" size="large" rounded="lg">
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
  },
  {
    icon: 'mdi-autorenew',
    title: 'Moderniser un site existant',
    subtitle: 'Mettre à jour le design, la technologie ou les fonctionnalités de votre site actuel.',
  },
  {
    icon: 'mdi-cart-outline',
    title: 'Vendre en ligne',
    subtitle: 'Mettre en place une boutique e-commerce performante et sécurisée.',
  },
  {
    icon: 'mdi-tools',
    title: 'Développer un outil sur-mesure',
    subtitle: 'Créer une application web ou un intranet pour répondre à un besoin métier spécifique.',
  },
  {
    icon: 'mdi-post-outline',
    title: 'Créer un blog ou un portfolio',
    subtitle: 'Partager vos idées, vos créations ou présenter votre travail de manière professionnelle.',
  },
  {
    icon: 'mdi-robot-industrial-outline',
    title: 'Automatiser un processus',
    subtitle: 'Gagner en efficacité en créant un outil qui automatise des tâches répétitives.',
  }
];
</script>

<style scoped>

.project-title {
  color: #0d490d;
}

.project-subtitle {
  font-style: italic;
}

.footer-text{
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  font-size: 1.2rem;
  max-width: 700px;
}

</style>