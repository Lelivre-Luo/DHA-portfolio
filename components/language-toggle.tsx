"use client"

import { useAtom } from 'jotai'
import { languageAtom, UILanguage } from '@/state/atoms'
import { Button } from '@/components/ui/button'

export default function LanguageToggle() {
  const [lang, setLang] = useAtom(languageAtom)
  const toggle = () => setLang((prev) => (prev === 'en' ? 'zh' : 'en') as UILanguage)
  return (
    <Button variant="ghost" size="sm" onClick={toggle} aria-label="Toggle language">
      {lang === 'en' ? '中文' : 'EN'}
    </Button>
  )
}


