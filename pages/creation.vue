<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <div class="text-center mb-12">
          <h1 class="text-h3 font-weight-bold mb-4">Donnons vie à votre projet web</h1>
          <p class="text-h6 font-weight-light">
            En tant que développeur full-stack, je transforme vos idées en solutions web performantes, sur-mesure et adaptées à vos besoins.
          </p>
        </div>

        <!-- Section: Mon approche -->
        <v-card class="pa-5 mb-12" elevation="2">
          <v-card-title class="text-h5 justify-center">Deux approches pour un résultat parfait</v-card-title>
          <v-card-text>
            <v-row align="stretch">
              <v-col cols="12" md="6">
                <div class="pa-4 text-center fill-height d-flex flex-column">
                  <v-icon size="50" color="primary" class="mb-4">mdi-cogs</v-icon>
                  <h3 class="text-h6 mb-2">Développement sur-mesure</h3>
                  <p>
                    Pour un projet unique et des performances optimales, je construis votre site de A à Z avec des technologies modernes et robustes. Ma stack de prédilection est <span class="font-weight-bold">Nuxt (Vue.js)</span> pour le front-end et <span class="font-weight-bold">Laravel</span> pour le back-end, mais je suis flexible et m'adapte aux spécificités de votre projet.
                  </p>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="pa-4 text-center fill-height d-flex flex-column">
                  <v-icon size="50" color="primary" class="mb-4">mdi-wordpress</v-icon>
                  <h3 class="text-h6 mb-2">Solution CMS</h3>
                  <p>
                    Si vous souhaitez une gestion de contenu simplifiée et une solution éprouvée, je peux développer votre site sur un CMS comme <span class="font-weight-bold">WordPress</span>. Idéal pour les blogs, les sites vitrines et les petites boutiques en ligne.
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Section: Types de sites -->
        <div class="text-center mb-12">
          <h2 class="text-h4 mb-8">Un site web pour chaque besoin</h2>
          <v-row>
            <v-col v-for="site in siteTypes" :key="site.title" cols="12" sm="6" md="4">
              <v-card class="pa-4 text-center fill-height" hover>
                <v-icon size="40" class="mb-3" color="secondary">{{ site.icon }}</v-icon>
                <h4 class="text-h6">{{ site.title }}</h4>
                <p class="text-body-2">{{ site.description }}</p>
              </v-card>
            </v-col>
          </v-row>
          <p class="mt-6 text-medium-emphasis">Tous les sites sont conçus pour être <span class="font-weight-bold">responsives</span> (adaptés aux mobiles et tablettes) et peuvent être publics ou à usage interne (intranet).</p>
        </div>

        <!-- Section: Processus -->
        <div class="mb-12">
            <h2 class="text-h4 text-center mb-8">Notre collaboration en 4 étapes</h2>
            <v-timeline align="start" side="end">
                <v-timeline-item dot-color="primary" size="small">
                    <template v-slot:opposite>
                        Étape 1
                    </template>
                    <div>
                        <div class="text-h6">Prise de contact</div>
                        <p>
                            Nous discutons de votre projet, de vos objectifs et de vos attentes. C'est l'occasion pour moi de comprendre votre vision.
                        </p>
                    </div>
                </v-timeline-item>
                <v-timeline-item dot-color="primary" size="small">
                    <template v-slot:opposite>
                        Étape 2
                    </template>
                    <div>
                        <div class="text-h6">Proposition et devis</div>
                        <p>
                            Sur la base de nos échanges, je vous fournis une proposition détaillée et un premier devis gratuit.
                        </p>
                    </div>
                </v-timeline-item>
                <v-timeline-item dot-color="primary" size="small">
                    <template v-slot:opposite>
                        Étape 3
                    </template>
                    <div>
                        <div class="text-h6">Développement</div>
                        <p>
                            Une fois le devis accepté, la création commence ! Je vous tiens informé des avancées à chaque étape clé.
                        </p>
                    </div>
                </v-timeline-item>
                <v-timeline-item dot-color="primary" size="small">
                    <template v-slot:opposite>
                        Étape 4
                    </template>
                    <div>
                        <div class="text-h6">Mise en ligne et suivi</div>
                        <p>
                            Votre site est déployé. Je reste disponible pour toute question ou pour vous accompagner dans sa prise en main.
                        </p>
                    </div>
                </v-timeline-item>
            </v-timeline>
        </div>

        <!-- Section: Liens -->
        <div class="text-center mb-12">
          <h2 class="text-h4 mb-8">Pour aller plus loin</h2>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4">
              <v-btn to="/projects" block color="primary" variant="outlined" class="mb-4" prepend-icon="mdi-briefcase-outline">
                Voir mes projets
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-btn to="/kafoo" block color="primary" variant="outlined" class="mb-4" prepend-icon="mdi-account-circle-outline">
                Qui suis-je ?
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-btn to="/support" block color="primary" variant="outlined" class="mb-4" prepend-icon="mdi-lifebuoy">
                Autres services
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-btn to="/merci" block color="primary" variant="outlined" class="mb-4" prepend-icon="mdi-star-outline">
                Livre d'or
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-btn to="/faq" block color="primary" variant="outlined" class="mb-4" prepend-icon="mdi-help-circle-outline">
                FAQ
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <!-- Section: Contact -->
        <div class="text-center">
          <h2 class="text-h4 mb-4">Prêt à démarrer ?</h2>
          <p class="mb-6">Contactez-moi pour discuter de votre projet. Le premier échange est sans engagement.</p>
          <ContactInfo />
          <v-btn class="mt-8" size="small" color="#3a3a3a" to="/">Retour à l'accueil</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ContactInfo from '~/components/Home/ContactInfo.vue';

const siteTypes = [
  {
    title: 'Site Vitrine',
    icon: 'mdi-presentation',
    description: 'Présentez votre activité, vos services et vos valeurs de manière professionnelle.'
  },
  {
    title: 'E-commerce',
    icon: 'mdi-cart-outline',
    description: 'Vendez vos produits en ligne avec une boutique performante et sécurisée.'
  },
  {
    title: 'SaaS / Application Web',
    icon: 'mdi-cloud-cog-outline',
    description: 'Développez un logiciel en tant que service ou une application métier sur-mesure.'
  },
  {
    title: 'Blog',
    icon: 'mdi-post-outline',
    description: 'Partagez votre expertise et créez une communauté autour de vos sujets de prédilection.'
  },
  {
    title: 'Portfolio',
    icon: 'mdi-palette-outline',
    description: 'Mettez en valeur vos créations et vos compétences de manière élégante et interactive.'
  },
  {
    title: 'Site Interne / Intranet',
    icon: 'mdi-domain',
    description: 'Optimisez la communication et les processus de votre entreprise avec un outil interne.'
  }
]
</script>

<style scoped>
.fill-height {
  height: 100%;
}
</style>
