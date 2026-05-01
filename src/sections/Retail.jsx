import SectionWrapper from "../components/SectionWrapper";
import CTAButton from "../components/CTAButton";

export default function Retail() {
  return (
    <section id="retail">
      <SectionWrapper>
        <img
          src="/images/retail.png"
          className="rounded-xl mb-6 w-full object-cover"
          alt="Retail environment"
        />

        <h2 className="text-4xl mb-4">Retail Ecosystem</h2>

        <p className="max-w-2xl text-gray-300">
          Home to flagship stores, global brands, and high-growth retail
          opportunities in a high-traffic destination.
        </p>

        <CTAButton text="Lease Space" />
      </SectionWrapper>
    </section>
  );
}