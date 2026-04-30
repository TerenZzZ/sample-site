import { Navbar } from "../../layout/Navbar";
import { Button } from "../../ui/Button";
import { Marquee } from "../../ui/Marquee";
import { ScrollIndicator } from "../../ui/ScrollIndicator";
import heroVideo from "../../../assets/media/hero-drop01.mp4";
import styles from "./Hero.module.css";

const MARQUEE_ITEMS = [
    "Drop 01",
    "Cardigan Series",
    "Panna",
    "Celeste · Colletto Grigio",
    "Nero",
    "Coming May 2026",
    "Limited Release",
];

export function Hero() {
    return (
        <section className={styles.hero} id="top">
            <div className={styles.media} aria-hidden="true">
                <video
                    className={styles.video}
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                />
                <div className={styles.vignette} />
                <div className={styles.grain} />
            </div>

            <Navbar />

            <div className={styles.frame}>
                <span className={styles.frameTag}>N° 0001 / Bloynkay Atelier</span>
                <span className={styles.frameTag}>Milano · 2026</span>
            </div>

            <div className={styles.content}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Drop 01 — In arrivo Maggio 2026
        </span>

                <h1 className={styles.title}>
                    <span className={styles.titleLine}>Forma</span>
                    <span className={styles.titleLine}>
            <em className={styles.titleAccent}>Nuova</em>
          </span>
                    <span className={styles.titleLine}>Materia</span>
                </h1>

                <p className={styles.lead}>
                    Tre colorazioni, un solo gesto. Il cardigan che apre Drop 01 ridisegna
                    il dettaglio: colletto a contrasto, taglio asciutto, mano densa.
                </p>

                <div className={styles.actions}>
                    <Button>Scopri Drop 01</Button>
                    <Button variant="ghost">Guarda il film</Button>
                </div>
            </div>

            <aside className={styles.colors} aria-label="Colorways disponibili">
                <span className={styles.colorsLabel}>Colorways</span>
                <ul className={styles.colorList}>
                    <li className={styles.colorItem}>
            <span
                className={styles.swatch}
                style={{ background: "#f1ead6" }}
            />
                        <span className={styles.colorName}>Panna</span>
                    </li>
                    <li className={styles.colorItem}>
            <span
                className={styles.swatch}
                style={{
                    background:
                        "linear-gradient(135deg, #a8c5d6 0 60%, #4a4a4a 60% 100%)",
                }}
            />
                        <span className={styles.colorName}>Celeste / Grigio</span>
                    </li>
                    <li className={styles.colorItem}>
            <span
                className={styles.swatch}
                style={{ background: "#0e0e0e" }}
            />
                        <span className={styles.colorName}>Nero</span>
                    </li>
                </ul>
            </aside>

            <div className={styles.scroll}>
                <ScrollIndicator label="Scorri" />
            </div>

            <div className={styles.marquee}>
                <Marquee items={MARQUEE_ITEMS} />
            </div>
        </section>
    );
}