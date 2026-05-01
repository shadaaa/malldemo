export default function CTAButton({ text, href }) {
  const className =
    "mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200";

  if (href) {
    return (
      <a className={className} href={href}>
        {text}
      </a>
    );
  }

  return (
    <button className={className} type="button">
      {text}
    </button>
  );
}
