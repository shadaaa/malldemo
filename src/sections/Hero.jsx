import CTAButton from "../components/CTAButton";

export default function Hero() {
  return (
    <div className="h-screen relative" id="top">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
        src="/videos/hero.mp4"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50 text-center">
        <h1 className="text-6xl font-bold">Avenue Mall</h1>

        <p className="mt-4 text-lg text-gray-300">
          The destination people choose first—where brands become landmarks and
          weekends become rituals.
        </p>

        <CTAButton
          text="Start a Leasing Conversation"
          href="#contact"
        />
        <div className="mt-4 flex flex-col items-center gap-2 text-sm text-gray-200 md:flex-row md:gap-6">
          <a className="underline-offset-4 hover:underline" href="#contact">
            Sponsorship opportunities
          </a>
          <a className="underline-offset-4 hover:underline" href="#contact">
            Event bookings
          </a>
        </div>
      </div>
    </div>
  );
}