import { StitchedSeparator } from "../../ui/StitchedSeparator";
import { ProductSection } from "../ProductSection";
import type { Colorway } from "../ProductSection";
import cardiganNero from "../../../assets/images/products/cardigan-nero.png";
import cardiganCeleste from "../../../assets/images/products/cardigan-celeste.png";
import cardiganPanna from "../../../assets/images/products/cardigan-panna.png";

type ProductData = {
    colorway: Colorway;
    index: string;
    name: string;
    description: string;
    details: string[];
    price: string;
    mediaSrc: string;
    mediaAlt: string;
    orientation: "left" | "right";
    /** Color of the stitch threads on the separator that introduces this section. */
    stitchColor: string;
};

const PRODUCTS: ProductData[] = [
    {
        colorway: "nero",
        index: "001",
        name: "Cardigan 001 — Nero",
        description:
            "Maglia compatta, taglio asciutto, raglan morbido. Il primo capo di Drop 01: un nero profondo interrotto solo dal bottone celeste a contrasto e dalla patch ovale ricamata.",
        details: [
            "100% cotone organico",
            "Knit Italia · gauge 7",
            "Bottone centrale a contrasto",
            "Patch ricamata Bloynkay",
        ],
        price: "€59,90",
        mediaSrc: cardiganNero,
        mediaAlt: "Cardigan Bloynkay 001 in colorazione nera, vista frontale",
        orientation: "left",
        stitchColor: "#f5f1e8",
    },
    {
        colorway: "celeste",
        index: "002",
        name: "Cardigan 002 — Celeste",
        description:
            "Blu polveroso con colletto in maglia grigio mélange. Un'allusione consapevole al workwear anni '90, riletta con bottone rosso a contrasto al centro.",
        details: [
            "100% cotone organico",
            "Colletto grigio mélange",
            "Bottone centrale rosso",
            "Patch ricamata Bloynkay",
        ],
        price: "€59,90",
        mediaSrc: cardiganCeleste,
        mediaAlt:
            "Cardigan Bloynkay 002 in colorazione celeste con colletto grigio",
        orientation: "right",
        stitchColor: "#a8c5d6",
    },
    {
        colorway: "panna",
        index: "003",
        name: "Cardigan 003 — Panna",
        description:
            "Il colorway luce di Drop 01. Cotone naturale non tinto, mano densa, finitura grezza. Il bottone celeste a contrasto chiude il cerchio aperto dal capo nero.",
        details: [
            "100% cotone organico non tinto",
            "Knit Italia · gauge 7",
            "Bottone centrale celeste",
            "Patch ricamata Bloynkay",
        ],
        price: "€59,90",
        mediaSrc: cardiganPanna,
        mediaAlt: "Cardigan Bloynkay 003 in colorazione panna",
        orientation: "left",
        stitchColor: "#1a1a1a",
    },
];

export function ProductsBlock() {
    return (
        <div id="drops">
            {PRODUCTS.map((p, i) => (
                <div key={p.colorway}>
                    <StitchedSeparator
                        color={p.stitchColor}
                        ariaLabel={i === 0 ? "Inizio Drop 01" : `Passaggio a ${p.colorway}`}
                    />
                    <ProductSection
                        colorway={p.colorway}
                        index={p.index}
                        name={p.name}
                        description={p.description}
                        details={p.details}
                        price={p.price}
                        mediaSrc={p.mediaSrc}
                        mediaAlt={p.mediaAlt}
                        orientation={p.orientation}
                    />
                </div>
            ))}
        </div>
    );
}