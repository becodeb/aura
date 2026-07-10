import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Treatments } from "@/components/sections/treatments";
import { Benefits } from "@/components/sections/benefits";
import { Results } from "@/components/sections/results";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { Promotions } from "@/components/sections/promotions";
import { FAQ } from "@/components/sections/faq";
import { Reservation } from "@/components/sections/reservation";

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Benefits />
        <Results />
        <Team />
        <Testimonials />
        <Promotions />
        <FAQ />
        <Reservation />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
