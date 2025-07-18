import Link from 'next/link'
import { Metadata } from 'next'
import { Home, Briefcase, FileText, User, Mail, Shield, ScrollText, Map } from 'lucide-react'

export const metadata: Metadata = {
  title: 'サイトマップ | LUA BLANCA CONNECT',
  description: 'LUA BLANCA CONNECTの全ページを一覧で確認できます。',
}

export default function Sitemap() {
  const pages = [
    {
      category: 'メインページ',
      icon: Home,
      color: '#2D5A5A',
      items: [
        { name: 'ホーム', href: '/', description: 'LUA BLANCA CONNECTのトップページ' },
        { name: 'サービス', href: '/services', description: 'AI活用コンサルティングサービスのご紹介' },
        { name: 'プロフィール', href: '/profile', description: '代表者の経歴と実績' },
        { name: 'お問い合わせ', href: '/contact', description: 'サービスに関するお問い合わせ' },
      ]
    },
    {
      category: '更新情報',
      icon: FileText,
      color: '#5BBCB6',
      items: [
        { name: '更新情報一覧', href: '/updates', description: 'AI活用の最新情報やお役立ち記事' },
        { name: 'カテゴリ別記事', href: '/updates/category', description: 'カテゴリ別の記事一覧' },
        { name: 'タグ別記事', href: '/updates/tag', description: 'タグ別の記事一覧' },
      ]
    },
    {
      category: 'サービス詳細',
      icon: Briefcase,
      color: '#F6E96B',
      items: [
        { name: 'AI活用コンサルティング', href: '/services#ai-consulting', description: 'AI技術導入の戦略立案から実行まで' },
        { name: 'AIマーケティング戦略', href: '/services#ai-marketing', description: 'AIを活用したマーケティング戦略' },
        { name: 'AI活用地方生産者支援', href: '/services#producer-support', description: '地方生産者向けAI活用支援' },
      ]
    },
    {
      category: '法的情報',
      icon: Shield,
      color: '#2D5A5A',
      items: [
        { name: 'プライバシーポリシー', href: '/privacy', description: '個人情報保護方針' },
        { name: '利用規約', href: '/terms', description: 'サービス利用規約' },
        { name: 'サイトマップ', href: '/sitemap', description: 'サイト全体の構造' },
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#2D5A5A'}}>
            サイトマップ
          </h1>
          <p className="text-lg" style={{color: '#2D5A5A', opacity: 0.8}}>
            LUA BLANCA CONNECTの全ページを一覧で確認できます。
          </p>
        </div>

        {/* ページカテゴリ */}
        <div className="grid md:grid-cols-2 gap-8">
          {pages.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.category} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                      style={{backgroundColor: `${category.color}20`}}
                    >
                      <Icon className="w-6 h-6" style={{color: category.color}} />
                    </div>
                    <h2 className="text-xl font-bold" style={{color: '#2D5A5A'}}>
                      {category.category}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                        style={{borderColor: `${category.color}20`}}
                      >
                        <h3 className="font-semibold mb-2" style={{color: category.color}}>
                          {item.name}
                        </h3>
                        <p className="text-sm" style={{color: '#2D5A5A', opacity: 0.8}}>
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 階層構造表示 */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6" style={{color: '#2D5A5A'}}>
            サイト構造
          </h2>
          <div className="space-y-4">
            <div className="font-mono text-sm" style={{color: '#2D5A5A'}}>
              <div className="mb-2">├── <Link href="/" className="hover:underline" style={{color: '#5BBCB6'}}>/ (ホーム)</Link></div>
              <div className="mb-2">├── <Link href="/services" className="hover:underline" style={{color: '#5BBCB6'}}>/services (サービス)</Link></div>
              <div className="mb-2">├── <Link href="/profile" className="hover:underline" style={{color: '#5BBCB6'}}>/profile (プロフィール)</Link></div>
              <div className="mb-2">├── <Link href="/contact" className="hover:underline" style={{color: '#5BBCB6'}}>/contact (お問い合わせ)</Link></div>
              <div className="mb-2">├── <Link href="/updates" className="hover:underline" style={{color: '#5BBCB6'}}>/updates (更新情報)</Link></div>
              <div className="mb-2 pl-4">│   ├── /updates/category/[slug] (カテゴリ別記事)</div>
              <div className="mb-2 pl-4">│   ├── /updates/tag/[slug] (タグ別記事)</div>
              <div className="mb-2 pl-4">│   └── /updates/[slug] (個別記事)</div>
              <div className="mb-2">├── <Link href="/privacy" className="hover:underline" style={{color: '#5BBCB6'}}>/privacy (プライバシーポリシー)</Link></div>
              <div className="mb-2">├── <Link href="/terms" className="hover:underline" style={{color: '#5BBCB6'}}>/terms (利用規約)</Link></div>
              <div className="mb-2">└── <Link href="/sitemap" className="hover:underline" style={{color: '#5BBCB6'}}>/sitemap (サイトマップ)</Link></div>
            </div>
          </div>
        </div>

        {/* お問い合わせ */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
              お探しのページが見つかりませんか？
            </h2>
            <p className="mb-6" style={{color: '#2D5A5A', opacity: 0.8}}>
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors text-white shadow-lg hover:shadow-xl"
              style={{backgroundColor: '#5BBCB6'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}