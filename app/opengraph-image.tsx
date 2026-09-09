import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Small software for specific problems.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const RUST = "#BE5215";
const PAPER = "#FFFFFF";

/** Archivo, straight from Google's static host, so the card matches the site. */
async function archivo(weight: 400 | 600): Promise<ArrayBuffer | null> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Archivo:wght@${weight}`,
    { headers: { "User-Agent": "Mozilla/5.0" } },
  ).then((r) => (r.ok ? r.text() : null));
  const url = css?.match(/src:\s*url\((https:[^)]+)\)/)?.[1];
  if (!url) return null;
  const res = await fetch(url);
  return res.ok ? res.arrayBuffer() : null;
}

export default async function Image() {
  const mark = await readFile(path.join(process.cwd(), "public/mark-512.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  // The mark is solid rust, so it needs a paper tile to read on the rust field.
  const [regular, semibold] = await Promise.all([
    archivo(400).catch(() => null),
    archivo(600).catch(() => null),
  ]);

  const fonts = [
    regular && { name: "Archivo", data: regular, weight: 400 as const, style: "normal" as const },
    semibold && { name: "Archivo", data: semibold, weight: 600 as const, style: "normal" as const },
  ].filter((f) => f !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: RUST,
          padding: 80,
          fontFamily: fonts.length ? "Archivo" : undefined,
          color: PAPER,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 132,
            height: 132,
            borderRadius: 26,
            backgroundColor: PAPER,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={markSrc} width={84} height={82} alt="" />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em", opacity: 0.85 }}>
            Gooder Software LLC
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginTop: 18,
            }}
          >
            Small software for specific problems.
          </div>
        </div>
      </div>
    ),
    { ...size, ...(fonts.length ? { fonts } : {}) },
  );
}
