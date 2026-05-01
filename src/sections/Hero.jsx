import CTAButton from "../components/CTAButton";

export default function Hero() {
  return (
    <div className="h-screen relative">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
        src="/videos/hero.mp4"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50 text-center">
        <h1 className="text-6xl font-bold">The Future of Retail</h1>

        <p className="mt-4 text-lg text-gray-300">
          A global destination for retail, entertainment, and experiences.
        </p>

        <CTAButton text="Explore Opportunities" />
      </div>
    </div>
  );
}