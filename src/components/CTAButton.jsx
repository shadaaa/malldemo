export default function CTAButton({ text }) {
  return (
    <button className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
      {text}
    </button>
  );
}
