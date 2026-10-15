<script setup>
  import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
  import { siteConfig as c, whatsappUrl } from '../config/siteConfig'

  const menu = ref(false)
  const query = ref('')
  const searched = ref(false)
  const menuClose = ref(null)
  const menuOpen = ref(null)
  const links = computed(() => [['Início', '#inicio'], ['O escritório', '#escritorio'], ['Áreas de atuação', '#areas'], ['Nossa equipe', '#equipe'], ...(c.googleReviews?.enabled ? [['Avaliações', '#avaliacoes']] : []), ['Localização', '#localizacao'], ['Contato', '#contato']])
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036F]/g, '').toLowerCase()
  const results = computed(() => {
    const term = normalize(query.value.trim())
    if (!term) return []
    return [
      ...c.practiceAreas.map((area, index) => ({ title: area.title, text: area.description, href: `#area-${index}` })),
      { title: c.about.title, text: c.about.text, href: '#escritorio' },
      { title: 'Contato e atendimento', text: `${c.contact.address} ${c.contact.email}`, href: '#contato' },
      { title: 'Agendamento e triagem', text: 'Solicitar atendimento presencial ou por vídeo', href: '#agendamento' },
      { title: 'Checklist de documentos', text: 'Preparar documentos para o atendimento', href: '#documentos' },
      ...(c.googleReviews?.enabled ? [{ title: 'Avaliações no Google', text: 'Opiniões sobre o escritório e avaliação do atendimento', href: '#avaliacoes' }] : []),
      ...c.faq.map(item => ({ title: item.question, text: item.answer, href: '#duvidas' })),
    ].filter(item => normalize(`${item.title} ${item.text}`).includes(term))
  })

  watch(menu, async value => {
    document.body.classList.toggle('menu-is-open', value)
    if (value) {
      await nextTick()
      menuClose.value?.focus()
    } else menuOpen.value?.focus()
  })

  function trapMenuFocus (event) {
    if (!menu.value) return
    const items = [...event.currentTarget.querySelectorAll('a[href],button:not([disabled])')]
    const first = items[0]
    const last = items.at(-1)
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  onUnmounted(() => document.body.classList.remove('menu-is-open'))
</script>

<template>
  <header id="inicio">
    <div class="topbar wrap">
      <span class="top-note">Ética. Proximidade. Compromisso.</span>
      <button
        ref="menuOpen"
        aria-controls="navigation"
        :aria-expanded="menu"
        aria-label="Abrir menu principal"
        class="menu-toggle icon-button"
        @click="menu = true"
      ><i aria-hidden="true" class="mdi mdi-menu" /></button>
      <nav
        id="navigation"
        aria-label="Navegação principal"
        :class="{ expanded: menu }"
        @keydown.esc="menu = false"
        @keydown.tab="trapMenuFocus"
      >
        <div class="mobile-menu-head"><a href="#inicio" @click="menu = false"><span class="monogram">{{ c.brand.initials }}</span><span>{{ c.brand.shortName }}<small>ADVOCACIA</small></span></a><button ref="menuClose" aria-label="Fechar menu principal" @click="menu = false"><i aria-hidden="true" class="mdi mdi-close" /></button></div>
        <p class="mobile-menu-label">NAVEGUE PELO SITE</p>
        <a
          v-for="([label, href], index) in links"
          :key="href"
          :href="href"
          :style="{ '--menu-index': index }"
          @click="menu = false"
        ><span>0{{ index + 1 }}</span>{{ label }}<i aria-hidden="true" class="mdi mdi-arrow-right" /></a>
        <div class="mobile-menu-contact"><a :href="`tel:+${c.contact.phoneRaw}`"><i aria-hidden="true" class="mdi mdi-phone-outline" />{{ c.contact.phone }}</a><a :href="whatsappUrl()" rel="noopener" target="_blank"><i aria-hidden="true" class="mdi mdi-whatsapp" />WhatsApp</a></div>
      </nav>
    </div>
    <div class="masthead"><div class="wrap masthead-inner">
      <a :aria-label="`${c.brand.officeName} — início`" class="brand" href="#inicio"><img v-if="c.brand.logo" :alt="c.brand.officeName" :src="c.brand.logo" style="filter: brightness(0) invert(1);"><span v-else class="monogram">{{ c.brand.initials }}</span><span>{{ c.brand.shortName }}<small>ADVOCACIA</small></span></a>
      <form class="search" role="search" @submit.prevent="searched = true"><label class="sr-only" for="site-search">Pesquisar no site</label><input
        id="site-search"
        v-model="query"
        placeholder="O que você procura?"
        type="search"
        @keydown.esc="searched = false"
      ><button aria-label="Pesquisar"><i aria-hidden="true" class="mdi mdi-magnify" /></button></form>
      <a class="header-phone" :href="`tel:+${c.contact.phoneRaw}`"><i aria-hidden="true" class="mdi mdi-phone-outline" /><span><small>Fale com nosso escritório</small>{{ c.contact.phone }}</span></a>
    </div></div>
  </header>
  <section v-if="searched" aria-label="Resultados da pesquisa" class="search-results wrap">
    <button class="close-results" @click="searched = false">Fechar pesquisa <i aria-hidden="true" class="mdi mdi-close" /></button>
    <h2>Resultados da pesquisa</h2>
    <p role="status">{{ query.trim() ? `${results.length} resultado(s) para “${query}”` : 'Digite uma palavra para pesquisar.' }}</p>
    <a v-for="result in results" :key="result.title + result.href" :href="result.href" @click="searched = false">{{ result.title }}<small>{{ result.text }}</small></a>
  </section>
</template>

<style scoped>
@media (min-width: 701px) and (max-width: 1000px) {
  .topbar nav { gap: clamp(8px, 1.8vw, 20px); }
  .topbar nav>a { font-size: .78rem; }
}
@media (max-width: 700px) {
  .topbar nav#navigation { overflow-y: auto; overscroll-behavior: contain; }
  .mobile-menu-contact { margin-top: 28px; flex-shrink: 0; }
}
</style>
