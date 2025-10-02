"use client"

import Image from "next/image"
import Link from "next/link"
import { useAtom } from "jotai"
import { themeAtom } from "@/state/atoms"

export function HeaderLogo() {
  const [theme] = useAtom(themeAtom)
  
  // 根据主题选择图片
  const logoSrc = theme === 'light' ? '/DHAoW.png' : '/DHA.png'
  
  return (
    <Link href="/" className="mr-6">
      <Image 
        src={logoSrc} 
        alt="Logo" 
        width={144} 
        height={144} 
        priority 
      />
    </Link>
  )
}
