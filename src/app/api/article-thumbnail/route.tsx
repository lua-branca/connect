import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'ブログ記事'
    const category = searchParams.get('category') || 'BLOG'
    const excerpt = searchParams.get('excerpt') || ''

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(135deg, #F8FFFE 0%, #E8F5F5 100%)',
            position: 'relative',
            padding: '80px',
          }}
        >
          {/* 背景の装飾要素 */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '400px',
              height: '400px',
              background: '#5BBCB6',
              borderRadius: '50%',
              opacity: 0.1,
              transform: 'translate(200px, -200px)',
            }}
          />
          
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '300px',
              height: '300px',
              background: '#F6E96B',
              borderRadius: '50%',
              opacity: 0.15,
              transform: 'translate(-150px, 150px)',
            }}
          />

          {/* カテゴリバッジ */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                background: '#2D5A5A',
                color: '#F6E96B',
                padding: '12px 24px',
                borderRadius: '25px',
                fontSize: '24px',
                fontWeight: 'bold',
                letterSpacing: '2px',
              }}
            >
              {category.toUpperCase()}
            </div>
          </div>

          {/* タイトル */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#2D5A5A',
              lineHeight: '1.1',
              marginBottom: '30px',
              maxWidth: '900px',
            }}
          >
            {title}
          </div>

          {/* 概要 */}
          {excerpt && (
            <div
              style={{
                fontSize: '32px',
                color: '#5BBCB6',
                lineHeight: '1.4',
                maxWidth: '800px',
                marginBottom: '40px',
              }}
            >
              {excerpt.length > 120 ? excerpt.substring(0, 120) + '...' : excerpt}
            </div>
          )}

          {/* ブランドロゴ・サイト名 */}
          <div
            style={{
              position: 'absolute',
              bottom: '80px',
              right: '80px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                background: '#2D5A5A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  background: '#F6E96B',
                  borderRadius: '50%',
                }}
              />
            </div>
            <div
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#2D5A5A',
              }}
            >
              LUA BRANCA
            </div>
          </div>

          {/* 装飾的なアクセント */}
          <div
            style={{
              position: 'absolute',
              top: '80px',
              right: '80px',
              width: '100px',
              height: '4px',
              background: '#5BBCB6',
            }}
          />
          
          <div
            style={{
              position: 'absolute',
              top: '100px',
              right: '120px',
              width: '60px',
              height: '4px',
              background: '#F6E96B',
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
    console.log(`${e instanceof Error ? e.message : "Unknown error"}`)
    return new Response(`Failed to generate thumbnail`, {
      status: 500,
    })
  }
}