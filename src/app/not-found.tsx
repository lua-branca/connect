import Link from 'next/link'
import { Search, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* 404イラスト */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* メッセージ */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ページが見つかりません
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          お探しのページは存在しないか、移動または削除された可能性があります。
          URLをご確認いただくか、以下のリンクから目的のページをお探しください。
        </p>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            ホームに戻る
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors shadow-lg"
          >
            <Search className="w-5 h-5 mr-2" />
            ブログを探す
          </Link>
        </div>

        {/* 人気のページ */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">人気のページ</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/services"
              className="group p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                サービス一覧
              </h3>
              <p className="text-sm text-gray-600">
                AI活用コンサルティングなど3つのサービス
              </p>
            </Link>
            <Link
              href="/profile"
              className="group p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                プロフィール
              </h3>
              <p className="text-sm text-gray-600">
                経験と専門性について詳しく
              </p>
            </Link>
            <Link
              href="/blog"
              className="group p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                ブログ
              </h3>
              <p className="text-sm text-gray-600">
                AI技術とビジネスに関する情報
              </p>
            </Link>
            <Link
              href="/contact"
              className="group p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                お問い合わせ
              </h3>
              <p className="text-sm text-gray-600">
                ご相談・お問い合わせはこちら
              </p>
            </Link>
          </div>
        </div>

        {/* 戻るリンク */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}