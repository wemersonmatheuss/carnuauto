import type { CSSProperties } from "react";

import styles from "./styles.module.css"

type Props = {
  videoId?: string;
  width?: CSSProperties["width"]; // <= em vez de string
  autoplayMuted?: boolean;
  controls?: boolean;
};

export function Video({
  videoId = "LAlOCf7089c",
  width = "50%",
  autoplayMuted = true,
  controls = true,
}: Props) {
  const params = new URLSearchParams({
    // autoplay: autoplayMuted ? "1" : "0",
    mute: autoplayMuted ? "0" : "1",
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    controls: controls ? "1" : "0",
  }).toString();

  const src = `https://www.youtube.com/embed/${videoId}?${params}`;

  return (
    <section className={styles.container}>
      <div className={styles.box} style={{ width }}> {/* OK: objeto */}
        <div className={styles.aspect16by9}>
          <iframe
            className={styles.player}
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
