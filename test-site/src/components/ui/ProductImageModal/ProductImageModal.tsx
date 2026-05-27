import { useEffect, useState, useCallback } from "react";
import styles from "./ProductImageModal.module.css";

type ProductImageModalProps = {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    colorway: "nero" | "celeste" | "panna";
};

export function ProductImageModal({
    isOpen,
    onClose,
    images,
    colorway,
}: ProductImageModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setCurrentIndex(0);
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, handleNext, handlePrev, onClose]);

    const handleOverlayClick = useCallback((e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div
            className={`${styles.overlay} ${styles[colorway]}`}
            onClick={handleOverlayClick}
        >
            <div className={styles.modal}>
                <button
                    type="button"
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Chiudi"
                >
                    ✕
                </button>

                <button
                    type="button"
                    className={`${styles.navBtn} ${styles.prevBtn}`}
                    onClick={handlePrev}
                    aria-label="Immagine precedente"
                >
                    ‹
                </button>

                <button
                    type="button"
                    className={`${styles.navBtn} ${styles.nextBtn}`}
                    onClick={handleNext}
                    aria-label="Immagine successiva"
                >
                    ›
                </button>

                <div className={styles.imageContainer}>
                    <img
                        src={images[currentIndex]}
                        alt={`Vista ${currentIndex + 1}`}
                        className={styles.image}
                    />
                </div>

                {images.length > 1 && (
                    <div className={styles.indicators}>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`${styles.indicator} ${
                                    index === currentIndex ? styles.active : ""
                                }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Vai a immagine ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
