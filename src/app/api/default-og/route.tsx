import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #A8D5D0 0%, #5BBCB6 50%, #2D5A5A 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* 背景の抽象的な形状 - 文字なし */}
          <div
            style={{
              position: 'absolute',
              left: '100px',
              top: '100px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: '#F6E96B',
              opacity: 0.3,
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: '150px',
              top: '200px',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: '#E0F2F1',
              opacity: 0.4,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '300px',
              bottom: '150px',
              width: '120px',
              height: '120px',
              background: '#5BBCB6',
              opacity: 0.25,
              transform: 'rotate(45deg)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: '80px',
              bottom: '80px',
              width: '100px',
              height: '100px',
              background: '#2D5A5A',
              opacity: 0.2,
              transform: 'rotate(30deg)',
            }}
          />

          {/* 中央の大きな円形要素 */}
          <div
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245, 230, 107, 0.3) 0%, rgba(224, 242, 241, 0.2) 50%, transparent 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* 内側の小さな図形 */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#F6E96B',
                opacity: 0.6,
              }}
            />
          </div>

          {/* 微細なドットパターン */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(45, 90, 90, 0.1) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(245, 230, 107, 0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* 装飾的なライン */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '10%',
              width: '30px',
              height: '2px',
              background: '#5BBCB6',
              opacity: 0.4,
              transform: 'rotate(45deg)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '30%',
              right: '20%',
              width: '40px',
              height: '2px',
              background: '#F6E96B',
              opacity: 0.5,
              transform: 'rotate(-30deg)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}