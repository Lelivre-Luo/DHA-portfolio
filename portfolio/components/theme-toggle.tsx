"use client"

import { useAtom } from "jotai"
import { themeAtom } from "@/state/atoms"
import { useEffect } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useAtom(themeAtom)

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full border-2 border-foreground/20 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {/* Large circle representing background color */}
      <div className="absolute inset-3 rounded-full bg-background border border-foreground/10 transition-colors duration-300" />
      
      {/* Small circle representing text color - positioned at bottom right */}
      <div 
        className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-foreground transition-all duration-300 group-hover:scale-110"
      />
      
      {/* Optional: Add a subtle animation when switching */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  )
}
