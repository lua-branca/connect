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
            backgroundColor: '#A8D5D0',
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <div style={{ marginBottom: 20, color: '#2D5A5A' }}>
            LUA BLANCA CONNECT
          </div>
          <div style={{ fontSize: 20, color: '#5BBCB6' }}>
            Test Image
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