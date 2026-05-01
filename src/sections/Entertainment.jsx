import SectionWrapper from "../components/SectionWrapper";

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
        <h2 className="text-4xl mb-4">Entertainment</h2>

        <p className="max-w-2xl text-gray-300">
          Theme parks, cinemas, and immersive attractions that drive millions of
          visitors.
        </p>
      </SectionWrapper>
    </section>
  );
}