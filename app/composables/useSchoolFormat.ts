/**
 * Helpers d'affichage partagés par le répertoire et la fiche d'école.
 * Le formatage de date est volontairement manuel plutôt que via toLocaleDateString :
 * il donne le même résultat au rendu serveur et au rendu client (pas de mismatch
 * d'hydratation lié à la locale ou au fuseau de la machine).
 */
export const useSchoolFormat = () => {
  /** Format court « 20.10.2025 », celui utilisé dans les maquettes. */
  const formatDate = (value?: string | null) => {
    if (!value) return '—'
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return '—'
    const day = String(date.getUTCDate()).padStart(2, '0')
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    return `${day}.${month}.${date.getUTCFullYear()}`
  }

  /** Initiales de repli quand une école n'a pas encore de logo. */
  const initials = (school?: { sigle?: string; name?: string } | null) => {
    if (!school) return '?'
    if (school.sigle) return school.sigle.slice(0, 3).toUpperCase()
    return (school.name ?? '?')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() ?? '')
      .join('')
  }

  return { formatDate, initials }
}
