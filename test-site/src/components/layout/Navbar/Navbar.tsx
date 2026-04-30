import styles from "./Navbar.module.css";

const NAV_LINKS = [
    { label: "Drop 01", href: "#drop-01" },
    { label: "Lookbook", href: "#lookbook" },
    { label: "Brand", href: "#brand" },
    { label: "Contatti", href: "#contact" },
];

export function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.inner}>
                <a href="#top" className={styles.logo} aria-label="Bloynkay — home">
                    <span className={styles.logoMark}>BLOYNKAY</span>
                    <span className={styles.logoBadge}>®</span>
                </a>

                <nav aria-label="Primary" className={styles.nav}>
                    <ul className={styles.list}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a className={styles.link} href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.meta}>
                    <span className={styles.metaItem}>IT / EN</span>
                    <a className={styles.metaCta} href="#newsletter">
                        Iscriviti
                    </a>
                </div>
            </div>
        </header>
    );
}