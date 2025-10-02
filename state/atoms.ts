// Centralized Jotai atoms for shared UI state
import { atom } from 'jotai'
import { atomFamily } from 'jotai/utils'

// Header mobile menu open state (global across header instances)
export const mobileMenuOpenAtom = atom(false)

// Floating share button open state per unique url
export const floatingShareOpenAtomFamily = atomFamily((key: string) => atom(false))

// Share-post copied flag per slug
export const sharePostCopiedAtomFamily = atomFamily((slug: string) => atom(false))

// Global UI language state (simple zh/en)
export type UILanguage = 'zh' | 'en'
export const languageAtom = atom<UILanguage>('zh')

// Language with persistence
export const languageWithPersistenceAtom = atom(
  (get) => get(languageAtom),
  (get, set, newValue: UILanguage) => {
    set(languageAtom, newValue)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newValue)
    }
  }
)

// Navigation state atoms
export const isMenuOpenAtom = atom(false)
export const isScrolledAtom = atom(false)
export const activeSectionAtom = atom('none')
export const animationKeyAtom = atom(0)
export const isAnimatingAtom = atom(false)
export const showInitialAnimationAtom = atom(true)
export const animationTypeAtom = atom<'opening' | 'closing' | 'none'>('none')

// Hover state atoms
export const isLogoHoveredAtom = atom(false)
export const isUserHoveredAtom = atom(false)
export const isSearchHoveredAtom = atom(false)
export const isMenuHoveredAtom = atom(false)
export const isLanguageHoveredAtom = atom(false)
export const isCucHoveredAtom = atom(false)

// Search state atoms
export const isSearchOpenAtom = atom(false)
export const searchQueryAtom = atom('')

// Menu texts atom
export const currentMenuTextsAtom = atom((get) => {
  const language = get(languageAtom)
  return {
    research: language === 'zh' ? '研究方向' : 'Research',
    projects: language === 'zh' ? '项目案例' : 'Projects',
    achievements: language === 'zh' ? '学术成果' : 'Achievements',
    talent: language === 'zh' ? '人才培养' : 'Talent',
    about: language === 'zh' ? '关于我们' : 'About',
    searchPlaceholder: language === 'zh' ? '搜索...' : 'Search...'
  }
})

// Theme state (light/dark)
export type Theme = 'light' | 'dark'
export const themeAtom = atom<Theme>('dark')


