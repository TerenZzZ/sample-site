import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { ProductsBlock } from "./components/sections/ProductsBlock";
import { Footer } from "./components/sections/Footer";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <ProductsBlock />
            </main>
            <Footer />
        </>
    );
}

export default App;