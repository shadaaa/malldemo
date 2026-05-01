import SectionWrapper from "../components/SectionWrapper";

export default function Luxury() {
  return (
    <SectionWrapper>
      <img
        src="/images/luxury.png"
        className="rounded-xl mb-6 w-full object-cover"
        alt="Luxury section"
      />

      <h2 className="text-4xl mb-4">Premium brands belong here</h2>

      <p className="max-w-2xl text-gray-300">
        A refined environment, elevated finishes, and a customer journey that
        feels effortless. Avenue Mall is where premium brands create presence,
        not just a store.
      </p>
    </SectionWrapper>
  );
}