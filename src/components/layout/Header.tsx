'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: 'サービス', href: '/services' },
    { name: '更新情報', href: '/updates' },
    { name: 'プロフィール', href: '/profile' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
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

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 検索・メニューボタン */}
          <div className="flex items-center space-x-4">
            {/* 検索ボタン */}
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="検索"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* モバイルメニューボタン */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
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