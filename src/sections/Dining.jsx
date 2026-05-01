import SectionWrapper from "../components/SectionWrapper";

export default function Dining() {
  return (
    <SectionWrapper>
      <img
        src="/images/dining.png"
        className="rounded-xl mb-6 w-full object-cover"
        alt="Dining area"
      />

      <h2 className="text-4xl mb-4">Dining & Lifestyle</h2>

      <p className="max-w-2xl text-gray-300">
        A curated mix of fine dining, cafes, and lifestyle experiences that
        attract diverse audiences.
      </p>
    </SectionWrapper>
  );
}