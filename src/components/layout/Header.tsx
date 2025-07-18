'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: 'サービス', href: '/services' },
    { name: 'プロフィール', href: '/profile' },
    { name: '更新情報', href: '/updates' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* ロゴ/サイトタイトル */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/logo.png" 
                alt="LUA BLANCA CONNECT Logo" 
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight" style={{color: '#2D5A5A'}}>
                  LUA BLANCA
                </span>
                <span className="text-xs font-medium tracking-widest" style={{color: '#5BBCB6'}}>
                  CONNECT
                </span>
              </div>
            </Link>
          </div>

          {/* デスクトップナビゲーション - 右寄せ */}
          <nav className="hidden md:flex md:items-center md:space-x-8 md:ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-bold transition-all duration-300 ease-in-out hover:scale-105 group"
                style={{color: '#2D5A5A'}}
              >
                {item.name}
                {/* アンダーラインアニメーション */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full" style={{backgroundColor: '#F6E96B'}}></span>
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン - 右端 */}
          <div className="md:hidden ml-auto">
            <button
              type="button"
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gray-100"
              style={{color: '#2D5A5A'}}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-bold rounded-md transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-md"
                  style={{
                    color: '#2D5A5A',
                    animationDelay: `${index * 50}ms`
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header