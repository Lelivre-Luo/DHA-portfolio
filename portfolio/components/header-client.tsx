"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useAtom } from "jotai"
import { mobileMenuOpenAtom, languageAtom } from "@/state/atoms"
import LanguageToggle from "@/components/language-toggle"

interface HeaderClientProps {
  navItems: { label_en: string; label_zh: string; path: string }[]
}

export function HeaderClient({ navItems }: HeaderClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useAtom(mobileMenuOpenAtom)
  const [lang] = useAtom(languageAtom)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="flex items-center">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        className="px-2 md:hidden"
        aria-label="Toggle Menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Language toggle */}
      <LanguageToggle />

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-14 z-50 grid h-[calc(100vh-3.5rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden bg-background border-t border-border">
          <div className="relative z-20 grid gap-6 rounded-md p-4">
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex w-full items-center rounded-md p-2 text-sm font-medium ${
                    pathname === item.path ? "bg-accent text-accent-foreground" : "hover:bg-accent text-muted-foreground hover:text-accent-foreground"
                  }`}
                >
                  {lang === 'zh' ? item.label_zh : item.label_en}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
