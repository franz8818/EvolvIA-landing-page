import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/#hero'),
    },
    {
      text: '¿Qué es EvolvIA?',
      href: getPermalink('/#features'),
    },
    {
      text: '¿Qué hacemos?',
      href: getPermalink('/#features2'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/#cta'),
    },
  ],
  actions: [
    {
      text: 'Descargar PDF',
      href: '/src/EvolvIA.pdf?download',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'EvolvIA',
      links: [
        { text: '¿Qué es EvolvIA?', href: getPermalink('/#features') },
        { text: '¿Qué hacemos?', href: getPermalink('/#features2') },
        { text: 'Contáctanos', href: getPermalink('/#cta') },
      ],
    },
  ],
  secondaryLinks: [
  { text: 'Términos y Condiciones', href: getPermalink('/terms') },
  { text: 'Política de Privacidad', href: getPermalink('/privacy') },
],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 bg-cover mr-1.5 float-left rounded-sm" src="/favicon.png" alt="EvolvIA logo" loading="lazy">
    Diseñado por <a class="text-primary underline" href="#">EvolvIA</a> · Todos los derechos reservados.
  `,
};
