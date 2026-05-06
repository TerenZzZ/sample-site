import { ProductSection } from "../ProductSection";
import type { Colorway } from "../ProductSection";
import cardiganNero from "../../../assets/images/products/cardigan-nero.png";
import cardiganPanna from "../../../assets/images/products/cardigan-panna.png";
import cardiganCeleste from "../../../assets/images/products/cardigan-celeste.png";
import styles from "./ProductsBlock.module.css";

type ProductData = {
    colorway: Colorway;
    index: string;
    name: string;
    description: string;
    details: string[];
    price: string;
    mediaSrc: string;
    mediaAlt: string;
};

const PRODUCTS: ProductData[] = [
    {
        colorway: "nero",
        index: "01",
        name: "Nero",
        description:
            "Maglia compatta, taglio asciutto, raglan morbido. Nero profondo interrotto solo dal bottone celeste a contrasto e dalla patch ovale ricamata.",
        details: [
            "100% cotone organico",
            "Knit Italia · gauge 7",
            "Bottone centrale celeste",
            "Patch ricamata Bloynkay",
        ],
        price: "€59,90",
        mediaSrc: cardiganNero,
        mediaAlt: "Cardigan Bloynkay 01 nero, vista frontale",
    },
    {
        colorway: "panna",
        index: "02",
        name: "Panna",
        description:
            "Cotone naturale non tinto, mano densa, finitura grezza. Il bottone a contrasto chiude il cerchio aperto dal capo nero.",
        details: [
            "100% cotone organico non tinto",
            "Knit Italia · gauge 7",
            "Bottone centrale a contrasto",
            "Patch ricamata Bloynkay",
        ],
        price: "€59,90",
        mediaSrc: cardiganPanna,
        mediaAlt: "Cardigan Bloynkay 02 panna, vista frontale",
    },
    {
        colorway: "celeste",
        index: "03",
        name: "Celeste",
        description:
            "Blu polveroso con colletto in maglia grigio mélange. Allusione consapevole al workwear anni '90, riletta con bottone rosso al centro.",
        details: [
            "100% cotone organico",
            "Colletto grigio mélange",
            "Bottone centrale rosso",
            "Patch ricamata Bloynkay",
        ],
        price: "€59,90",
        mediaSrc: cardiganCeleste,
        mediaAlt: "Cardigan Bloynkay 03 celeste con colletto grigio",
    },
];

export function ProductsBlock() {
    return (
        <div id="drops" className={styles.drops}>
            {PRODUCTS.map((p, i) => (
                <ProductSection
                    key={p.colorway}
                    position={i + 1}
                    total={PRODUCTS.length}
                    {...p}
                />
            ))}
        </div>
    );
}