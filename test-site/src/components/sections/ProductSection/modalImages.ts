import cardigan_celeste_fronte from "../../../assets/images/products/modal/cardigan_celeste_fronte.png";
import cardigan_celeste_prospettiva from "../../../assets/images/products/modal/cardigan_celeste_prospettiva.png";
import cardigan_nero_fronte from "../../../assets/images/products/modal/cardigan_nero_fronte.png";
import cardigan_nero_prospettiva from "../../../assets/images/products/modal/cardigan_nero_prospettiva.png";
import cardigan_panna_fronte from "../../../assets/images/products/modal/cardigan_panna_fronte.png";
import cardigan_panna_prospettiva from "../../../assets/images/products/modal/cardigan_panna_prospettiva.png";
import cardigan_triplo_prospettiva from "../../../assets/images/products/modal/cardigan_triplo_prospettiva.png";

import type { Colorway } from "./ProductSection";

export const modalImagesConfig: Record<Colorway, string[]> = {
    nero: [
        cardigan_nero_fronte,
        cardigan_nero_prospettiva,
        cardigan_triplo_prospettiva,
    ],
    celeste: [
        cardigan_celeste_fronte,
        cardigan_celeste_prospettiva,
        cardigan_triplo_prospettiva,
    ],
    panna: [
        cardigan_panna_fronte,
        cardigan_panna_prospettiva,
        cardigan_triplo_prospettiva,
    ],
};
