import { ComoFunciona } from "../components/ComoFunciona";
import { Footer } from "../components/Footer";
import { Header } from "../components/header";
import { Hero } from "../components/Hero";

export function LandingPage(){
    return(
        <div>
            <Header/>
            <main>
                <Hero/>
                <ComoFunciona/>
            </main>
            <Footer/>
        </div>
    )
}