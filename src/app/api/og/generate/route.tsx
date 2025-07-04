import { ImageResponse } from 'next/og';
import { baseURL, person } from '@/resources';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get('title') || 'Portfolio';
  const tag = url.searchParams.get('tag') || 'Case Study';
  const emoji = url.searchParams.get('emoji') || '🚀';

  async function loadGoogleFont(font: string) {
    const fontUrl = `https://fonts.googleapis.com/css2?family=${font}`;
    const css = await (await fetch(fontUrl)).text();
    const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);

    if (match) {
      const res = await fetch(match[1]);
      if (res.ok) return await res.arrayBuffer();
    }

    throw new Error('Failed to load font');
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: 1280,
          height: 720,
          background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)',
          color: 'white',
          fontFamily: 'Geist, Arial, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          padding: 80,
          position: 'relative',
        }}
      >
        {/* Tag Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            backgroundColor: '#ff004c',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 999,
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          {emoji} {tag}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            marginBottom: 60,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>

        {/* Avatar and Info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 64,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={baseURL + person.avatar}
            alt={`${person.name}'s avatar`}
            style={{
              width: 192,
              height: 192,
              objectFit: 'cover',
              borderRadius: '50%',
              border: '5px solid white',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div
              style={{
                fontSize: 64,
                fontWeight: 600,
              }}
            >
              {person.name}
            </div>
            <div
              style={{
                fontSize: 36,
                opacity: 0.7,
                backgroundColor: '#262626',
                padding: '8px 16px',
                borderRadius: 8,
                display: 'inline-block',
              }}
            >
              {person.role}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 720,
      fonts: [
        {
          name: 'Geist',
          data: await loadGoogleFont('Geist:wght@400'),
          style: 'normal',
        },
      ],
    }
  );
}
