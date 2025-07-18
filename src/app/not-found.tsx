import Link from 'next/link'
import { Search, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #A8D5D0 0%, #5BBCB6 100%)'}}>
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* 装飾的な背景要素 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-20" style={{background: '#F6E96B'}}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full opacity-15" style={{background: '#2D5A5A'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #F6E96B 0%, transparent 70%)'}}></div>
        </div>

        <div className="relative z-10">
          {/* 404イラスト */}
          <div className="mb-8 pt-12">
            <div className="text-9xl font-bold mb-4" style={{color: '#2D5A5A'}}>404</div>
            <div className="w-24 h-1 mx-auto rounded-full" style={{background: '#F6E96B'}}></div>
          </div>

          {/* メッセージ */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#2D5A5A'}}>
              ページが見つかりません
            </h1>
            <p className="text-lg mb-8" style={{color: '#2D5A5A', opacity: 0.8}}>
              お探しのページは存在しないか、移動または削除された可能性があります。<br />
              URLをご確認いただくか、以下のリンクから目的のページをお探しください。
            </p>

            {/* アクションボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 font-bold rounded-lg hover:scale-105 transition-all shadow-lg"
                style={{backgroundColor: '#F6E96B', color: '#2D5A5A'}}
              >
                <Home className="w-5 h-5 mr-2" />
                ホームに戻る
              </Link>
              <Link
                href="/sitemap"
                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm font-medium rounded-lg hover:bg-white/90 transition-colors border border-white/50"
                style={{color: '#2D5A5A'}}
              >
                <Search className="w-5 h-5 mr-2" />
                サイトマップを見る
              </Link>
            </div>
          </div>

          {/* 余白を追加 */}
          <div className="mt-12"></div>
        </div>
      </div>
    </div>
  )
}