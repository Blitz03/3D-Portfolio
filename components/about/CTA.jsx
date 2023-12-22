import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta pb-10">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" /> Let's build
        something together!
      </p>
      <Link href="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
}
