import SectionWrapper from "../components/SectionWrapper";

export default function Dining() {
  return (
    <SectionWrapper>
      <img
        src="/images/dining.png"
        className="rounded-xl mb-6 w-full object-cover"
        alt="Dining area"
      />

      <h2 className="text-4xl mb-4">Dining that extends dwell time</h2>

      <p className="max-w-2xl text-gray-300">
        A carefully curated mix of cafes, casual favorites, and destination
        dining that keeps people on-property longer—and gives every tenant more
        opportunities to win.
      </p>
    </SectionWrapper>
  );
}