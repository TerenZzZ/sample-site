import { type FormEvent } from "react";
import styles from "./Footer.module.css";

export function Footer() {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <footer className={styles.footer} data-nav-theme="light">
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <span className={styles.logo}>BLOYNKAY</span>
                    <p className={styles.tagline}>
                        Una nuova forma del dettaglio. Drop 01 — Maggio 2026.
                    </p>
                </div>

                <form className={styles.newsletter} onSubmit={onSubmit}>
                    <label htmlFor="footer-email" className={styles.newsletterLabel}>
                        Lasciaci un'email
                    </label>
                    <div className={styles.newsletterRow}>
                        <input
                            id="footer-email"
                            type="email"
                            placeholder="tu@email.com"
                            className={styles.input}
                            required
                            autoComplete="email"
                        />
                        <button type="submit" className={styles.submit}>
                            Iscriviti
                        </button>
                    </div>
                </form>

                <div className={styles.social}>
                    <span className={styles.socialLabel}>Seguici</span>
                    <ul className={styles.socialList}>
                        <li>
                            <a href="#" className={styles.socialLink}>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.socialLink}>
                                TikTok
                            </a>
                        </li>
                        <li>
                            <a href="mailto:hello@bloynkay.com" className={styles.socialLink}>
                                hello@bloynkay.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <span>© 2026 Bloynkay®. Tutti i diritti riservati.</span>
                <span>Milano · Italia</span>
            </div>
        </footer>
    );
}