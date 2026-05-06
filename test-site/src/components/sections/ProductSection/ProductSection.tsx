import logoBloynkay from "../../../assets/images/brand/bloynkay-logo.png";
import styles from "./ProductSection.module.css";

export type Colorway = "nero" | "celeste" | "panna";

export type ProductSectionProps = {
    colorway: Colorway;
    index: string;
    position: number;
    total: number;
    name: string;
    description: string;
    details: string[];
    price: string;
    mediaSrc: string;
    mediaAlt: string;
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
                                   position,
                                   total,
                                   name,
                                   description,
                                   details,
                                   price,
                                   mediaSrc,
                                   mediaAlt,
                               }: ProductSectionProps) {
    return (
        <section
            id={`drop-01-${colorway}`}
            data-nav-theme={navTheme[colorway]}
            className={`${styles.section} ${colorwayClass[colorway]}`}
        >
            <div className={styles.backdrop} aria-hidden="true" />
            <img
                src={logoBloynkay}
                alt=""
                aria-hidden="true"
                className={styles.watermark}
            />

            <div className={styles.content}>
                <header className={styles.meta}>
                    <span className={styles.kicker}>Drop 01 / Cardigan</span>
                    <span className={styles.counter}>
                        {String(position).padStart(2, "0")} —{" "}
                        {String(total).padStart(2, "0")}
                    </span>
                </header>

                <div className={styles.stage}>
                    <span className={styles.indexNum} aria-hidden="true">
                        {index}
                    </span>

                    <figure className={styles.media}>
                        <img
                            src={mediaSrc}
                            alt={mediaAlt}
                            loading="lazy"
                            className={styles.mediaEl}
                        />
                    </figure>

                    <div className={styles.info}>
                        <h2 className={styles.title}>{name}</h2>
                        <p className={styles.lead}>{description}</p>

                        <ul className={styles.details}>
                            {details.map((d, i) => (
                                <li key={d} className={styles.detail}>
                                    <span className={styles.detailLabel}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className={styles.detailText}>{d}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.actions}>
                            <span className={styles.price}>{price}</span>
                            <div className={styles.buttons}>
                                <button type="button" className={styles.ctaGhost}>
                                    Dettagli
                                </button>
                                <button type="button" className={styles.cta}>
                                    <span>Aggiungi</span>
                                    <span aria-hidden="true" className={styles.arrow}>
                                        →
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}