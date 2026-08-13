// Todas las traducciones del sitio se concentran aquí para facilitar su revisión.
const translations = {
  es: {
    metaDescription: 'Portafolio de Ana Paula: branding, diseño web, contenido digital y marketing.',
    backHome: '← VOLVER AL INICIO',
    projectsSubtitle: 'Una colección de identidades de marca, proyectos web y experiencias digitales creadas con estrategia y propósito.',
    heroTitle: 'Portafolio',
    heroSubtitle: 'DISEÑO MARCAS, SITIOS WEB Y EXPERIENCIAS DIGITALES',
    heroDescription: 'Creo soluciones de diseño con propósito que elevan las marcas y conectan con las personas.',
    heroRole: 'SOCIAL MEDIA MANAGER, COPYWRITER Y DISEÑADORA DE BRANDING Y MARKETING',
    heroLocation: 'Zapopan, Jal., México',
    heroAvailability: 'Disponible para proyectos freelance',
    statYears: '9+ AÑOS',
    statExperience: 'DE EXPERIENCIA',
    statProjects: 'PROYECTOS ENTREGADOS',
    statClients: 'CLIENTES SATISFECHOS',
    selectedWork: 'Trabajo seleccionado ✦',
    viewAll: 'VER TODOS LOS PROYECTOS →',
    projectBrandingPackaging: 'Branding y packaging',
    projectWebDesign: 'Diseño y desarrollo web',
    projectBrandIdentity: 'Identidad de marca',
    whatIDo: 'Lo que hago ✦',
    serviceBrandTitle: 'IDENTIDAD DE MARCA',
    serviceBrandDescription: 'Logo, identidad visual y manual de marca',
    serviceWebTitle: 'DISEÑO WEB',
    serviceWebDescription: 'Moderno, adaptable y enfocado en las personas',
    serviceSocialTitle: 'GESTIÓN DE REDES SOCIALES',
    serviceSocialDescription: 'Estrategia, calendarización y contenido para redes',
    serviceContentTitle: 'CONTENIDO DIGITAL',
    serviceContentDescription: 'Redes sociales, gráficos y presentaciones',
    serviceMarketingTitle: 'DISEÑO DE MARKETING',
    serviceMarketingDescription: 'Folletos, brochures, tarjetas, promocionales, etc.',
    serviceDirectionTitle: 'DIRECCIÓN CREATIVA',
    serviceDirectionDescription: 'Conceptos, dirección de arte y estrategia visual',
    bannerTitle: 'Diseño con propósito.<br>Creación con corazón.',
    bannerDescription: 'Creo que el gran diseño es más que lo visual: se trata de contar historias, conectar y generar un impacto que trasciende la pantalla.',
    processTitle: 'Mi proceso ✦',
    processDiscoverTitle: 'DESCUBRIR',
    processDiscoverDescription: 'Comprender tus objetivos, audiencia y esencia de marca.',
    processDesignTitle: 'DISEÑAR',
    processDesignDescription: 'Crear conceptos que combinan belleza y funcionalidad.',
    processDevelopTitle: 'DESARROLLAR',
    processDevelopDescription: 'Dar vida al diseño con precisión y cuidado.',
    processDeliverTitle: 'ENTREGAR',
    processDeliverDescription: 'Afinar cada detalle para una experiencia final impecable.',
    brandsTitle: 'Marcas con las que he colaborado ✦',
    footerTitle: 'Creemos algo<br><span>hermoso</span>',
    footerDescription: 'Siempre estoy abierta a nuevas oportunidades y colaboraciones emocionantes. Demos vida a tus ideas.',
    contactButton: 'PONTE EN CONTACTO →',
    footerLocation: 'Zapopan, Jal., México'
  },
  en: {
    metaDescription: 'Ana Paula portfolio: branding, web design, digital content and marketing.',
    backHome: '← BACK TO HOME',
    projectsSubtitle: 'A collection of brand identities, web design projects, and digital experiences crafted with strategy and purpose.',
    heroTitle: 'Portfolio',
    heroSubtitle: 'I DESIGN BRANDS, WEBSITES & DIGITAL EXPERIENCES',
    heroDescription: 'Crafting meaningful design solutions that elevate brands and connect with people.',
    heroRole: 'SOCIAL MEDIA MANAGER, COPYWRITER & BRANDING AND MARKETING DESIGNER',
    heroLocation: 'Based in Zapopan, Mexico',
    heroAvailability: 'available for freelance projects',
    statYears: '9+ YEARS',
    statExperience: 'OF EXPERIENCE',
    statProjects: 'PROJECTS DELIVERED',
    statClients: 'HAPPY CLIENTS',
    selectedWork: 'Selected Work ✦',
    viewAll: 'VIEW ALL PROJECTS →',
    projectBrandingPackaging: 'Branding & Packaging',
    projectWebDesign: 'Web Design & Development',
    projectBrandIdentity: 'Brand Identity',
    whatIDo: 'What I Do ✦',
    serviceBrandTitle: 'BRAND IDENTITY',
    serviceBrandDescription: 'Logo, Visual Identity, Brand Guidelines',
    serviceWebTitle: 'WEB DESIGN',
    serviceWebDescription: 'Modern, Responsive & User-Focused',
    serviceSocialTitle: 'SOCIAL MEDIA MANAGEMENT',
    serviceSocialDescription: 'Strategy, scheduling and social media content',
    serviceContentTitle: 'DIGITAL CONTENT',
    serviceContentDescription: 'Social Media, Graphics, Presentations',
    serviceMarketingTitle: 'MARKETING DESIGN',
    serviceMarketingDescription: 'Flyers, brochures, business cards, promotional materials, etc.',
    serviceDirectionTitle: 'CREATIVE DIRECTION',
    serviceDirectionDescription: 'Concepts, Art Direction, Visual Strategy',
    bannerTitle: 'Design with purpose.<br>Create with heart.',
    bannerDescription: 'I believe great design is more than just visuals — it is about storytelling, connection, and creating impact that lasts beyond the screen.',
    processTitle: 'My Process ✦',
    processDiscoverTitle: 'DISCOVER',
    processDiscoverDescription: 'Understanding your goals, audience & brand essence.',
    processDesignTitle: 'DESIGN',
    processDesignDescription: 'Crafting concepts that combine beauty and functionality.',
    processDevelopTitle: 'DEVELOP',
    processDevelopDescription: 'Bringing the design to life with precision and care.',
    processDeliverTitle: 'DELIVER',
    processDeliverDescription: 'Refining every detail for a seamless final experience.',
    brandsTitle: 'Collaborated Brands ✦',
    footerTitle: "Let's Create<br><span>Something Beautiful</span>",
    footerDescription: "I'm always open to new opportunities and exciting collaborations. Let's bring your ideas to life.",
    contactButton: 'GET IN TOUCH →',
    footerLocation: 'Based in Zapopan, Mexico'
  }
};

function setLanguage(language) {
  const dictionary = translations[language];
  if (!dictionary) return;

  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = dictionary[element.dataset.i18n];
    if (translation) element.textContent = translation;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const translation = dictionary[element.dataset.i18nHtml];
    if (translation) element.innerHTML = translation;
  });

  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    const translation = dictionary[element.dataset.i18nContent];
    if (translation) element.setAttribute('content', translation);
  });

  const isProjectsPage = document.body.dataset.page === 'projects';
  document.title = isProjectsPage
    ? (language === 'es' ? 'Proyectos | Ana Paula Studio' : 'Projects | Ana Paula Studio')
    : (language === 'es' ? 'Ana Paula | Portafolio Creativo' : 'Ana Paula | Creative Portfolio');

  document.querySelectorAll('[data-language]').forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  localStorage.setItem('portfolio-language', language);
}

function setupRevealAnimations() {
  const cards = document.querySelectorAll('.project-card, .brand-item');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sin soporte o con movimiento reducido, las tarjetas permanecen visibles.
  if (!('IntersectionObserver' in window) || reduceMotion) return;

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  cards.forEach((card) => {
    card.classList.add('reveal-on-scroll');
    observer.observe(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Español es el idioma inicial; la elección posterior se conserva en el navegador.
  const savedLanguage = localStorage.getItem('portfolio-language');
  setLanguage(savedLanguage === 'en' ? 'en' : 'es');

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  setupRevealAnimations();
});
