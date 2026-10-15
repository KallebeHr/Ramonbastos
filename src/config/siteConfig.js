import { reactive } from 'vue'
export const siteConfig = reactive({
  brand: {
    officeName: 'Aguiar & Santos | Advocacia e Consultoria',
    shortName: 'Aguiar & Santos',
    professionalName: 'Aguiar & Santos',
    oab: 'OAB/PI 00.000',
    logo: '/LogoPNG1.png',
    initials: 'AS',
    favicon: '/favicon.ico',
    developer: 'Max Sistemas',
  },

  theme: {
    primary: '#3D0810',
    primaryDark: '#6f1d2c',
    secondary: '#0b2547',
    accent: '#b79a65',
    surface: '#ffffff',
    surfaceSoft: '#f6f5f2',
    text: '#182e49',
  },

  hero: {
    eyebrow: 'Advocacia estratégica e humanizada',
    title: 'Informação, orientação e compromisso.',
    highlight: 'eficiente',
    subtitle: 'Compromisso com seus direitos, atendimento próximo e estratégias jurídicas responsáveis.',
    video: '/IMG-VIDEOS/Teste.mp4',
    backgroundImage: '/media/Banner.png',
    ctaLabel: 'Fale com nossa equipe',
    highlights: ['Ética', 'Compromisso', 'Defesa ágil'],
  },

  contact: {
    phone: '(86) 12345-6789',
    phoneRaw: '5586123456789',
    whatsapp: '5586123456789',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de falar com a equipe jurídica.',
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

  booking: { url: 'https://calendar.app.google/AKAQmEPSnxWeeRo7A', modes: ['Presencial', 'Por vídeo'] },

  documentChecklists: [
    { area: 'Direito Civil', approved: false, reviewedBy: '', reviewedAt: '', items: ['Documento de identificação', 'Contrato ou documento relacionado ao assunto', 'Comprovantes e comunicações relacionados ao caso'] },
    { area: 'Direito Trabalhista', approved: false, reviewedBy: '', reviewedAt: '', items: ['Documento de identificação', 'Carteira de trabalho e contrato, se disponíveis', 'Comprovantes de pagamento e documentos relacionados à demanda'] },
    { area: 'Direito Penal', approved: false, reviewedBy: '', reviewedAt: '', items: ['Documento de identificação', 'Intimações ou notificações recebidas', 'Número do procedimento, se disponível'] },
    { area: 'Direito Empresarial', approved: false, reviewedBy: '', reviewedAt: '', items: ['Documentos da empresa', 'Contrato relacionado à consulta', 'Comunicações relevantes para o assunto'] },
    { area: 'Direito Administrativo', approved: false, reviewedBy: '', reviewedAt: '', items: ['Documento de identificação', 'Edital, notificação ou decisão relacionada', 'Número do processo administrativo, se disponível'] },
    { area: 'Direito Tributário', approved: false, reviewedBy: '', reviewedAt: '', items: ['Documento de identificação', 'Notificações e documentos fiscais relacionados', 'Número do procedimento, se disponível'] },
  ],

  professionalProfiles: [
    { slug: 'profissional-civil', registration: '', education: [], areas: ['Direito Civil'], biography: '', email: '', whatsapp: '' },
    { slug: 'profissional-familia', registration: '', education: [], areas: ['Direito de Família'], biography: '', email: '', whatsapp: '' },
    { slug: 'profissional-empresarial', registration: '', education: [], areas: ['Direito Empresarial'], biography: '', email: '', whatsapp: '' },
  ],

  social: {
    instagram: 'https://instagram.com/seuperfil',
    facebook: 'https://facebook.com/seuperfil',
    linkedin: 'https://linkedin.com/company/seuperfil',
    x: '',
  },

  // Página independente em /#/linkbio. Campos vazios reaproveitam o site.
  linkBio: {
    title: '', // Vazio: brand.shortName.
    eyebrow: 'Advocacia e Consultoria',
    description: 'Orientação clara, escuta atenta e compromisso com seus direitos.',
    coverImage: '', // Vazio: about.photo. Caminho de uma imagem em public.
    coverAlt: '', // Vazio: about.photoAlt.
    teamTitle: 'Fale com nossos advogados',
    whatsappMessage: 'Olá! Vim pelo link da bio e gostaria de falar com a equipe jurídica.',
    // Mostra no máximo 3 pessoas de team. Para ocultar uma, use linkBio: false nela.
    quickLinks: [
      { label: 'Conheça nosso site', description: 'O escritório e nossa atuação', href: '#inicio', icon: 'mdi-web' },
      { label: 'Agendar atendimento', description: 'Presencial ou por vídeo', href: '#agendamento', icon: 'mdi-calendar-outline' },
      { label: 'Áreas de atuação', description: 'Como podemos ajudar você', href: '#areas', icon: 'mdi-scale-balance' },
      { label: 'Prepare seu atendimento', description: 'Documentos e orientações iniciais', href: '#documentos', icon: 'mdi-file-document-outline' },
    ],
  },

  // As notas e avaliações são obtidas pelo servidor; nunca preencha notas fictícias.
  googleReviews: {
    enabled: true,
    showOnLinkBio: true,
    endpoint: '/api/google-reviews',
    title: 'Avaliações no Google',
    description: 'Conheça as experiências compartilhadas sobre nosso atendimento.',
    profileUrl: '', // Link do perfil no Google Maps; funciona como alternativa à consulta automática.
    writeReviewUrl: '', // Link oficial "Pedir avaliações" do Perfil da Empresa, se desejado.
  },

  about: {
    title: 'Compromisso permanente com seus direitos',
    photo: '/media/Equipe.png',
    photoAlt: 'Imagem ilustrativa de uma equipe jurídica em reunião',
    text: 'Acreditamos que uma boa orientação começa pela escuta. Unimos conhecimento técnico e atenção às particularidades de cada situação para construir caminhos jurídicos responsáveis.',
    subtitle: 'Atuação jurídica pautada por técnica, transparência e proximidade com cada cliente.',
    cards: [
      { icon: 'fa-solid fa-scale-balanced', title: 'Ética profissional', desc: 'Integridade e transparência em todas as etapas do atendimento.' },
      { icon: 'fa-solid fa-handshake-angle', title: 'Atendimento humanizado', desc: 'Escuta ativa e orientação clara para decisões mais seguras.' },
      { icon: 'fa-solid fa-gavel', title: 'Especialização jurídica', desc: 'Atualização técnica contínua e estratégia adequada a cada caso.' },
      { icon: 'fa-solid fa-chart-line', title: 'Foco em soluções', desc: 'Atuação responsável, eficiente e comprometida com os objetivos do cliente.' },
    ],
  },

  practiceAreas: [
    { title: 'Direito Civil', description: 'Contratos, responsabilidade civil, família, sucessões e relações de consumo.', icon: 'fa-solid fa-scale-balanced' },
    { title: 'Direito Trabalhista', description: 'Orientação preventiva e atuação em conflitos das relações de trabalho.', icon: 'fa-solid fa-briefcase' },
    { title: 'Direito Penal', description: 'Acompanhamento técnico em inquéritos e processos, com atuação responsável.', icon: 'fa-solid fa-gavel' },
    { title: 'Direito Empresarial', description: 'Suporte jurídico estratégico para empresas, contratos e questões societárias.', icon: 'fa-solid fa-building' },
    { title: 'Direito Administrativo', description: 'Licitações, concursos, processos administrativos e relações com o poder público.', icon: 'fa-solid fa-landmark' },
    { title: 'Direito Tributário', description: 'Consultoria, planejamento e defesa em questões fiscais e execuções tributárias.', icon: 'fa-solid fa-receipt' },
  ],

  serviceJourney: [
    { icon: 'mdi-message-text-outline', title: 'Primeiro contato', text: 'Você explica sua necessidade por telefone, WhatsApp ou formulário.' },
    { icon: 'mdi-account-search-outline', title: 'Análise inicial', text: 'A equipe compreende o contexto e orienta quais informações serão necessárias.' },
    { icon: 'mdi-file-sign', title: 'Próximos passos', text: 'Com clareza e transparência, você recebe a orientação adequada ao seu caso.' },
  ],

  faq: [
    { question: 'O primeiro atendimento pode ser feito online?', answer: 'Sim. O contato inicial pode ocorrer pelo WhatsApp ou telefone, conforme a disponibilidade informada pelo escritório.' },
    { question: 'Quais documentos devo separar?', answer: 'Isso depende da área e do caso. No primeiro contato, a equipe indicará somente os documentos realmente necessários.' },
    { question: 'O envio do formulário cria uma contratação?', answer: 'Não. O formulário apenas prepara uma conversa pelo WhatsApp e não constitui contratação nem análise jurídica definitiva.' },
  ],

  team: [
    { name: 'Flavia Luara', role: 'Advogada | Direito Civil', description: 'Atuação estratégica com atendimento próximo e transparente.', photo: '/IMGADV/2.png', instagram: '', linkedin: '' },
    { name: 'Flavia Luara', role: 'Advogada | Direito de Família', description: 'Atuação técnica e sensível em demandas familiares e sucessórias.', photo: '/IMGADV/2.png', instagram: '', linkedin: '' },
    { name: 'Flavia Luara', role: 'Advogada | Direito Empresarial', description: 'Assessoria preventiva e contenciosa para empresas e empreendedores.', photo: '/IMGADV/2.png', instagram: '', linkedin: '' },
  ],

  testimonials: [
    { name: 'Cliente atendido', location: 'Piauí', text: 'Atendimento claro, responsável e muito cuidadoso em todas as etapas.', photo: '' },
    { name: 'Cliente atendido', location: 'Piauí', text: 'Recebi todas as orientações de forma simples e me senti seguro durante o processo.', photo: '' },
    { name: 'Cliente atendido', location: 'Piauí', text: 'Equipe atenciosa, acessível e comprometida com uma solução adequada.', photo: '' },
  ],

  seo: {
    title: 'Seu Nome Advocacia | Atendimento jurídico',
    description: 'Escritório de advocacia com atendimento estratégico, ético e humanizado.',
  },
  whatsappWidget: { messages: ['Precisa de orientação? Converse com nossa equipe.', 'Estamos à disposição para esclarecer suas dúvidas.'], firstDelay: 12_000, interval: 60_000 },
})

export const whatsappUrl = () => {
  const message = encodeURIComponent(siteConfig.contact.whatsappMessage)
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`
}
