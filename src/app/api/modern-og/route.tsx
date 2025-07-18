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
          {/* グリッドベースのモダンデザイン */}
          
          {/* 左上: 大きな円と小さな要素 */}
          <div
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              width: '300px',
              height: '210px',
              background: '#2D5A5A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: '#5BBCB6',
              }}
            />
            {/* ドットパターン */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#A8D5D0' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#A8D5D0' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#A8D5D0' }} />
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#A8D5D0' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#A8D5D0' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#A8D5D0' }} />
              </div>
            </div>
          </div>

          {/* 右上: イエローセクション with 三角形 */}
          <div
            style={{
              position: 'absolute',
              right: '0px',
              top: '0px',
              width: '400px',
              height: '210px',
              background: '#F6E96B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* 大きな三角形 */}
            <div
              style={{
                width: '0',
                height: '0',
                borderLeft: '60px solid transparent',
                borderRight: '60px solid transparent',
                borderBottom: '100px solid #2D5A5A',
              }}
            />
            {/* 小さな円 */}
            <div
              style={{
                position: 'absolute',
                top: '30px',
                left: '50px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#5BBCB6',
              }}
            />
          </div>

          {/* 中央左: ターコイズセクション */}
          <div
            style={{
              position: 'absolute',
              left: '300px',
              top: '0px',
              width: '500px',
              height: '210px',
              background: '#5BBCB6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            {/* 矢印的な形状 */}
            <div
              style={{
                width: '0',
                height: '0',
                borderTop: '30px solid transparent',
                borderBottom: '30px solid transparent',
                borderLeft: '50px solid #F6E96B',
              }}
            />
            {/* 半円 */}
            <div
              style={{
                width: '80px',
                height: '40px',
                borderRadius: '80px 80px 0 0',
                background: '#A8D5D0',
              }}
            />
            {/* 小さな四角 */}
            <div
              style={{
                width: '40px',
                height: '40px',
                background: '#2D5A5A',
                transform: 'rotate(45deg)',
              }}
            />
          </div>

          {/* 下部左: ライトティールセクション */}
          <div
            style={{
              position: 'absolute',
              left: '0px',
              bottom: '0px',
              width: '400px',
              height: '420px',
              background: '#A8D5D0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '30px',
            }}
          >
            {/* 大きな円弧 */}
            <div
              style={{
                width: '150px',
                height: '75px',
                borderRadius: '150px 150px 0 0',
                background: '#5BBCB6',
              }}
            />
            {/* 円 */}
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '3px solid #2D5A5A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#F6E96B',
                }}
              />
            </div>
          </div>

          {/* 下部右: ダークセクション */}
          <div
            style={{
              position: 'absolute',
              right: '0px',
              bottom: '0px',
              width: '800px',
              height: '420px',
              background: '#2D5A5A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            {/* ジグザグライン */}
            <div
              style={{
                width: '60px',
                height: '3px',
                background: '#F6E96B',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '10px',
                  width: '40px',
                  height: '3px',
                  background: '#F6E96B',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '30px',
                  left: '20px',
                  width: '30px',
                  height: '3px',
                  background: '#F6E96B',
                }}
              />
            </div>

            {/* 円とプラス記号 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#5BBCB6',
                }}
              />
              <div
                style={{
                  width: '30px',
                  height: '6px',
                  background: '#A8D5D0',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '12px',
                    width: '6px',
                    height: '30px',
                    background: '#A8D5D0',
                  }}
                />
              </div>
            </div>

            {/* ドットグリッド */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A8D5D0', opacity: 0.7 }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A8D5D0', opacity: 0.7 }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A8D5D0', opacity: 0.7 }} />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A8D5D0', opacity: 0.7 }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A8D5D0', opacity: 0.7 }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A8D5D0', opacity: 0.7 }} />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A8D5D0', opacity: 0.7 }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A8D5D0', opacity: 0.7 }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A8D5D0', opacity: 0.7 }} />
              </div>
            </div>

            {/* 幾何学的な形状 */}
            <div
              style={{
                width: '0',
                height: '0',
                borderLeft: '40px solid #A8D5D0',
                borderTop: '40px solid transparent',
                borderBottom: '40px solid transparent',
              }}
            />
          </div>

          {/* 中央のアクセント要素 */}
          <div
            style={{
              position: 'absolute',
              left: '500px',
              top: '250px',
              width: '200px',
              height: '130px',
              background: '#F6E96B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '0',
                height: '0',
                borderLeft: '30px solid transparent',
                borderRight: '30px solid transparent',
                borderBottom: '50px solid #2D5A5A',
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
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}