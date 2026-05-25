import { type MouseEvent, useEffect, useState } from "react";
import { IconButton } from "../../ui/IconButton";
import logoBloynkay from "../../../assets/images/brand/bloynkay-logo.png";
import styles from "./Navbar.module.css";

type Theme = "light" | "dark" | "medium";

const NAV_LINKS = [
    { label: "Drop", href: "#drops", target: "drops" },
    { label: "Manifesto", href: "#manifesto", target: "manifesto" },
    { label: "Lista d'attesa", href: "#waitlist", target: "waitlist" },
];

function useNavbarBehavior() {
    const [theme, setTheme] = useState<Theme>("light");
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string>("top");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 140);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections =
            document.querySelectorAll<HTMLElement>("[data-nav-theme]");
        if (sections.length === 0) return;

        let currentTheme: Theme = "light";
        let themeChangeTimeout: ReturnType<typeof setTimeout> | null = null;

        const obs = new IntersectionObserver(
            (entries) => {
                // Filtra sezioni che sono visibili con almeno il 25% della loro area
                const visibleSections = entries
                    .filter((e) => e.isIntersecting && e.intersectionRatio >= 0.25)
                    .sort(
                        (a, b) =>
                            Math.abs(a.boundingClientRect.top) -
                            Math.abs(b.boundingClientRect.top)
                    );

                const mostVisible = visibleSections[0];

                if (mostVisible) {
                    const t = mostVisible.target.getAttribute("data-nav-theme");
                    if (t === "light" || t === "dark" || t === "medium") {
                        // Cambia tema solo se è diverso da quello corrente
                        if (t !== currentTheme) {
                            if (themeChangeTimeout) clearTimeout(themeChangeTimeout);

                            // Debounce di 150ms per evitare cambi rapidi
                            themeChangeTimeout = setTimeout(() => {
                                currentTheme = t;
                                requestAnimationFrame(() => setTheme(t));
                            }, 150);
                        }
                    }

                    const id = mostVisible.target.id;
                    if (id) {
                        if (id.startsWith("drop-01")) {
                            setActiveId("drops");
                        } else {
                            setActiveId(id);
                        }
                    }
                }
            },
            {
                rootMargin: "-140px 0px -35% 0px",
                threshold: [0, 0.25, 0.5, 0.75]
            }
        );

        sections.forEach((s) => obs.observe(s));
        return () => {
            obs.disconnect();
            if (themeChangeTimeout) clearTimeout(themeChangeTimeout);
        };
    }, []);

    return { theme, scrolled, activeId };
}

export function Navbar() {
    const { theme, scrolled, activeId } = useNavbarBehavior();
    const themeClass =
        theme === "dark" ? styles.dark :
        theme === "medium" ? styles.medium :
        styles.light;

    const onLinkClick =
        (target: string) => (e: MouseEvent<HTMLAnchorElement>) => {
            const el = document.getElementById(target);
            if (!el) return;
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", `#${target}`);
        };

    const onLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(null, "", "#top");
    };

    return (
        <header
            className={[
                styles.navbar,
                themeClass,
                scrolled ? styles.scrolled : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <div className={styles.inner}>
                <nav aria-label="Primary" className={styles.left}>
                    <ul className={styles.list}>
                        {NAV_LINKS.map((link) => {
                            const isActive = activeId === link.target;
                            return (
                                <li key={link.href}>
                                    <a
                                        className={[
                                            styles.link,
                                            isActive ? styles.linkActive : "",
                                        ]
                                            .filter(Boolean)
                                            .join(" ")}
                                        href={link.href}
                                        onClick={onLinkClick(link.target)}
                                        aria-current={isActive ? "true" : undefined}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <a
                    href="#top"
                    className={styles.logo}
                    aria-label="Bloynkay — home"
                    onClick={onLogoClick}
                >
                    <img
                        src={logoBloynkay}
                        alt="Bloynkay"
                        className={styles.logoImg}
                    />
                </a>

                <div className={styles.right}>
                    <IconButton
                        label="Carrello"
                        className={styles.iconBtn}
                        data-action="cart"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 5h3l2 12h11l2-9H7" />
                            <circle cx="9" cy="20" r="1.6" />
                            <circle cx="18" cy="20" r="1.6" />
                        </svg>
                    </IconButton>

                    <IconButton
                        label="Account"
                        className={styles.iconBtn}
                        data-action="account"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                        </svg>
                    </IconButton>
                </div>
            </div>
        </header>
    );
}