import SectionWrapper from "../components/SectionWrapper";

export default function Why() {
  return (
    <SectionWrapper>
      <img
        src="/images/why.png"
        className="rounded-xl mb-6 w-full object-cover"
        alt="Avenue Mall overview"
      />

      <h2 className="text-4xl mb-4">Why Avenue Mall?</h2>

      <p className="max-w-2xl text-gray-300">
        Avenue Mall is built for repeat visits: a complete day-out experience
        that blends retail, food, and entertainment into one effortless journey.
        It’s designed to convert walk-ins into loyal customers—and tenants into
        must-visit brands.
      </p>
    </SectionWrapper>
  );
}