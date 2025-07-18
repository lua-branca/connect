import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Instagram, Youtube, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'サイト',
      links: [
        { name: 'ホーム', href: '/' },
        { name: 'サービス', href: '/services' },
        { name: '更新情報', href: '/updates' },
        { name: 'プロフィール', href: '/profile' },
        { name: 'お問い合わせ', href: '/contact' },
      ],
    },
    {
      title: 'サービス',
      links: [
        { name: 'AI活用コンサルティング', href: '/services#ai-consulting' },
        { name: 'AIマーケティング戦略', href: '/services#ai-marketing' },
        { name: 'AI活用地方生産者支援', href: '/services#producer-support' },
      ],
    },
  ]

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/lua_branca',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/lua_branca',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@lua_branca',
      icon: Youtube,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/lua_branca',
      icon: Github,
    },
  ]

  return (
    <footer style={{backgroundColor: '#2D5A5A'}} className="text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* メインフッターコンテンツ */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* ブランド・説明 */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="LUA BLANCA CONNECT Logo" 
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold" style={{color: '#A8D5D0'}}>
                    LUA BLANCA
                  </span>
                  <span className="text-xs font-medium tracking-widest" style={{color: '#5BBCB6'}}>
                    CONNECT
                  </span>
                </div>
              </div>
              <p className="mb-6 max-w-md" style={{color: '#A8D5D0', opacity: 0.8}}>
                ビジネスの困りごとをAIでスピーディに解決し、
                継続的に自社でAI活用できる体制を構築するコンサルティングサービスです。
              </p>

              {/* SNSリンク */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-colors rounded-lg hover:bg-opacity-10"
                      style={{color: '#A8D5D0'}}
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* ナビゲーションリンク */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{color: '#F6E96B'}}>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="transition-colors text-sm hover:underline"
                        style={{color: '#A8D5D0'}}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* フッター下部 */}
        <div className="py-6" style={{borderTop: '1px solid rgba(168, 213, 208, 0.2)'}}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-sm" style={{color: '#A8D5D0', opacity: 0.8}}>
              © {currentYear} LUA BLANCA CONNECT. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm">
                <Link
                  href="/privacy"
                  className="transition-colors hover:underline"
                  style={{color: '#A8D5D0'}}
                >
                  プライバシーポリシー
                </Link>
                <Link
                  href="/terms"
                  className="transition-colors hover:underline"
                  style={{color: '#A8D5D0'}}
                >
                  利用規約
                </Link>
                <Link
                  href="/sitemap"
                  className="transition-colors hover:underline"
                  style={{color: '#A8D5D0'}}
                >
                  サイトマップ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer