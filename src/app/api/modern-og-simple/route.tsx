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
            background: '#F8FFFE',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* 左上: ダークティールセクション */}
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              width: '400px',
              height: '315px',
              background: '#2D5A5A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: '#5BBCB6',
              }}
            />
          </div>

          {/* 右上: イエローセクション */}
          <div
            style={{
              position: 'absolute',
              right: '0',
              top: '0',
              width: '800px',
              height: '315px',
              background: '#F6E96B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            {/* 三角形 */}
            <div
              style={{
                width: '0',
                height: '0',
                borderLeft: '60px solid transparent',
                borderRight: '60px solid transparent',
                borderBottom: '120px solid #2D5A5A',
              }}
            />
            
            {/* 四角形 */}
            <div
              style={{
                width: '80px',
                height: '80px',
                background: '#5BBCB6',
                transform: 'rotate(45deg)',
              }}
            />
            
            {/* 半円 */}
            <div
              style={{
                width: '100px',
                height: '50px',
                borderRadius: '100px 100px 0 0',
                background: '#A8D5D0',
              }}
            />
          </div>

          {/* 下部左: ライトティールセクション */}
          <div
            style={{
              position: 'absolute',
              left: '0',
              bottom: '0',
              width: '600px',
              height: '315px',
              background: '#A8D5D0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            {/* 大きな円 */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: '#5BBCB6',
              }}
            />
            
            {/* プラス記号 */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  width: '60px',
                  height: '8px',
                  background: '#2D5A5A',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '-26px',
                  left: '26px',
                  width: '8px',
                  height: '60px',
                  background: '#2D5A5A',
                }}
              />
            </div>
          </div>

          {/* 下部右: ターコイズセクション */}
          <div
            style={{
              position: 'absolute',
              right: '0',
              bottom: '0',
              width: '600px',
              height: '315px',
              background: '#5BBCB6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            {/* ドットパターン */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F6E96B' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F6E96B' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F6E96B' }} />
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F6E96B' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F6E96B' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F6E96B' }} />
              </div>
            </div>

            {/* 矢印 */}
            <div
              style={{
                width: '0',
                height: '0',
                borderTop: '40px solid transparent',
                borderBottom: '40px solid transparent',
                borderLeft: '80px solid #2D5A5A',
              }}
            />

            {/* 小さな円 */}
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#A8D5D0',
              }}
            />
          </div>

          {/* 中央のアクセント */}
          <div
            style={{
              position: 'absolute',
              left: '450px',
              top: '200px',
              width: '300px',
              height: '230px',
              background: 'rgba(224, 242, 241, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '0',
                height: '0',
                borderLeft: '50px solid transparent',
                borderRight: '50px solid transparent',
                borderBottom: '80px solid #F6E96B',
              }}
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : "Unknown error"}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}