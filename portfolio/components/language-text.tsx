"use client"

import { useAtom } from 'jotai'
import { languageAtom } from '@/state/atoms'

type Key =
  | 'education'
  | 'aboutMe'
  | 'contactInfo'
  | 'connect'
  | 'github'
  | 'linkedin'
  | 'email'

const DICT: Record<'en' | 'zh', Record<Key, string>> = {
  en: {
    education: 'Education',
    aboutMe: 'About Me',
    contactInfo: 'Contact Information',
    connect: 'Connect with Me',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
  zh: {
    education: '教育经历',
    aboutMe: '关于我',
    contactInfo: '联系方式',
    connect: '社交与联系',
    github: 'GitHub',
    linkedin: '领英',
    email: '邮箱',
  },
}

export default function LanguageText({ k }: { k: Key }) {
  const [lang] = useAtom(languageAtom)
  return DICT[lang][k]
}


