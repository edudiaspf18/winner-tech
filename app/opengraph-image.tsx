import { ImageResponse } from "next/og";
import { W_MARK_ASPECT, W_MARK_PATH, W_MARK_VIEWBOX } from "@/lib/brand";

export const alt = "Winner Tech — sistemas e sites para quem opera";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#07090f",
          color: "#f5f7ff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg
            width={72}
            height={Math.round(72 / W_MARK_ASPECT)}
            viewBox={W_MARK_VIEWBOX}
          >
            <path fill="#ffffff" fillRule="evenodd" d={W_MARK_PATH} />
          </svg>
          <span style={{ fontSize: 28, fontWeight: 600 }}>Winner Tech</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
            Fazemos o sistema e o site do seu negócio.
          </div>
          <div style={{ fontSize: 26, color: "#b4bcd0" }}>
            Zelo · Alfa · Lume · Laço
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
