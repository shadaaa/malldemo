import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Why from "../sections/Why";
import Retail from "../sections/Retail";
import Luxury from "../sections/Luxury";
import Dining from "../sections/Dining";
import Entertainment from "../sections/Entertainment";
import Events from "../sections/Events";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Each section = one part of story */}
      <Hero />
      <Why />
      <Retail />
      <Luxury />
      <Dining />
      <Entertainment />
      <Events />
    </div>
  );
}