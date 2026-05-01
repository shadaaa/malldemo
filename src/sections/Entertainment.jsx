import SectionWrapper from "../components/SectionWrapper";
import CTAButton from "../components/CTAButton";

export default function Entertainment() {
  return (
    <section id="entertainment">
      <div className="h-[500px] relative">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
          src="/videos/entertainment.mp4"
        />
      </div>

      <SectionWrapper>
        <h2 className="text-4xl mb-4">Footfall people plan for</h2>

        <p className="max-w-2xl text-gray-300">
          Entertainment isn’t an add-on—it’s the engine. Avenue Mall is designed
          to create moments that bring families, friends, and tourists back
          again and again.
        </p>
        <CTAButton text="Discuss sponsorship" href="#contact" />
      </SectionWrapper>
    </section>
  );
}