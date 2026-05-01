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

        <h2 className="text-4xl mb-4">Leasing that performs</h2>

        <p className="max-w-2xl text-gray-300">
          From flagship anchors to high-growth challengers, Avenue Mall is
          curated to keep the entire tenant mix winning—through strong zoning,
          premium visibility, and an experience-first layout that drives
          conversion.
        </p>

        <CTAButton text="Request leasing details" href="#contact" />
      </SectionWrapper>
    </section>
  );
}