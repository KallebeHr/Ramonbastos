import { reactive } from 'vue'
export const siteConfig = reactive({
  brand: {
    officeName: 'Ramon Bastos | Advogado Agro',
    shortName: 'Ramon Bastos | Advogado Agro',
    professionalName: 'Ramon Bastos',
    oab: 'OAB/PI 00.000',
    logo: '/teste.svg',
    initials: 'RB',
    favicon: '/favicon.ico',
    developer: 'Max Sistemas',
  },

  theme: {
 primary: '#18392e',      // Verde-floresta institucional
  primaryDark: '#10271f',  // Verde profundo, elegante
  secondary: '#5a7a68',    // Verde-sálvia (identidade Agro)
  accent: '#b79a65',       // Dourado sofisticado
  surface: '#ffffff',      // Branco
  surfaceSoft: '#f5f6f1',  // Off-white com toque natural
  text: '#213d32',         // Verde-escuro para textos
  },

  
hero: {
  eyebrow: 'Ramon Bastos | Advocacia Agro',
  title: 'Segurança jurídica para quem vive e produz no campo.',
  highlight: 'no campo',
  subtitle: 'Atuação estratégica na defesa do produtor rural, com soluções jurídicas para dívidas rurais, contratos, execuções e regularização de imóveis.',
  video: '/IMG-VIDEOS/Teste.mp4',
  backgroundImage: '/media/Banner3.png',
  ctaLabel: 'Fale com o advogado',
  highlights: ['Segurança jurídica', 'Compromisso com o agro', 'Defesa estratégica'],
},

contact: {
  phone: '(86) 12345-6789',
  phoneRaw: '5586123456789',
  whatsapp: '5586123456789',
  whatsappMessage: 'Olá, Dr. Ramon Bastos! Vim pelo site e gostaria de orientação jurídica sobre uma questão do agronegócio.',
  email: 'contato@seuescritorio.com.br',
  address: 'Rua dos Advogados, 123 - Centro',
  city: 'Pedro II - PI',
  zipCode: '64255-000',
  businessHours: 'Segunda a sexta, das 8h às 18h',
  emergencyPhone: '(86) 12345-6789',
  mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=-4.4250,-41.4586',
  latitude: -4.425,
  longitude: -41.4586,
  mapZoom: 16,
},

booking: {
  url: 'https://calendar.app.google/AKAQmEPSnxWeeRo7A',
  modes: ['Presencial', 'Por vídeo'],
},

documentChecklists: [
  {
    area: 'Prorrogação de Dívidas Rurais',
    approved: false,
    reviewedBy: '',
    reviewedAt: '',
    items: [
      'Documento de identificação do produtor rural',
      'Cédulas de crédito rural, contratos e aditivos',
      'Comprovantes de perdas, dificuldades financeiras ou eventos que comprometeram a produção',
    ],
  },
  {
    area: 'Execuções de Dívidas Rurais',
    approved: false,
    reviewedBy: '',
    reviewedAt: '',
    items: [
      'Documento de identificação',
      'Citação judicial, intimações ou documentos da execução',
      'Contratos de financiamento, demonstrativos de dívida e comprovantes de pagamento',
    ],
  },
  {
    area: 'Contratos Rurais',
    approved: false,
    reviewedBy: '',
    reviewedAt: '',
    items: [
      'Documento de identificação das partes',
      'Contrato de arrendamento, parceria, compra e venda ou outro instrumento rural',
      'Documentos da propriedade e comprovantes relacionados ao contrato',
    ],
  },
  {
    area: 'Regularização de Imóveis Rurais',
    approved: false,
    reviewedBy: '',
    reviewedAt: '',
    items: [
      'Documentos pessoais do proprietário ou possuidor',
      'Matrícula, escritura, contrato ou comprovantes de posse',
      'CAR, CCIR, ITR e demais documentos disponíveis do imóvel',
    ],
  },
  {
    area: 'Crédito e Financiamento Rural',
    approved: false,
    reviewedBy: '',
    reviewedAt: '',
    items: [
      'Documento de identificação do produtor',
      'Contrato de financiamento e documentos bancários',
      'Extratos, comprovantes de pagamento e notificações recebidas',
    ],
  },
  {
    area: 'Consultoria Jurídica para o Agro',
    approved: false,
    reviewedBy: '',
    reviewedAt: '',
    items: [
      'Documento de identificação do interessado',
      'Contratos e documentos relacionados à atividade rural',
      'Notificações, comunicações e documentos relevantes para a análise',
    ],
  },
],

professionalProfiles: [
  {
    slug: 'ramon-bastos',
    registration: '',
    education: [],
    areas: [
      'Direito do Agronegócio',
      'Prorrogação de Dívidas Rurais',
      'Contratos Rurais',
      'Regularização de Imóveis Rurais',
    ],
    biography: 'Ramon Bastos atua na advocacia voltada ao agronegócio, com foco na defesa dos interesses dos produtores rurais e na busca de soluções jurídicas estratégicas para o campo.',
    email: '',
    whatsapp: '',
  },
],

social: {
  instagram: 'https://instagram.com/seuperfil',
  facebook: 'https://facebook.com/seuperfil',
  linkedin: 'https://linkedin.com/company/seuperfil',
  x: '',
},

// Página independente em /#/linkbio. Campos vazios reaproveitam o site.
linkBio: {
  title: '',
  eyebrow: 'Ramon Bastos | Advocacia Agro',
  description: 'Orientação jurídica estratégica para produtores rurais, com foco na proteção do patrimônio, segurança dos contratos e defesa dos direitos no agronegócio.',
  coverImage: '',
  coverAlt: '',
  teamTitle: 'Fale com Ramon Bastos',
  whatsappMessage: 'Olá, Dr. Ramon Bastos! Vim pelo link da bio e gostaria de conversar sobre uma questão jurídica rural.',
  // Mostra no máximo 3 pessoas de team. Para ocultar uma, use linkBio: false nela.
  quickLinks: [
    {
      label: 'Conheça nossa atuação',
      description: 'Ramon Bastos e a advocacia voltada ao agro',
      href: '#inicio',
      icon: 'mdi-web',
    },
    {
      label: 'Agendar atendimento',
      description: 'Atendimento presencial ou por vídeo',
      href: '#agendamento',
      icon: 'mdi-calendar-outline',
    },
    {
      label: 'Áreas de atuação',
      description: 'Soluções jurídicas para o produtor rural',
      href: '#areas',
      icon: 'mdi-scale-balance',
    },
    {
      label: 'Prepare seu atendimento',
      description: 'Documentos para sua questão rural',
      href: '#documentos',
      icon: 'mdi-file-document-outline',
    },
  ],
},

// As notas e avaliações são obtidas pelo servidor; nunca preencha notas fictícias.
googleReviews: {
  enabled: true,
  showOnLinkBio: true,
  endpoint: '/api/google-reviews',
  title: 'Avaliações no Google',
  description: 'Conheça as avaliações compartilhadas sobre o atendimento jurídico de Ramon Bastos.',
  profileUrl: '',
  writeReviewUrl: '',
},

about: {
  title: 'Compromisso com quem produz e movimenta o agronegócio',
  photo: '/media/Equipe3.png',
  photoAlt: 'Imagem ilustrativa da advocacia voltada ao agronegócio',
  text: 'Ramon Bastos desenvolve uma atuação jurídica direcionada às necessidades do produtor rural. Com atenção às particularidades da atividade agrícola e pecuária, busca oferecer orientação técnica e estratégias responsáveis em questões relacionadas a dívidas rurais, execuções, contratos e regularização de propriedades.',
  subtitle: 'Advocacia estratégica para proteger direitos, patrimônio e a continuidade das atividades no campo.',
  cards: [
    {
      icon: 'fa-solid fa-scale-balanced',
      title: 'Segurança jurídica',
      desc: 'Orientação jurídica para decisões mais seguras nas atividades do agronegócio.',
    },
    {
      icon: 'fa-solid fa-handshake-angle',
      title: 'Compromisso com o produtor',
      desc: 'Atendimento próximo, transparente e atento à realidade de quem vive do campo.',
    },
    {
      icon: 'fa-solid fa-gavel',
      title: 'Defesa estratégica',
      desc: 'Análise técnica e atuação jurídica em conflitos, contratos e dívidas rurais.',
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Proteção patrimonial',
      desc: 'Estratégias jurídicas voltadas à proteção dos direitos e do patrimônio rural.',
    },
  ],
},

practiceAreas: [
  {
    title: 'Prorrogação de Dívidas Rurais',
    description: 'Análise de operações de crédito rural e das possibilidades legais de prorrogação de vencimentos diante das dificuldades enfrentadas pelo produtor.',
    icon: 'fa-solid fa-scale-balanced',
  },
  {
    title: 'Execuções de Dívidas Rurais',
    description: 'Defesa jurídica em cobranças e execuções de dívidas relacionadas à atividade rural, com análise de contratos, garantias e medidas cabíveis.',
    icon: 'fa-solid fa-briefcase',
  },
  {
    title: 'Contratos Rurais',
    description: 'Elaboração, revisão e análise de contratos de arrendamento, parceria agrícola, compra e venda e outras operações do agronegócio.',
    icon: 'fa-solid fa-gavel',
  },
  {
    title: 'Regularização de Imóveis Rurais',
    description: 'Orientação jurídica para regularização documental, questões de propriedade, posse e segurança jurídica dos imóveis rurais.',
    icon: 'fa-solid fa-building',
  },
  {
    title: 'Crédito e Financiamento Rural',
    description: 'Análise jurídica de financiamentos agrícolas, cédulas de crédito rural, garantias e obrigações perante instituições financeiras.',
    icon: 'fa-solid fa-landmark',
  },
  {
    title: 'Consultoria Jurídica para o Agro',
    description: 'Orientação preventiva para produtores e empreendimentos rurais, com foco na redução de riscos e na segurança das relações jurídicas.',
    icon: 'fa-solid fa-receipt',
  },
],

serviceJourney: [
  {
    icon: 'mdi-message-text-outline',
    title: 'Primeiro contato',
    text: 'Você apresenta sua situação rural por WhatsApp, telefone ou formulário, explicando sua necessidade jurídica.',
  },
  {
    icon: 'mdi-account-search-outline',
    title: 'Análise inicial',
    text: 'O advogado avalia as informações apresentadas e orienta sobre os documentos necessários para compreender o caso.',
  },
  {
    icon: 'mdi-file-sign',
    title: 'Orientação e estratégia',
    text: 'Após a análise, são apresentados os caminhos jurídicos possíveis e os próximos passos adequados à sua situação.',
  },
],

faq: [
  {
    question: 'É possível solicitar a prorrogação de uma dívida rural?',
    answer: 'A legislação e as normas aplicáveis ao crédito rural preveem situações em que a prorrogação pode ser solicitada. A possibilidade depende da modalidade do financiamento, das condições contratuais e das circunstâncias comprovadas pelo produtor.',
  },
  {
    question: 'Quais documentos preciso apresentar para analisar uma dívida rural?',
    answer: 'Geralmente são necessários documentos pessoais, contratos de financiamento, cédulas de crédito rural, comprovantes de pagamento e documentos que demonstrem as dificuldades enfrentadas na atividade produtiva.',
  },
  {
    question: 'O atendimento pode ser realizado online?',
    answer: 'Sim. O contato inicial pode ser realizado por WhatsApp ou telefone, e o atendimento por vídeo pode ser agendado conforme a disponibilidade do advogado.',
  },
],

team: [
  {
    name: 'Ramon Bastos',
    role: 'Advogado | Advocacia do Agronegócio',
    description: 'Atuação jurídica estratégica na defesa do produtor rural, com foco em dívidas rurais, execuções, contratos e regularização de imóveis.',
    photo: '/IMGADV/5.jpeg',
    instagram: '',
    linkedin: '',
  },
],

testimonials: [],

seo: {
  title: 'Ramon Bastos | Advocacia Agro e Direito do Agronegócio',
  description: 'Ramon Bastos Advocacia Agro. Atuação jurídica em prorrogação de dívidas rurais, execuções, contratos rurais, crédito rural e regularização de imóveis.',
},

whatsappWidget: {
  messages: [
    'É produtor rural e precisa de orientação jurídica? Fale com Ramon Bastos.',
    'Dúvidas sobre dívidas rurais, contratos ou regularização de imóveis? Entre em contato.',
  ],
  firstDelay: 12_000,
  interval: 60_000,
},
})

export const whatsappUrl = () => {
  const message = encodeURIComponent(siteConfig.contact.whatsappMessage)
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`
}
