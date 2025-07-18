import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'LUA BLANCA CONNECT'
    const category = searchParams.get('category') || 'AI活用事例'
    const date = searchParams.get('date') || ''

    // カテゴリ別のグラデーション
    const getGradient = (category: string) => {
      switch (category) {
        case 'AI活用事例':
          return 'linear-gradient(135deg, #A8D5D0 0%, #5BBCB6 50%, #2D5A5A 100%)'
        case 'AIマーケティング':
          return 'linear-gradient(135deg, #E0F2F1 0%, #A8D5D0 50%, #5BBCB6 100%)'
        case '活用ティップス':
          return 'linear-gradient(135deg, #F0FFFE 0%, #E0F2F1 50%, #A8D5D0 100%)'
        default:
          return 'linear-gradient(135deg, #A8D5D0 0%, #5BBCB6 100%)'
      }
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            background: getGradient(category),
            padding: '50px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* 背景の抽象的な形状 */}
          <div
            style={{
              position: 'absolute',
              left: '80px',
              top: '80px',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: '#F6E96B',
              opacity: 0.3,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '300px',
              top: '200px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: '#E0F2F1',
              opacity: 0.5,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '500px',
              top: '300px',
              width: '80px',
              height: '80px',
              background: '#5BBCB6',
              opacity: 0.2,
              transform: 'rotate(45deg)',
            }}
          />

          {/* 微細なドットパターン */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(45, 90, 90, 0.1) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(245, 230, 107, 0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          {/* メインコンテンツエリア */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1,
            }}
          >
            {/* ヘッダーロゴ */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '30px',
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'rgba(45, 90, 90, 0.9)',
                  marginRight: '15px',
                }}
              >
                LUA BLANCA
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'rgba(91, 188, 182, 0.8)',
                  letterSpacing: '2px',
                }}
              >
                CONNECT
              </div>
            </div>

            {/* カテゴリバッジ */}
            <div
              style={{
                backgroundColor: 'rgba(224, 242, 241, 0.9)',
                color: '#2D5A5A',
                padding: '6px 14px',
                borderRadius: '15px',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '20px',
                display: 'block',
              }}
            >
              {category}
            </div>
          </div>

          {/* フッター */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
              zIndex: 1,
            }}
          >
            <div
              style={{
                fontSize: '14px',
                color: 'rgba(45, 90, 90, 0.7)',
              }}
            >
              AI活用で課題をスピーディに解決
            </div>
            {date && (
              <div
                style={{
                  fontSize: '14px',
                  color: 'rgba(45, 90, 90, 0.6)',
                }}
              >
                {date}
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}