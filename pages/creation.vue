<template>
  <div>
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
      <v-col cols="12" md="10" lg="10">
        <ContentCard title="Votre projet" style="margin-top: -200px;">
          <v-row class="pa-2">
            <v-col
              v-for="(item, i) in projectItems"
              :key="i"
              cols="12"
              md="6"
              lg="4"
              class="text-center pa-5"
            >
              <v-icon :icon="item.icon" size="64" class="mb-4" color="primary"></v-icon>
              <h3 class="text-h6 mb-2">{{ item.title }}</h3>
              <p class="text-body-1">{{ item.subtitle }}</p>
            </v-col>
          </v-row>
        </ContentCard>

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

const projectItems = [
  {
    icon: 'mdi-rocket-launch-outline',
    title: 'Lancer une nouvelle activité',
    subtitle: 'Créer une présence en ligne professionnelle pour démarrer votre projet.'
  },
  {
    icon: 'mdi-autorenew',
    title: 'Moderniser un site existant',
    subtitle: 'Mettre à jour le design, la technologie ou les fonctionnalités de votre site actuel.'
  },
  {
    icon: 'mdi-cart-outline',
    title: 'Vendre en ligne',
    subtitle: 'Mettre en place une boutique e-commerce performante et sécurisée.'
  },
  {
    icon: 'mdi-tools',
    title: 'Développer un outil sur-mesure',
    subtitle: 'Créer une application web ou un intranet pour répondre à un besoin métier spécifique.'
  },
  {
    icon: 'mdi-post-outline',
    title: 'Créer un blog ou un portfolio',
    subtitle: 'Partager vos idées, vos créations ou présenter votre travail de manière professionnelle.'
  },
  {
    icon: 'mdi-robot-industrial-outline',
    title: 'Automatiser un processus métier',
    subtitle: 'Gagner en efficacité en créant un outil qui automatise des tâches répétitives.'
  }
];

const creationIcons = [
  { name: 'mdi-language-html5', size: 'x-large', transform: 'rotate(-15deg)', position: { top: '15%', left: '10%', animationDelay: '0s', animationDuration: '5s' } },
  { name: 'mdi-language-css3', size: 'large', transform: 'rotate(10deg)', position: { top: '20%', right: '12%', animationDelay: '1s', animationDuration: '7s' } },
  { name: 'mdi-language-javascript', size: 'x-large', transform: 'rotate(5deg)', position: { top: '65%', left: '5%', animationDelay: '2s', animationDuration: '6s' } },
  { name: 'mdi-wordpress', size: 'large', transform: 'rotate(-10deg)', position: { top: '75%', right: '8%', animationDelay: '0.5s', animationDuration: '8s' } },
  { name: 'mdi-database', size: 'large', transform: 'rotate(15deg)', position: { bottom: '10%', left: '20%', animationDelay: '1.5s', animationDuration: '5s' } },
  { name: 'mdi-cellphone-link', size: 'large', transform: 'rotate(20deg)', position: { top: '40%', right: '20%', animationDelay: '2.5s', animationDuration: '7s' } },
  { name: 'mdi-language-php', size: 'x-large', transform: 'rotate(-5deg)', position: { bottom: '15%', right: '25%', animationDelay: '3s', animationDuration: '6s' } },
  { name: 'mdi-sitemap', size: 'large', transform: 'rotate(-20deg)', position: { top: '50%', left: '12%', animationDelay: '1.2s', animationDuration: '8s' } },
  { name: 'mdi-vuejs', size: 'x-large', transform: 'rotate(12deg)', position: { top: '35%', left: '30%', animationDelay: '0.8s', animationDuration: '7.5s' } },
  { name: 'mdi-laravel', size: 'large', transform: 'rotate(-8deg)', position: { top: '65%', right: '35%', animationDelay: '2.2s', animationDuration: '5.5s' } },
  { name: 'mdi-git', size: 'large', transform: 'rotate(18deg)', position: { bottom: '15%', left: '45%', animationDelay: '3.5s', animationDuration: '8s' } },
  { name: 'mdi-rocket-launch-outline', size: 'large', transform: 'rotate(-12deg)', position: { top: '10%', right: '30%', animationDelay: '0.2s', animationDuration: '6.5s' } },
];
</script>

<style scoped>
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
  height: 250px;
  background-color: #073d00; /* Matches element-1 */
  position: relative;
  width: 100%;
}
</style>
