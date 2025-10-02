"use client"

import Link from "next/link"
import { useAtom } from "jotai"
import { languageAtom } from "@/state/atoms"

type NavItem = { label_en: string; label_zh: string; path: string }

export default function NavDesktopClient({ navItems }: { navItems: NavItem[] }) {
  const [lang] = useAtom(languageAtom)
  return (
    <nav className="hidden md:flex items-center gap-6 flex-1">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className="text-sm font-medium transition-colors hover:text-foreground text-muted-foreground"
        >
          {lang === 'zh' ? item.label_zh : item.label_en}
        </Link>
      ))}
    </nav>
  )
}


