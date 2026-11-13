import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#142D46",
          position: "relative",
        }}
      >
        {/* Soft background radial teal-bright glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(76, 195, 187, 0.22) 0%, rgba(20, 45, 70, 0) 70%)",
          }}
        />

        {/* Top Header: Logo mark + Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Capped-A Logo Mark from logo_mark_white.svg */}
          <svg
            width="58"
            height="70"
            viewBox="8.56 2.27 49.93 59.73"
            fill="none"
          >
            <path
              d="M30.82 4.27 L10.56 18.08 L24.34 19.60 L25.72 25.12 L27.52 25.46 L28.41 25.58 L29.29 25.66 L31.02 25.73 L32.72 25.67 L33.56 25.58 L35.21 25.31 L36.02 25.13 L37.62 24.66 L38.41 24.37 L39.19 24.05 L40.72 23.31 L42.22 22.44 L42.96 21.95 L43.69 21.43 L45.12 20.28 L43.74 14.76 L55.20 6.95Z M47.54 58.72 L47.72 58.95 L48.15 59.36 L48.64 59.67 L49.19 59.89 L49.48 59.95 L50.06 60.00 L50.65 59.93 L51.21 59.75 L51.47 59.62 L51.95 59.28 L52.36 58.85 L52.67 58.36 L52.80 58.09 L52.95 57.52 L53.00 56.94 L52.93 56.35 L52.75 55.79 L39.35 25.28 L37.99 25.80 L36.34 26.29 L34.61 26.64 L33.46 26.80 L47.25 58.21Z M11.07 56.35 L11.00 56.94 L11.01 57.23 L11.11 57.81 L11.33 58.36 L11.64 58.85 L12.05 59.28 L12.53 59.62 L12.79 59.75 L13.35 59.93 L13.94 60.00 L14.52 59.95 L14.81 59.89 L15.09 59.80 L15.61 59.53 L16.08 59.17 L16.46 58.72 L16.75 58.21 L30.48 26.92 L29.22 26.86 L28.25 26.77 L27.32 26.64 L25.47 26.30 L25.13 26.17 L24.93 26.03 L24.69 25.75 L24.57 25.47 L11.25 55.79Z"
              fill="#FFFFFF"
            />
            <path
              d="M52.40 9.38 L52.23 9.07 L52.07 8.90 L51.88 8.76 L51.67 8.66 L51.44 8.60 L51.09 8.60 L50.86 8.66 L50.65 8.76 L50.38 8.98 L50.24 9.17 L50.14 9.38 L50.07 9.73 L50.10 10.08 L52.43 19.41 L52.17 19.71 L52.04 19.90 L51.84 20.33 L51.72 20.78 L51.70 21.02 L51.72 21.49 L51.83 21.94 L52.04 22.37 L52.32 22.75 L52.66 23.06 L53.07 23.31 L53.51 23.47 L53.98 23.54 L54.45 23.51 L54.90 23.40 L55.33 23.20 L55.71 22.92 L56.02 22.57 L56.26 22.17 L56.42 21.72 L56.49 21.26 L56.47 20.79 L56.36 20.33 L56.27 20.11 L56.16 19.91 L55.88 19.53 L55.53 19.21 L55.33 19.08 L55.12 18.97 L54.76 18.83Z M52.11 40.79 L52.64 40.51 L53.10 40.15 L53.47 39.70 L53.76 39.18 L53.86 38.91 L53.98 38.33 L53.99 37.74 L53.88 37.16 L53.66 36.62 L53.34 36.12 L52.93 35.70 L52.70 35.53 L52.18 35.24 L51.62 35.06 L51.04 35.00 L50.45 35.05 L18.89 44.21 L18.36 44.49 L17.90 44.85 L17.53 45.30 L17.37 45.55 L17.14 46.09 L17.02 46.67 L17.00 46.96 L17.05 47.55 L17.21 48.11 L17.49 48.64 L17.85 49.10 L18.30 49.47 L18.82 49.76 L19.38 49.94 L19.96 50.00 L20.55 49.95Z"
              fill="#4CC3BB"
            />
          </svg>

          {/* Small wordmark */}
          <div
            style={{
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            Acaddash
          </div>
        </div>

        {/* Main Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#FFFFFF",
            }}
          >
            Your Academics,
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#4CC3BB",
            }}
          >
            On Board.
          </div>
        </div>

        {/* Bottom Tagline / Description */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              color: "#A9BBCB",
              fontWeight: 500,
            }}
          >
            Built for Nigerian university students
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#4CC3BB",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            CGPA · Simulator · Planner · Advisor
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
