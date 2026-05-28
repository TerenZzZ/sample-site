import { Reveal } from "../components/ui/Reveal";
import styles from "./StorePage.module.css";

export function StorePage() {
    return (
        <div className={styles.page}>
            <section className={styles.store}>
                <div className={styles.inner}>
                    <Reveal as="header" className={styles.head}>
                        <span className={styles.kicker}>Bloynkay Store</span>
                        <h1 className={styles.headline}>
                            La nostra <em className={styles.accent}>vetrina</em>
                        </h1>
                        <p className={styles.lead}>
                            Esplora la collezione completa di Bloynkay Atelier. Ogni capo è
                            pensato per durare, realizzato con materiali selezionati e
                            lavorazioni artigianali.
                        </p>
                    </Reveal>

                    <div className={styles.grid}>
                        <Reveal className={styles.card}>
                            <div className={styles.cardMedia}>
                                <div className={styles.cardPlaceholder}>
                                    <span className={styles.cardIcon}>01</span>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Drop 01</h3>
                                <p className={styles.cardDesc}>Cardigan Series</p>
                            </div>
                        </Reveal>

                        <Reveal className={styles.card}>
                            <div className={styles.cardMedia}>
                                <div className={styles.cardPlaceholder}>
                                    <span className={styles.cardIcon}>02</span>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Accessori</h3>
                                <p className={styles.cardDesc}>Coming Soon</p>
                            </div>
                        </Reveal>

                        <Reveal className={styles.card}>
                            <div className={styles.cardMedia}>
                                <div className={styles.cardPlaceholder}>
                                    <span className={styles.cardIcon}>03</span>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Limited Edition</h3>
                                <p className={styles.cardDesc}>Coming Soon</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
