import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Manifesto } from "./components/sections/Manifesto";
import { ProductsBlock } from "./components/sections/ProductsBlock";
import { Waitlist } from "./components/sections/Waitlist";
import { Footer } from "./components/sections/Footer";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Manifesto />
                <ProductsBlock />
                <Waitlist />
            </main>
            <Footer />
        </>
    );
}

export default App;