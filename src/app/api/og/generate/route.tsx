import { ImageResponse } from "next/og";
import { baseURL, person } from "@/resources";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Portfolio";

  async function loadGoogleFont(font: string) {
    const fontUrl = `https://fonts.googleapis.com/css2?family=${font}`;
    const css = await (await fetch(fontUrl)).text();
    const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);

    if (match) {
      const res = await fetch(match[1]);
      if (res.ok) return await res.arrayBuffer();
    }

    throw new Error("Failed to load font");
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: 1280,
          height: 720,
          display: "flex",
          flexDirection: "column",
          padding: 80,
          background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
          color: "white",
          fontFamily: "Geist, Arial, sans-serif",
        }}
      >
        {/* Title Block */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 60,
          }}
        >
          {title}
        </div>

        {/* Profile Block */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 64,
          }}
        >
          <img
            src={baseURL + person.avatar}
            alt={`${person.name}'s avatar`}
            style={{
              width: 192,
              height: 192,
              objectFit: "cover",
              borderRadius: "50%",
              border: "5px solid white",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
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
                backgroundColor: "#262626",
                padding: "8px 16px",
                borderRadius: 8,
                display: "inline-block",
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
          name: "Geist",
          data: await loadGoogleFont("Geist:wght@400"),
          style: "normal",
        },
      ],
    }
  );
}
