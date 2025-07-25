<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <div class="text-center mb-12">
          <h1 class="text-h3 font-weight-bold mb-4" style="color: white;">Créons ensemble l'outil web qui vous ressemble</h1>
          <p class="text-h6 font-weight-light" style="color: #f0f0f0;">
            Plus qu'une vitrine, un site web est un outil de travail, un canal de communication, le reflet de votre identité. Mon objectif : construire une solution performante et parfaitement adaptée à votre réalité.
          </p>
        </div>

        <v-card class="content-card mb-10">
          <v-card-text class="pa-5">
            <h2 class="text-h4 mb-4">Une solution, pas juste un site</h2>
            <p class="text-body-1">
              Que vous ayez une idée précise ou juste un concept, nous la développerons ensemble. Mon rôle est de vous conseiller sur les technologies les plus adaptées à votre projet, votre budget et votre désir d'autonomie.
            </p>
            <p class="text-body-1">
              Pour une maîtrise totale et des performances sur-mesure, nous pouvons opter pour un développement avec des outils modernes comme <strong>Nuxt.js</strong> et <strong>Laravel</strong>. Si vous préférez une gestion de contenu simple et rapide, une solution basée sur un CMS comme <strong>WordPress</strong> sera plus indiquée. L'important est de choisir l'outil qui vous servira le mieux.
            </p>
            <p class="text-body-1 mt-4">
              Pour en savoir plus sur mon parcours et ma philosophie, n'hésitez pas à visiter mon profil <nuxt-link to="/kafoo" class="text-link">Kafoo</nuxt-link>.
            </p>
          </v-card-text>
        </v-card>

        <v-card class="content-card mb-10">
          <v-card-text class="pa-5">
            <h2 class="text-h4 mb-4">De l'idée au projet concret</h2>
            <p class="text-body-1">
              Je peux concevoir et développer une large gamme de projets : sites vitrines pour présenter votre activité, plateformes e-commerce pour vendre vos produits, applications web complexes (SaaS) pour offrir un service innovant, ou encore des intranets pour fluidifier votre organisation interne. Chaque projet est une nouvelle aventure, toujours réalisée en responsive design pour une expérience optimale sur tous les supports.
            </p>
            <p class="text-body-1 mt-4">
              Curieux de voir ce que ça peut donner ? Jetez un œil à mes <nuxt-link to="/projects" class="text-link">réalisations passées</nuxt-link>.
            </p>
          </v-card-text>
        </v-card>

        <!-- Section: Processus -->
        <div class="mb-12">
            <h2 class="text-h4 text-center mb-8" style="color: white;">Notre collaboration en 4 étapes</h2>
            <v-timeline align="start" side="end" theme="dark">
                <v-timeline-item dot-color="primary" size="small">
                    <template v-slot:opposite>
                        <span class="font-weight-bold">Étape 1</span>
                    </template>
                    <v-card class="content-card">
                      <v-card-title class="text-h6">Prise de contact</v-card-title>
                      <v-card-text>
                          Nous discutons de votre projet, de vos objectifs et de vos attentes. C'est l'occasion pour moi de comprendre votre vision.
                      </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item dot-color="primary" size="small">
                    <template v-slot:opposite>
                        <span class="font-weight-bold">Étape 2</span>
                    </template>
                    <v-card class="content-card">
                      <v-card-title class="text-h6">Proposition et devis</v-card-title>
                      <v-card-text>
                          Sur la base de nos échanges, je vous fournis une proposition détaillée et un premier devis gratuit.
                      </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item dot-color="primary" size="small">
                    <template v-slot:opposite>
                        <span class="font-weight-bold">Étape 3</span>
                    </template>
                    <v-card class="content-card">
                      <v-card-title class="text-h6">Développement</v-card-title>
                      <v-card-text>
                          Une fois le devis accepté, la création commence ! Je vous tiens informé des avancées à chaque étape clé.
                      </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item dot-color="primary" size="small">
                    <template v-slot:opposite>
                        <span class="font-weight-bold">Étape 4</span>
                    </template>
                    <v-card class="content-card">
                      <v-card-title class="text-h6">Mise en ligne et suivi</v-card-title>
                      <v-card-text>
                          Votre site est déployé. Je reste disponible pour toute question ou pour vous accompagner dans sa prise en main. Pour des questions plus générales, la <nuxt-link to="/faq" class="text-link">FAQ</nuxt-link> est à votre disposition.
                      </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </div>

        <v-card class="content-card mb-10">
          <v-card-text class="pa-5">
            <h2 class="text-h4 mb-4">Et après la mise en ligne ?</h2>
            <p class="text-body-1">
              Mon travail ne s'arrête pas forcément à la livraison du site. Un projet web évolue. Je peux vous accompagner pour la maintenance, les mises à jour, ou l'ajout de nouvelles fonctionnalités.
            </p>
            <p class="text-body-1 mt-4">
              Pour des services qui vont au-delà de la création initiale, comme l'optimisation ou la maintenance ponctuelle, consultez la page <nuxt-link to="/support" class="text-link">Support</nuxt-link>.
            </p>
          </v-card-text>
        </v-card>

        <!-- Section: Contact -->
        <v-card class="content-card text-center">
          <v-card-text class="pa-5">
            <h2 class="text-h4 mb-4">Prêt à échanger ?</h2>
            <p class="mb-4">La première étape est une simple discussion, sans engagement, pour faire connaissance et parler de votre projet. C'est le meilleur moyen de voir si le courant passe et de recevoir une première estimation.</p>
            <p class="mb-6">La confiance est essentielle. Vous pouvez lire les <nuxt-link to="/merci" class="text-link">témoignages de mes anciens clients</nuxt-link> pour vous faire une idée.</p>
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
