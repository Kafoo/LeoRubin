<template>
  <v-container class="py-10">
    <v-btn
      icon="mdi-home-outline"
      to="/"
      class="home-button"
      variant="flat"
      color="rgba(255, 255, 255, 0.15)"
      title="Retour à l'accueil"
    ></v-btn>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <div class="hero-section text-center" v-motion-fade-visible-once :delay="200">
          <div class="floating-icons">
            <div
              v-for="(icon, i) in icons"
              :key="i"
              :style="icon.position"
              class="floating-icon-wrapper"
            >
              <v-icon
                :icon="icon.name"
                :size="icon.size"
                :style="{ transform: icon.transform }"
                color="rgba(255, 255, 255, 0.3)"
              ></v-icon>
            </div>
          </div>
          <div style="z-index: 1;">
            <h1 class="text-h3 text-md-h1 font-weight-bold mb-6" style="color: white;">Création</h1>
            <p class="text-h6 text-md-h5 font-weight-light" style="color: #f0f0f0;">
              Développement de solutions web sur-mesure.
            </p>
          </div>
          <div class="scroll-indicator" style="z-index: 2;">
            <v-icon size="x-large" color="white">mdi-chevron-down</v-icon>
          </div>
        </div>

        <ContentCard title="Vos besoins">
          <v-list lines="two" bg-color="transparent">
            <v-list-item prepend-icon="mdi-rocket-launch-outline" title="Lancer une nouvelle activité" subtitle="Créer une présence en ligne professionnelle pour démarrer votre projet."></v-list-item>
            <v-list-item prepend-icon="mdi-autorenew" title="Moderniser un site existant" subtitle="Mettre à jour le design, la technologie ou les fonctionnalités de votre site actuel."></v-list-item>
            <v-list-item prepend-icon="mdi-cart-outline" title="Vendre en ligne" subtitle="Mettre en place une boutique e-commerce performante et sécurisée."></v-list-item>
            <v-list-item prepend-icon="mdi-tools" title="Développer un outil sur-mesure" subtitle="Créer une application web ou un intranet pour répondre à un besoin métier spécifique."></v-list-item>
          </v-list>
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
  </v-container>
</template>

<script setup lang="ts">
import ContactInfo from '~/components/Home/ContactInfo.vue';

const icons = [
  { name: 'mdi-language-html5', size: 'x-large', transform: 'rotate(-15deg)', position: { top: '15%', left: '10%', animationDelay: '0s', animationDuration: '5s' } },
  { name: 'mdi-language-css3', size: 'large', transform: 'rotate(10deg)', position: { top: '20%', right: '12%', animationDelay: '1s', animationDuration: '7s' } },
  { name: 'mdi-language-javascript', size: 'x-large', transform: 'rotate(5deg)', position: { top: '60%', left: '5%', animationDelay: '2s', animationDuration: '6s' } },
  { name: 'mdi-wordpress', size: 'large', transform: 'rotate(-10deg)', position: { top: '75%', right: '8%', animationDelay: '0.5s', animationDuration: '8s' } },
  { name: 'mdi-database', size: 'large', transform: 'rotate(15deg)', position: { bottom: '10%', left: '20%', animationDelay: '1.5s', animationDuration: '5s' } },
  { name: 'mdi-cellphone-link', size: 'large', transform: 'rotate(20deg)', position: { top: '40%', right: '20%', animationDelay: '2.5s', animationDuration: '7s' } },
  { name: 'mdi-language-php', size: 'x-large', transform: 'rotate(-5deg)', position: { bottom: '15%', right: '25%', animationDelay: '3s', animationDuration: '6s' } },
  { name: 'mdi-sitemap', size: 'large', transform: 'rotate(-20deg)', position: { top: '50%', left: '18%', animationDelay: '1.2s', animationDuration: '8s' } },
  { name: 'mdi-vuejs', size: 'x-large', transform: 'rotate(12deg)', position: { top: '35%', left: '30%', animationDelay: '0.8s', animationDuration: '7.5s' } },
  { name: 'mdi-laravel', size: 'large', transform: 'rotate(-8deg)', position: { top: '65%', right: '35%', animationDelay: '2.2s', animationDuration: '5.5s' } },
  { name: 'mdi-git', size: 'large', transform: 'rotate(18deg)', position: { bottom: '5%', left: '45%', animationDelay: '3.5s', animationDuration: '8s' } },
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

.hero-section {
  min-height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 6rem;
  overflow: hidden; /* Hide parts of icons that go outside */
}

.floating-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-icon-wrapper {
  position: absolute;
  animation-name: float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes float {
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-20px);
	}
	100% {
		transform: translateY(0px);
	}
}

.scroll-indicator {
  position: absolute;
  bottom: 20px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

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
