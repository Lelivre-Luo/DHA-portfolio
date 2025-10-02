"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { useAtom } from "jotai"
import { 
  languageAtom, 
  languageWithPersistenceAtom,
  isMenuOpenAtom, 
  isScrolledAtom, 
  activeSectionAtom,
  animationKeyAtom,
  isAnimatingAtom,
  showInitialAnimationAtom,
  animationTypeAtom,
  isLogoHoveredAtom,
  isUserHoveredAtom,
  isSearchHoveredAtom,
  isMenuHoveredAtom,
  isLanguageHoveredAtom,
  isCucHoveredAtom,
  currentMenuTextsAtom,
  isSearchOpenAtom,
  searchQueryAtom
} from "@/state/atoms"

interface NavigationProps {
  isScrolled?: boolean
  showScrollEffect?: boolean
}

export function Navigation({ isScrolled: externalIsScrolled, showScrollEffect = true }: NavigationProps) {
  const router = useRouter()
  const pathname = usePathname()
  
  // Jotai状态
  const [language, setLanguage] = useAtom(languageWithPersistenceAtom)
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom)
  const [isScrolled, setIsScrolled] = useAtom(isScrolledAtom)
  const [activeSection, setActiveSection] = useAtom(activeSectionAtom)
  const [animationKey, setAnimationKey] = useAtom(animationKeyAtom)
  const [isAnimating, setIsAnimating] = useAtom(isAnimatingAtom)
  const [showInitialAnimation, setShowInitialAnimation] = useAtom(showInitialAnimationAtom)
  const [animationType, setAnimationType] = useAtom(animationTypeAtom)
  const [isLogoHovered, setIsLogoHovered] = useAtom(isLogoHoveredAtom)
  const [isUserHovered, setIsUserHovered] = useAtom(isUserHoveredAtom)
  const [isSearchHovered, setIsSearchHovered] = useAtom(isSearchHoveredAtom)
  const [isMenuHovered, setIsMenuHovered] = useAtom(isMenuHoveredAtom)
  const [isLanguageHovered, setIsLanguageHovered] = useAtom(isLanguageHoveredAtom)
  const [isCucHovered, setIsCucHovered] = useAtom(isCucHoveredAtom)
  const [currentMenuTexts] = useAtom(currentMenuTextsAtom)
  const [isSearchOpen, setIsSearchOpen] = useAtom(isSearchOpenAtom)
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
  
  // 语言切换函数
  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  // 初始化语言设置
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as 'zh' | 'en'
      if (savedLanguage && savedLanguage !== language) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  // 滚动事件监听
  useEffect(() => {
    if (!showScrollEffect) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          // 使用更严格的阈值，并添加防抖
          const shouldShow = scrollY > 50
          setIsScrolled(shouldShow)
          
          ticking = false
        })
        ticking = true
      }
    }

    // 初始化时检查一次
    const initialScroll = window.scrollY
    setIsScrolled(initialScroll > 50)

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showScrollEffect])

  // 某些页面强制保持滚动后的紧凑状态
  const forceCompactPages = ['/blog', '/publications', '/talks']
  const isForceCompactPage = forceCompactPages.includes(pathname) || pathname.startsWith('/projects')
  
  const currentIsScrolled = isForceCompactPage ? true : (showScrollEffect ? isScrolled : externalIsScrolled)

  const handleMenuToggle = () => {
    if (!isMenuOpen) {
      // 打开菜单：立即弹出菜单，独立播放横线变叉子动画
      setIsMenuOpen(true) // 立即弹出菜单
      setIsSearchOpen(false) // 关闭搜索
      setSearchQuery('') // 清空搜索内容
      clearHighlights() // 清理搜索高亮
      setAnimationType('opening') // 设置动画类型
      setIsAnimating(true)
      setAnimationKey(prev => prev + 1)
      setTimeout(() => {
        setIsAnimating(false)
        setAnimationType('none')
      }, 400) // 等待动画完成
    } else {
      // 关闭菜单：立即收回菜单，独立播放叉子变横线动画
      setIsMenuOpen(false) // 立即收回菜单
      setAnimationType('closing') // 设置动画类型
      setIsAnimating(true)
      setAnimationKey(prev => prev + 1)
      setTimeout(() => {
        setIsAnimating(false)
        setAnimationType('none')
        setShowInitialAnimation(false) // 关闭动画完成后不再显示初始动画
      }, 400) // 等待动画完成
    }
  }

  const handleLanguageToggle = () => {
    toggleLanguage()
  }

  const handleSearchToggle = () => {
    if (!isSearchOpen) {
      // 如果搜索未打开，打开搜索
      setIsSearchOpen(true)
      // 如果菜单是打开的，关闭菜单
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    } else {
      // 如果搜索已打开，关闭搜索
      setIsSearchOpen(false)
      setSearchQuery('')
      clearHighlights()
    }
  }

  // 搜索功能
  const searchInPage = (query: string) => {
    if (!query.trim()) {
      // 清空所有高亮
      clearHighlights()
      return
    }

    // 清空之前的高亮
    clearHighlights()
    
    // 获取页面中所有文本节点
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          // 排除脚本和样式标签
          const parent = node.parentElement
          if (!parent) return NodeFilter.FILTER_REJECT
          if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') {
            return NodeFilter.FILTER_REJECT
          }
          // 排除导航栏和菜单
          if (parent.closest('nav') || parent.closest('[class*="fixed"]')) {
            return NodeFilter.FILTER_REJECT
          }
          return NodeFilter.FILTER_ACCEPT
        }
      }
    )

    const textNodes: Text[] = []
    let node
    while (node = walker.nextNode()) {
      textNodes.push(node as Text)
    }

    // 搜索并高亮匹配的文本
    textNodes.forEach(textNode => {
      const text = textNode.textContent || ''
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
      
      if (regex.test(text)) {
        const parent = textNode.parentElement
        if (parent && parent.innerHTML) {
          const highlightedHTML = text.replace(regex, '<mark class="bg-yellow-200 text-black px-1 rounded">$1</mark>')
          parent.innerHTML = parent.innerHTML.replace(text, highlightedHTML)
        }
      }
    })
  }

  const clearHighlights = () => {
    const marks = document.querySelectorAll('mark')
    marks.forEach(mark => {
      const parent = mark.parentElement
      if (parent) {
        parent.replaceChild(document.createTextNode(mark.textContent || ''), mark)
        parent.normalize()
      }
    })
  }

  // 监听搜索查询变化
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchInPage(searchQuery)
    }, 300) // 防抖，300ms后执行搜索

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  // 清理搜索高亮
  useEffect(() => {
    return () => {
      clearHighlights()
    }
  }, [])

  const handleMenuClick = (section: string) => {
    setIsMenuOpen(false) // 关闭菜单
    
    // 所有菜单都跳转到 https://digihuman.academy/
    window.location.href = `https://digihuman.academy/#${section}`
  }

  return (
    <>
      {/* Logo区域 - 完全独立，支持滚动效果，手机版隐藏 */}
      <div className="fixed top-0 left-16 z-[100] hidden lg:block" style={{ marginTop: currentIsScrolled ? '20px' : '60px' }}>
        <a href="https://digihuman.academy/" className="relative group block transition-all duration-300 hover:translate-y-1">
          {/* 紫色背景 - 滚动时动态调整位置，添加入场动画 */}
          <div 
            className="absolute bg-[#6125d6] transition-all duration-300 animate-slide-down"
            style={{
              width: '220px',
              height: currentIsScrolled ? '175px' : '230px',
              top: currentIsScrolled ? '-108px' : '-128px',
              left: '0px',
              zIndex: 1,
              animationDelay: '0.2s',
              animationFillMode: 'both'
            }}
          />
          
          {/* Logo文字 - 滚动时动态调整位置，往上移动更多，添加入场动画 */}
          <Image
            src="https://assets.latentcat.com/f9f8e4ce-41c1-4996-9a9c-e477e53de652.svg"
            alt="Digital Human Academy"
            width={180}
            height={36}
            className="relative z-10 transition-all duration-300 animate-slide-down"
            style={{
              width: '180px',
              height: '36px',
              marginTop: currentIsScrolled ? '16px' : '24px',
              marginLeft: '20px',
              animationDelay: '0.4s',
              animationFillMode: 'both'
            }}
          />
        </a>
      </div>

      {/* 黑色导航栏 - 纯背景，不包含按钮 */}
      <nav className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
        currentIsScrolled ? "bg-black/60 backdrop-blur-sm" : ""
      }`} style={{ paddingTop: currentIsScrolled ? '20px' : '60px' }}>
        <div className="flex items-center justify-between px-6 lg:px-12 py-7 lg:py-9">
          {/* 左侧占位 */}
          <div style={{ width: '320px' }} />
          {/* 右侧占位 - 为按钮预留空间 */}
          <div style={{ width: '200px' }} />
        </div>
      </nav>

      {/* 手机版Logo按钮 - 左上角 */}
      <div className="lg:hidden fixed top-0 left-12 z-[100] transition-all duration-300" style={{ marginTop: currentIsScrolled ? '20px' : '60px' }}>
        <a 
          href="https://digihuman.academy/" 
          className="block group"
          onTouchStart={() => setIsLogoHovered(true)}
          onTouchEnd={() => setTimeout(() => setIsLogoHovered(false), 200)}
          onMouseDown={() => setIsLogoHovered(true)}
          onMouseUp={() => setTimeout(() => setIsLogoHovered(false), 200)}
        >
          <div className="relative w-6 h-6">
            <Image
              src="https://assets.latentcat.com/95cd5f3f-c42f-4a68-a981-1c815f08cddc.svg"
              alt="数字人研究院"
              width={24}
              height={24}
              className={`absolute inset-0 transition-opacity duration-300 ${
                (isMenuOpen || isSearchOpen) || isLogoHovered ? 'opacity-0' : 'opacity-100'
              } group-hover:opacity-0`}
              style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
            />
            <Image
              src="https://assets.latentcat.com/d4d0f5dd-2aea-4ef2-bd2b-5f6fb743d3a5.svg"
              alt="数字人研究院"
              width={24}
              height={24}
              className={`absolute inset-0 transition-opacity duration-300 ${
                (isMenuOpen || isSearchOpen) || isLogoHovered ? 'opacity-100' : 'opacity-0'
              } group-hover:opacity-100`}
            />
          </div>
        </a>
      </div>

      {/* 按钮区域 - 完全独立，最高层级 */}
      <div
        className="fixed top-0 right-6 lg:right-16 z-[100] transition-all duration-300"
        style={{
          marginTop: currentIsScrolled ? '20px' : '60px'
        }}
      >
        <div className="flex items-center gap-4">
          <button 
            className="p-1 lg:p-2 transition-colors group cursor-pointer"
            onTouchStart={() => setIsUserHovered(true)}
            onTouchEnd={() => setTimeout(() => setIsUserHovered(false), 200)}
            onMouseDown={() => setIsUserHovered(true)}
            onMouseUp={() => setTimeout(() => setIsUserHovered(false), 200)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`lg:w-8 lg:h-8 transition-colors ${isMenuOpen || isSearchOpen || isUserHovered ? 'text-[#6125d6]' : 'text-white group-hover:text-[#6125d6]'}`}>
              <g fill="currentColor" fillOpacity="0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path strokeDasharray="20" strokeDashoffset="20" d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"/>
                </path>
                <path strokeDasharray="36" strokeDashoffset="36" d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.5s" values="36;0"/>
                </path>
                <animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"/>
              </g>
            </svg>
          </button>
          <button 
            onClick={handleSearchToggle}
            className="p-1 lg:p-2 transition-colors group cursor-pointer"
            onTouchStart={() => setIsSearchHovered(true)}
            onTouchEnd={() => setTimeout(() => setIsSearchHovered(false), 200)}
            onMouseDown={() => setIsSearchHovered(true)}
            onMouseUp={() => setTimeout(() => setIsSearchHovered(false), 200)}
          >
            {!isSearchOpen ? (
              // 搜索图标
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`lg:w-8 lg:h-8 transition-colors ${isMenuOpen || isSearchOpen || isSearchHovered ? 'text-[#6125d6]' : 'text-white group-hover:text-[#6125d6]'}`}>
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path strokeDasharray="40" strokeDashoffset="40" d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"/>
                  </path>
                  <path strokeDasharray="12" strokeDashoffset="12" d="M10.5 13.5l-7.5 7.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"/>
                  </path>
                </g>
              </svg>
            ) : (
              // 叉号图标
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`lg:w-8 lg:h-8 transition-colors text-[#6125d6]`}>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"/>
              </svg>
            )}
          </button>
          <button 
            onClick={handleMenuToggle}
            className="p-1 lg:p-2 transition-colors group cursor-pointer"
            onTouchStart={() => setIsMenuHovered(true)}
            onTouchEnd={() => setTimeout(() => setIsMenuHovered(false), 200)}
            onMouseDown={() => setIsMenuHovered(true)}
            onMouseUp={() => setTimeout(() => setIsMenuHovered(false), 200)}
          >
            {/* 菜单关闭状态：显示横线 */}
            {!isMenuOpen && !isAnimating && (
              <div>
                {showInitialAnimation ? (
                  // 初始加载时播放横线绘制动画
                  <svg key={`menu-${animationKey}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`lg:w-8 lg:h-8 transition-colors ${isMenuOpen || isSearchOpen || isMenuHovered ? 'text-[#6125d6]' : 'text-white group-hover:text-[#6125d6]'}`}>
                    <g fill="none" stroke="currentColor" strokeDasharray="16" strokeDashoffset="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M5 5h14">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"/>
                      </path>
                      <path d="M5 12h14">
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"/>
                      </path>
                      <path d="M5 19h14">
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"/>
                      </path>
                    </g>
                  </svg>
                ) : (
                  // 动画完成后显示静态横线
                  <svg key={`menu-static-${animationKey}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`lg:w-8 lg:h-8 transition-colors ${isMenuOpen || isSearchOpen || isMenuHovered ? 'text-[#6125d6]' : 'text-white group-hover:text-[#6125d6]'}`}>
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M5 5h14"/>
                      <path d="M5 12h14"/>
                      <path d="M5 19h14"/>
                    </g>
                  </svg>
                )}
              </div>
            )}

            {/* 打开动画：横线变叉子 */}
            {isAnimating && animationType === 'opening' && (
              <div>
                <svg key={`open-new-${animationKey}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`lg:w-8 lg:h-8 transition-colors ${isMenuOpen || isSearchOpen || isMenuHovered ? 'text-[#6125d6]' : 'text-white group-hover:text-[#6125d6]'}`}>
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19">
                    <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19;M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"/>
                  </path>
                </svg>
              </div>
            )}

            {/* 菜单打开状态：显示叉子 */}
            {isMenuOpen && !isAnimating && (
              <div>
                <svg key={`close-${animationKey}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`lg:w-8 lg:h-8 transition-colors ${isMenuOpen || isSearchOpen || isMenuHovered ? 'text-[#6125d6]' : 'text-white group-hover:text-[#6125d6]'}`}>
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"/>
                </svg>
              </div>
            )}

            {/* 关闭动画：叉子变横线 */}
            {isAnimating && animationType === 'closing' && (
              <div>
                <svg key={`close-new-${animationKey}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`lg:w-8 lg:h-8 transition-colors ${isMenuOpen || isSearchOpen || isMenuHovered ? 'text-[#6125d6]' : 'text-white group-hover:text-[#6125d6]'}`}>
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19">
                    <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19;M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19"/>
                  </path>
                </svg>
              </div>
            )}
          </button>
          {(isMenuOpen || isSearchOpen) ? (
            <button 
              onClick={handleLanguageToggle}
              style={{ width: '64px' }}
              className="ml-2 transition-colors group cursor-pointer flex items-center justify-center relative overflow-hidden h-[22px] lg:h-[32px]"
              onTouchStart={() => setIsLanguageHovered(true)}
              onTouchEnd={() => setTimeout(() => setIsLanguageHovered(false), 200)}
              onMouseDown={() => setIsLanguageHovered(true)}
              onMouseUp={() => setTimeout(() => setIsLanguageHovered(false), 200)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6 text-[#6125d6] transition-colors mr-1">
                <path fill="none" stroke="currentColor" strokeWidth="2" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11Zm0 0c3 0 4-5 4-11S15 1 12 1S8 6 8 12s1 11 4 11ZM2 16h20M2 8h20"/>
              </svg>
              <div className="relative h-5 w-8 overflow-hidden lg:h-7">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    className={`text-[#6125d6] text-sm font-medium transition-all duration-300 absolute ${
                      language === 'en' 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-full opacity-0'
                    }`}
                  >
                    中
                  </span>
                  <span 
                    className={`text-[#6125d6] text-sm font-medium transition-all duration-300 absolute ${
                      language === 'zh' 
                        ? 'translate-y-0 opacity-100' 
                        : '-translate-y-full opacity-0'
                    }`}
                  >
                    EN
                  </span>
                </div>
              </div>
            </button>
          ) : (
            <a 
              href="https://by.cuc.edu.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 group transition-all duration-300"
              onTouchStart={() => setIsCucHovered(true)}
              onTouchEnd={() => setTimeout(() => setIsCucHovered(false), 200)}
              onMouseDown={() => setIsCucHovered(true)}
              onMouseUp={() => setTimeout(() => setIsCucHovered(false), 200)}
            >
              <Image 
                src="https://assets.latentcat.com/e02ec885-539f-439a-be05-7fe82c49b790_w1526_h521.png" 
                alt="CUC" 
                width={64} 
                height={22} 
                className={`transition-all duration-300 absolute animate-fade-in ${
                  isCucHovered ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                }`}
                style={{
                  animation: 'fadeIn 1s ease-in-out'
                }}
              />
              <Image 
                src="https://assets.latentcat.com/5f5c72bf-6e45-4dfb-a728-7dd31ea14935_w1526_h521.png" 
                alt="CUC" 
                width={64} 
                height={22} 
                className={`transition-all duration-300 ${
                  isCucHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
            </a>
          )}
        </div>
      </div>

      {/* 手机版菜单 - 从上往下滑出，精确50%高度 */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ${
        (isMenuOpen || isSearchOpen) ? "translate-y-0" : "-translate-y-full"
      }`} style={{ zIndex: 95, height: '50vh' }}>
        <div className={`flex flex-col h-full px-12 space-y-3 transition-all duration-300 justify-center ${
          isScrolled ? 'pt-7' : 'pt-16'
        }`}>
          {isSearchOpen ? (
            // 搜索模式：显示搜索框
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={currentMenuTexts.searchPlaceholder}
                  className="w-full px-0 py-3 text-lg border-0 bg-transparent focus:outline-none rounded-none"
                  autoFocus
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#6125d6] transition-all duration-300 ${searchQuery ? 'w-full' : 'w-0'}`}></div>
              </div>
              <button className="p-2 text-[#6125d6] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </div>
          ) : (
            // 菜单模式：显示菜单按钮
            <>
              <button 
                onClick={() => handleMenuClick('research')}
                className={`text-2xl ${language === 'zh' ? 'font-extrabold' : 'font-black'} leading-tight transition-colors text-left ${
                  activeSection === 'research' ? 'text-[#6125d6]' : 'text-[#999999] hover:text-[#6125d6]'
                }`}
              >
                {currentMenuTexts.research}
              </button>
              <button 
                onClick={() => handleMenuClick('projects')}
                className={`text-2xl ${language === 'zh' ? 'font-extrabold' : 'font-black'} leading-tight transition-colors text-left ${
                  activeSection === 'projects' ? 'text-[#6125d6]' : 'text-[#999999] hover:text-[#6125d6]'
                }`}
              >
                {currentMenuTexts.projects}
              </button>
              <button 
                onClick={() => handleMenuClick('achievements')}
                className={`text-2xl ${language === 'zh' ? 'font-extrabold' : 'font-black'} leading-tight transition-colors text-left ${
                  activeSection === 'achievements' ? 'text-[#6125d6]' : 'text-[#999999] hover:text-[#6125d6]'
                }`}
              >
                {currentMenuTexts.achievements}
              </button>
              <button 
                onClick={() => handleMenuClick('talent')}
                className={`text-2xl ${language === 'zh' ? 'font-extrabold' : 'font-black'} leading-tight transition-colors text-left ${
                  activeSection === 'talent' ? 'text-[#6125d6]' : 'text-[#999999] hover:text-[#6125d6]'
                }`}
              >
                {currentMenuTexts.talent}
              </button>
              <button 
                onClick={() => handleMenuClick('about')}
                className={`text-2xl ${language === 'zh' ? 'font-extrabold' : 'font-black'} leading-tight transition-colors text-left ${
                  activeSection === 'about' ? 'text-[#6125d6]' : 'text-[#999999] hover:text-[#6125d6]'
                }`}
              >
                {currentMenuTexts.about}
              </button>
            </>
          )}
        </div>
      </div>

      {/* PC版菜单 - 从右侧滑出 */}
      <div className={`hidden lg:block fixed top-0 right-0 h-full w-[50%] bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ${
        (isMenuOpen || isSearchOpen) ? "translate-x-0" : "translate-x-full"
      }`} style={{ zIndex: 95 }}>
        <div className="flex flex-col justify-center h-full px-12 space-y-6">
          {isSearchOpen ? (
            // 搜索模式：显示搜索框
            <div className="flex items-center space-x-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={currentMenuTexts.searchPlaceholder}
                  className="w-full px-0 py-4 text-2xl border-0 bg-transparent focus:outline-none rounded-none"
                  autoFocus
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300"></div>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#6125d6] transition-all duration-300 ${searchQuery ? 'w-full' : 'w-0'}`}></div>
              </div>
              <button className="p-3 text-[#6125d6] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </div>
          ) : (
            // 菜单模式：显示菜单按钮
            <>
              <button 
                onClick={() => handleMenuClick('research')}
                className={`text-4xl ${language === 'zh' ? 'font-extrabold' : 'font-black'} leading-relaxed transition-colors text-left ${
                  activeSection === 'research' ? 'text-[#6125d6]' : 'text-[#999999] hover:text-[#6125d6]'
                }`}
              >
                {currentMenuTexts.research}
              </button>
              <button 
                onClick={() => handleMenuClick('projects')}
                className={`text-4xl ${language === 'zh' ? 'font-extrabold' : 'font-black'} leading-relaxed transition-colors text-left ${
                  activeSection === 'projects' ? 'text-[#6125d6]' : 'text-[#999999] hover:text-[#6125d6]'
                }`}
              >
                {currentMenuTexts.projects}
              </button>
              <button 
                onClick={() => handleMenuClick('achievements')}
                className={`text-4xl ${language === 'zh' ? 'font-extrabold' : 'font-black'} leading-relaxed transition-colors text-left ${
                  activeSection === 'achievements' ? 'text-[#6125d6]' : 'text-[#999999] hover:text-[#6125d6]'
                }`}
              >
                {currentMenuTexts.achievements}
              </button>
              <button 
                onClick={() => handleMenuClick('talent')}
                className={`text-4xl ${language === 'zh' ? 'font-extrabold' : 'font-black'} leading-relaxed transition-colors text-left ${
                  activeSection === 'talent' ? 'text-[#6125d6]' : 'text-[#999999] hover:text-[#6125d6]'
                }`}
              >
                {currentMenuTexts.talent}
              </button>
              <button 
                onClick={() => handleMenuClick('about')}
                className={`text-4xl ${language === 'zh' ? 'font-extrabold' : 'font-black'} leading-relaxed transition-colors text-left ${
                  activeSection === 'about' ? 'text-[#6125d6]' : 'text-[#999999] hover:text-[#6125d6]'
                }`}
              >
                {currentMenuTexts.about}
              </button>
            </>
          )}
        </div>
      </div>

      {/* 菜单遮罩 */}
      {(isMenuOpen || isSearchOpen) && (
        <div 
          className="fixed inset-0 bg-black/20" 
          style={{ zIndex: 85 }}
          onClick={() => {
            setIsMenuOpen(false)
            setIsSearchOpen(false)
            setSearchQuery('')
            clearHighlights()
          }} 
        />
      )}
    </>
  )
}
