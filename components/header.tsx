import Link from "next/link"
import Image from "next/image"
import { HeaderClient } from "./header-client"
import NavDesktopClient from "./nav-desktop-client"
import { HeaderLogo } from "./header-logo"

// Navigation items with bilingual labels
const navItems = [
  { label_en: "Home", label_zh: "首页", path: "/" },
  { label_en: "Projects", label_zh: "项目", path: "/projects" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <HeaderLogo />

        {/* Desktop Navigation - Client rendered for language switching */}
        <NavDesktopClient navItems={navItems} />

        {/* Client-side mobile menu handling */}
        <HeaderClient navItems={navItems} />

        {/* Right-side clickable image button */}
        <Link href="/" className="ml-3" aria-label="CUC link">
          <Image src="/CUC.png" alt="CUC" width={216} height={216} priority />
        </Link>
      </div>
    </header>
  )
}
