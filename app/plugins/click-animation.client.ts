/**
 * Ajoute un petit effet « tap » (classe .click-pulse) quand on clique
 * sur un texte, un lien ou un bouton — de façon globale, sans avoir à
 * modifier chaque composant.
 */
export default defineNuxtPlugin(() => {
  // Éléments considérés comme « cliquables » pour l'animation.
  const SELECTOR =
    'a, button, [role="button"], nav a, label, h1, h2, h3, h4, h5, h6, .animate-click'

  const onClick = (event: MouseEvent) => {
    const el = (event.target as HTMLElement | null)?.closest<HTMLElement>(SELECTOR)
    if (!el) return

    // On relance l'animation même en cas de clics rapides successifs.
    el.classList.remove('click-pulse')
    void el.offsetWidth // force un reflow pour réinitialiser l'animation
    el.classList.add('click-pulse')
  }

  const onAnimationEnd = (event: AnimationEvent) => {
    const el = event.target as HTMLElement | null
    if (el?.classList?.contains('click-pulse')) {
      el.classList.remove('click-pulse')
    }
  }

  document.addEventListener('click', onClick, true)
  document.addEventListener('animationend', onAnimationEnd, true)
})
