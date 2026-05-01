import SectionWrapper from "../components/SectionWrapper";
import CTAButton from "../components/CTAButton";

export default function Events() {
  return (
    <section id="events">
      {/* VIDEO */}
      <div className="h-[500px] relative">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
          src="/videos/events.mp4"
        />
      </div>

      <SectionWrapper>
        <img
          src="/images/events.png"
          className="rounded-xl mb-6 w-full object-cover"
          alt="Events venue"
        />

        <h2 className="text-4xl mb-4">Events that create demand</h2>

        <p className="max-w-2xl text-gray-300">
          Product launches, brand activations, seasonal festivals, and headline
          shows—Avenue Mall is a platform for experiences that build community
          and drive measurable traffic.
        </p>

        <CTAButton text="Book an event date" href="#contact" />
      </SectionWrapper>
    </section>
  );
}