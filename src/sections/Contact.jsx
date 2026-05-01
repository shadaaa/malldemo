import CTAButton from "../components/CTAButton";
import SectionWrapper from "../components/SectionWrapper";

const EMAIL = "leasing@avenuemall.com";

function mailto(subject) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export default function Contact() {
  return (
    <section id="contact">
      <SectionWrapper>
        <h2 className="text-4xl mb-4">Let’s make your next move here</h2>

        <p className="max-w-2xl text-gray-300">
          Whether you’re exploring leasing, sponsorship, or event partnerships,
          we’ll respond with the right deck and next steps.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Leasing</h3>
            <p className="mt-2 text-sm text-gray-300">
              Share your category and preferred unit size.
            </p>
            <CTAButton text="Send leasing inquiry" href={mailto("Avenue Mall — Leasing inquiry")} />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Sponsorship</h3>
            <p className="mt-2 text-sm text-gray-300">
              Tell us your campaign goals and timelines.
            </p>
            <CTAButton
              text="Start sponsorship chat"
              href={mailto("Avenue Mall — Sponsorship opportunity")}
            />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Events</h3>
            <p className="mt-2 text-sm text-gray-300">
              Send expected attendance and preferred dates.
            </p>
            <CTAButton text="Request event booking" href={mailto("Avenue Mall — Event booking")} />
          </div>
        </div>

        <div className="mt-10 text-sm text-gray-300">
          Or email us directly:{" "}
          <a className="underline-offset-4 hover:underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </SectionWrapper>
    </section>
  );
}

