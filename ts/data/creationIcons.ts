interface IconPosition {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  animationDelay: string;
  animationDuration: string;
}

interface CreationIcon {
  name: string;
  size: string;
  opacity: number;
  transform: string;
  position: IconPosition;
}

export const creationIcons: CreationIcon[] = [
  // Inner circle - large icons, closer
  { name: 'mdi-language-html5', size: 'x-large', opacity: 0.35, transform: 'rotate(-15deg)', position: { top: '42%', left: '75%', animationDelay: '0s', animationDuration: '5s' } },
  { name: 'mdi-language-css3', size: 'x-large', opacity: 0.35, transform: 'rotate(10deg)', position: { top: '69%', left: '63%', animationDelay: '1s', animationDuration: '7s' } },
  { name: 'mdi-language-javascript', size: 'x-large', opacity: 0.35, transform: 'rotate(5deg)', position: { top: '76%', left: '38%', animationDelay: '2s', animationDuration: '6s' } },
  { name: 'mdi-laravel', size: 'x-large', opacity: 0.35, transform: 'rotate(-10deg)', position: { top: '47%', left: '25%', animationDelay: '0.5s', animationDuration: '8s' } },
  { name: 'mdi-database', size: 'x-large', opacity: 0.35, transform: 'rotate(15deg)', position: { top: '35%', left: '38%', animationDelay: '1.5s', animationDuration: '5s' } },
  { name: 'mdi-cellphone-link', size: 'x-large', opacity: 0.35, transform: 'rotate(20deg)', position: { top: '28%', left: '63%', animationDelay: '2.5s', animationDuration: '7s' } },

  // Middle circle
  { name: 'mdi-language-php', size: 'large', opacity: 0.25, transform: 'rotate(-5deg)', position: { top: '60%', left: '83%', animationDelay: '3s', animationDuration: '6s' } },
  { name: 'mdi-sitemap', size: 'large', opacity: 0.25, transform: 'rotate(-20deg)', position: { top: '88%', left: '55%', animationDelay: '1.2s', animationDuration: '8s' } },
  { name: 'mdi-vuejs', size: 'large', opacity: 0.25, transform: 'rotate(12deg)', position: { top: '69%', left: '17%', animationDelay: '0.8s', animationDuration: '7.5s' } },
  { name: 'mdi-wordpress', size: 'large', opacity: 0.25, transform: 'rotate(-8deg)', position: { top: '31%', left: '17%', animationDelay: '2.2s', animationDuration: '5.5s' } },
  { name: 'mdi-git', size: 'large', opacity: 0.25, transform: 'rotate(18deg)', position: { top: '12%', left: '50%', animationDelay: '3.5s', animationDuration: '8s' } },
  { name: 'mdi-rocket-launch-outline', size: 'large', opacity: 0.25, transform: 'rotate(-12deg)', position: { top: '31%', left: '83%', animationDelay: '0.2s', animationDuration: '6.5s' } },

  // Outer circle - small icons, further away
  { name: 'mdi-nuxt', size: 'default', opacity: 0.15, transform: 'rotate(8deg)', position: { top: '50%', left: '100%', animationDelay: '1.3s', animationDuration: '9s' } },
  { name: 'mdi-tailwind', size: 'default', opacity: 0.15, transform: 'rotate(-18deg)', position: { top: '93%', left: '75%', animationDelay: '2.1s', animationDuration: '7.3s' } },
  { name: 'mdi-api', size: 'default', opacity: 0.15, transform: 'rotate(3deg)', position: { top: '93%', left: '25%', animationDelay: '3.3s', animationDuration: '8.5s' } },
  { name: 'mdi-server', size: 'default', opacity: 0.15, transform: 'rotate(14deg)', position: { top: '50%', left: '0%', animationDelay: '0.7s', animationDuration: '6.2s' } },
  { name: 'mdi-palette', size: 'default', opacity: 0.15, transform: 'rotate(-9deg)', position: { top: '7%', left: '25%', animationDelay: '2.6s', animationDuration: '9.2s' } },
  { name: 'mdi-shield-check-outline', size: 'default', opacity: 0.15, transform: 'rotate(22deg)', position: { top: '7%', left: '75%', animationDelay: '1.6s', animationDuration: '7.8s' } },
  { name: 'mdi-search-web', size: 'default', opacity: 0.15, transform: 'rotate(-25deg)', position: { top: '12%', left: '9%', animationDelay: '0.4s', animationDuration: '8.2s' } },
  { name: 'mdi-brush', size: 'default', opacity: 0.15, transform: 'rotate(25deg)', position: { top: '12%', right: '9%', animationDelay: '1.8s', animationDuration: '7.1s' } },
  { name: 'mdi-chart-line', size: 'default', opacity: 0.15, transform: 'rotate(15deg)', position: { bottom: '12%', left: '9%', animationDelay: '2.8s', animationDuration: '9.5s' } },
  { name: 'mdi-lock-outline', size: 'default', opacity: 0.15, transform: 'rotate(-15deg)', position: { bottom: '12%', right: '9%', animationDelay: '3.1s', animationDuration: '6.8s' } },
];
