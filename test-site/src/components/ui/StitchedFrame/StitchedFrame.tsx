import type { ReactNode } from "react";
import stitchUrl from "../../../assets/images/textures/stitch-strip.png";
import styles from "./StitchedFrame.module.css";

type Props = {
    color: string;
    thickness?: number;
    className?: string;
    children: ReactNode;
};

export function StitchedFrame({
                                  color,
                                  thickness = 14,
                                  className,
                                  children,
                              }: Props) {
    return (
        <div
            className={[styles.frame, className].filter(Boolean).join(" ")}
            style={{
                ["--stitch-color" as string]: color,
                ["--stitch-url" as string]: `url(${stitchUrl})`,
                ["--stitch-thickness" as string]: `${thickness}px`,
            }}
        >
            <div className={styles.content}>{children}</div>
            <span aria-hidden="true" className={`${styles.edge} ${styles.top}`} />
            <span aria-hidden="true" className={`${styles.edge} ${styles.bottom}`} />
        </div>
    );
}