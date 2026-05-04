import stitchUrl from "../../../assets/images/textures/stitch-strip.png";
import styles from "./StitchedSeparator.module.css";

type Props = {
    color: string;
    height?: number;
    ariaLabel?: string;
};

export function StitchedSeparator({ color, height = 48, ariaLabel }: Props) {
    return (
        <div
            className={styles.separator}
            role={ariaLabel ? "separator" : "presentation"}
            aria-label={ariaLabel}
            style={{
                ["--stitch-color" as string]: color,
                ["--stitch-url" as string]: `url(${stitchUrl})`,
                ["--stitch-height" as string]: `${height}px`,
            }}
        />
    );
}