import SectionWrapper from "../components/SectionWrapper";

export default function Luxury() {
  return (
    <SectionWrapper>
      <img
        src="/images/luxury.png"
        className="rounded-xl mb-6 w-full object-cover"
        alt="Luxury section"
      />

      <h2 className="text-4xl mb-4">Luxury Experience</h2>

      <p className="max-w-2xl text-gray-300">
        Premium retail zones curated for high-end global brands, delivering an
        elevated customer experience.
      </p>
    </SectionWrapper>
  );
}