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

// Theme state (light/dark)
export type Theme = 'light' | 'dark'
export const themeAtom = atom<Theme>('dark')


