import { StitchedFrame } from "../../ui/StitchedFrame";
import styles from "./ProductSection.module.css";

export type Colorway = "nero" | "celeste" | "panna";

export type ProductSectionProps = {
    colorway: Colorway;
    index: string;
    name: string;
    description: string;
    details: string[];
    price: string;
    mediaSrc: string;
    mediaAlt: string;
    videoSrc?: string;
    orientation?: "left" | "right";
};

const colorwayClass: Record<Colorway, string> = {
    nero: styles.nero,
    celeste: styles.celeste,
    panna: styles.panna,
};

const navTheme: Record<Colorway, "light" | "dark"> = {
    nero: "light",
    celeste: "light",
    panna: "dark",
};

export function ProductSection({
                                   colorway,
                                   index,
                                   name,
                                   description,
                                   details,
                                   price,
                                   mediaSrc,
                                   mediaAlt,
                                   videoSrc,
                                   orientation = "left",
                               }: ProductSectionProps) {
    const frameColor = `var(--cw-${colorway}-fg)`;
    const accent = `var(--cw-${colorway}-accent)`;

    return (
        <section
            id={`drop-01-${colorway}`}
            data-nav-theme={navTheme[colorway]}
            className={[
                styles.section,
                colorwayClass[colorway],
                orientation === "right" ? styles.reverse : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <div className={styles.frameTags}>
        <span className={styles.frameTag}>
          {index} / {colorway.toUpperCase()}
        </span>
                <span className={styles.frameTag}>Drop 01 · Cardigan</span>
            </div>

            <div className={styles.grid}>
                <div className={styles.media}>
                    <StitchedFrame color={frameColor} thickness={14}>
                        {videoSrc ? (
                            <video
                                src={videoSrc}
                                poster={mediaSrc}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                className={styles.mediaEl}
                            />
                        ) : (
                            <img
                                src={mediaSrc}
                                alt={mediaAlt}
                                loading="lazy"
                                className={styles.mediaEl}
                            />
                        )}
                    </StitchedFrame>
                </div>

                <div className={styles.info}>
                    <span className={styles.eyebrow}>Drop 01 — N° {index}</span>
                    <h2 className={styles.title}>{name}</h2>
                    <p className={styles.lead}>{description}</p>

                    <ul className={styles.details}>
                        {details.map((d) => (
                            <li key={d} className={styles.detail}>
                <span
                    aria-hidden="true"
                    className={styles.dot}
                    style={{ background: accent }}
                />
                                {d}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.actions}>
                        <span className={styles.price}>{price}</span>
                        <button type="button" className={styles.cta}>
                            <span>Aggiungi</span>
                            <span aria-hidden="true" className={styles.arrow}>
                →
              </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}