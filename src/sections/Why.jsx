import SectionWrapper from "../components/SectionWrapper";

export default function Why() {
  return (
    <SectionWrapper>
      <img
        src="/images/why.png"
        className="rounded-xl mb-6 w-full object-cover"
        alt="Mall overview"
      />

      <h2 className="text-4xl mb-4">Why This Destination?</h2>

      <p className="max-w-2xl text-gray-300">
        120M+ annual visitors. Located in a global tourism hub with unmatched
        retail, entertainment, and lifestyle experiences.
      </p>
    </SectionWrapper>
  );
}