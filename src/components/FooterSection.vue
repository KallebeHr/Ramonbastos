
<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { siteConfig as c } from '../config/siteConfig'

const socialLinks = computed(() =>
  Object.entries(c.social).filter(([, url]) => url)
)

const currentYear = new Date().getFullYear()

// Controle do modal
const showDeveloperModal = ref(false)

// Personalize seus contatos aqui
const developerName = 'Kallebe Max'
const developerInstagram = 'https://instagram.com/dev.kallebe'
const developerWhatsapp = 'https://wa.me/5586981632626'

// Fechar modal com tecla ESC
function handleEscape(event) {
  if (event.key === 'Escape') {
    showDeveloperModal.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <footer>
    <div class="wrap footer-inner">
      <span>
        {{ c.brand.officeName }}
        <small>{{ c.brand.oab }}</small>
      </span>

      <!-- Crédito do desenvolvedor -->
      <button
        type="button"
        class="developer-credit"
        @click="showDeveloperModal = true"
      >
        © {{ currentYear }} · Desenvolvido por {{ developerName }}
      </button>

      <nav
        aria-label="Links do escritório e redes sociais"
        class="social-links"
      >
        <a href="#/linkbio">Link na bio</a>

        <a
          v-if="c.googleReviews?.enabled"
          href="#avaliacoes"
        >
          Avaliações
        </a>

        <a
          v-for="[network, url] in socialLinks"
          :key="network"
          :href="url"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ network }}
        </a>
      </nav>
    </div>

    <!-- Modal do desenvolvedor -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showDeveloperModal"
          class="developer-overlay"
          @click.self="showDeveloperModal = false"
        >
          <div
            class="developer-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="developer-title"
          >
            <button
              type="button"
              class="modal-close"
              aria-label="Fechar modal"
              @click="showDeveloperModal = false"
            >
              &times;
            </button>

            <div class="developer-icon">
              &lt;/&gt;
            </div>

            <h2 id="developer-title">
              Olá! Prazer em conhecer você.
            </h2>

            <p>
              Sou <strong>{{ developerName }}</strong>,
              desenvolvedor deste site.
            </p>

            <p>
              Deseja enviar um feedback, conhecer meu trabalho
              ou entrar em contato? Será um prazer conversar com você!
            </p>

            <div class="developer-actions">
              <a
                :href="developerInstagram"
                target="_blank"
                rel="noopener noreferrer"
                class="developer-btn instagram-btn"
              >
                <span>Instagram</span>
              </a>

              <a
                :href="developerWhatsapp"
                target="_blank"
                rel="noopener noreferrer"
                class="developer-btn whatsapp-btn"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            <small class="developer-footer">
              Desenvolvido com dedicação.
            </small>
          </div>
        </div>
      </Transition>
    </Teleport>
  </footer>
</template>

<style scoped>
.social-links {
  flex-wrap: wrap;
}

/* Crédito */
.developer-credit {
  background: none;
  border: none;
  padding: 5px;
  color: inherit;
  font: inherit;
  font-size: inherit;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.2s ease;
}

.developer-credit:hover {
  opacity: 1;
  text-decoration: underline;
}

/* Fundo do modal */
.developer-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Caixa do modal */
.developer-modal {
  position: relative;
  width: 100%;
  max-width: 420px;
  padding: 38px 28px 28px;
  border-radius: 18px;
  background: #fff;
  color: #252525;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  border: none;
  background: none;
  font-size: 30px;
  color: #777;
  cursor: pointer;
  line-height: 1;
}

.developer-icon {
  width: 58px;
  height: 58px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f1f1f1;
  color: #333;
  font-size: 21px;
  font-weight: 700;
}

.developer-modal h2 {
  font-size: 21px;
  margin: 0 0 15px;
  line-height: 1.35;
}

.developer-modal p {
  font-size: 14px;
  line-height: 1.7;
  color: #666;
  margin: 0 0 12px;
}

.developer-actions {
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 25px;
}

.developer-btn {
  display: block;
  padding: 13px 18px;
  border-radius: 9px;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: transform 0.2s, opacity 0.2s;
}

.developer-btn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.instagram-btn {
  background: #833ab4;
}

.whatsapp-btn {
  background: #25D366;
}

.developer-footer {
  display: block;
  margin-top: 22px;
  color: #999;
  font-size: 11px;
}

/* Animação */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .developer-modal,
.modal-leave-active .developer-modal {
  transition: transform 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .developer-modal,
.modal-leave-to .developer-modal {
  transform: translateY(15px) scale(0.97);
}
</style>
