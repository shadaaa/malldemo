export default function SectionWrapper({ children }) {
  return (
    <section className="bg-black px-6 py-20 text-white md:px-16">
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
