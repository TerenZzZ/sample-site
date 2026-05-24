import { ProductSection } from "../ProductSection";
import type { Colorway, Pillar } from "../ProductSection";
import cardiganNero from "../../../assets/images/products/fronte_nero_ombra.png";
import cardiganPanna from "../../../assets/images/products/fronte_panna_ombra.png";
import cardiganCeleste from "../../../assets/images/products/fronte_celeste_ombra.png";
import styles from "./ProductsBlock.module.css";

type ProductData = {
    colorway: Colorway;
    index: string;
    name: string;
    description: string;
    pillars: Pillar[];
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
        pillars: [
            {
                index: "01 · Materia",
                title: "Cotone organico, densità da inverno",
                body: "Filato pettinato gauge 7, tinto in fiocco con pigmenti reattivi a basso impatto. Mano densa, leggermente strutturata, mantiene la profondità del nero anche dopo molti lavaggi.",
            },
            {
                index: "02 · Costruzione",
                title: "Knit Italia, raglan morbido",
                body: "Lavorato in un piccolo maglificio sull'Appennino bolognese. Calo manuale alle spalle, polsini in costa stretta, bordo inferiore senza ricciatura, finito a mano.",
            },
            {
                index: "03 · Dettaglio",
                title: "Il bottone celeste",
                body: "Un solo bottone al centro, in resina celeste polverosa: il segnale visivo che apre Drop 01. Sul petto, una patch ovale ricamata in tono — la firma silenziosa dell'atelier.",
            },
        ],
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
        pillars: [
            {
                index: "01 · Materia",
                title: "Filato écru, senza tinta",
                body: "Cotone organico non sottoposto a tintura. Le sfumature naturali del fiocco restano visibili in superficie e danno al capo una vita propria. Mano densa, finitura leggermente grezza.",
            },
            {
                index: "02 · Costruzione",
                title: "Stessa geometria, materia diversa",
                body: "Stessa costruzione del 01: stesso peso, stesso stacco netto al fondo, stessa cucitura raglan. Cambia solo la materia. Cambia tutto.",
            },
            {
                index: "03 · Dettaglio",
                title: "Bottone a contrasto",
                body: "Bottone centrale in tono scuro, a chiudere il cerchio aperto dal capo nero. Patch ovale ricamata in écru, quasi invisibile a distanza, presente a mano.",
            },
        ],
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
        pillars: [
            {
                index: "01 · Materia",
                title: "Blu polvere, mélange a contrasto",
                body: "Corpo in cotone organico tinto blu polvere — un blu opaco, leggermente sbiadito. Il colletto è lavorato a parte, in maglia grigio mélange, e ricucito a mano: due materie, una sola maglia.",
            },
            {
                index: "02 · Costruzione",
                title: "Il colletto è la differenza",
                body: "Stessa lavorazione del 01 e del 02, ma con un tassello applicato — un'allusione consapevole al workwear anni '90, riletta senza nostalgia.",
            },
            {
                index: "03 · Dettaglio",
                title: "Bottone rosso al centro",
                body: "Un solo bottone rosso brunito: il colpo di colore che fa cantare il blu. Patch ovale ricamata in bianco sul lato sinistro.",
            },
        ],
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