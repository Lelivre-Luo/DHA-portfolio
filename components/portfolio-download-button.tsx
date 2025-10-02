"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAtom } from "jotai"
import { languageAtom } from "@/state/atoms"

export function PortfolioDownloadButton() {
  const [language] = useAtom(languageAtom)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")

  const buttonText = language === 'zh' ? '作品集' : 'Portfolio'
  const unavailableText = language === 'zh' 
    ? '作品集暂时不可用，请直接联系我。' 
    : 'Portfolio is currently unavailable. Please contact me directly.'

  const handleDownload = async () => {
    try {
      // 测试用：使用不存在的文件路径
      const portfolioPath = "/digihuman-portfolio-test.pdf" // 不存在的文件
      
      // 尝试检查文件是否存在
      const response = await fetch(portfolioPath, { method: 'HEAD' })
      
      if (response.ok) {
        // 文件存在，直接下载
        const link = document.createElement('a')
        link.href = portfolioPath
        link.download = 'Digital_Human_Academy_Portfolio.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        // 文件不存在，显示提示
        setMessage(unavailableText)
        setShowMessage(true)
        
        // 2秒后隐藏提示
        setTimeout(() => {
          setShowMessage(false)
          setMessage("")
        }, 2000)
      }
    } catch (error) {
      // 网络错误或其他错误，显示提示
      setMessage(unavailableText)
      setShowMessage(true)
      
      // 2秒后隐藏提示
      setTimeout(() => {
        setShowMessage(false)
        setMessage("")
      }, 2000)
    }
  }

  return (
    <div className="relative">
      <Button
        onClick={handleDownload}
        variant="outline"
        size="lg"
        className="border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
      >
        <Download className="h-4 w-4 mr-2" />
        {buttonText}
      </Button>
      
      {showMessage && (
        <div className="absolute top-full left-0 mt-2 text-sm text-yellow-400 animate-pulse whitespace-nowrap">
          {message}
        </div>
      )}
    </div>
  )
}
