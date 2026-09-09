import type { Metadata } from "next";
import Image from "next/image";
import { ProductRow } from "@/components/ProductRow";
import { Masthead } from "@/components/Masthead";
import { SiteFooter } from "@/components/SiteFooter";
import { products, productCountLabel } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Masthead />

      <main>
        {/* Hero */}
        <section className="border-b border-rule">
          <div className="shell flex flex-col items-center py-16 text-center row:py-24">
            <Image
              src="/logo-full.png"
              alt="Gooder Software LLC"
              width={977}
              height={801}
              priority
              className="h-auto w-[240px] row:w-[340px]"
            />
            <h1 className="wd-h1 mt-12 max-w-[16ch] text-[40px] leading-[1.05] font-semibold tracking-[-0.025em] text-balance row:text-[64px]">
              Software for specific problems.
            </h1>
            <p className="wd-body mt-7 max-w-[62ch] text-pretty text-stone">
              Gooder Software LLC is a software company in Nashville, Tennessee.
              We build a small number of apps for people with a particular
              problem to solve — a knee to rehab, a trailer to tow, a therapist
              to find — and we&nbsp;keep working on them after they ship.
            </p>
          </div>
        </section>

        {/* Catalog */}
        <section id="apps" aria-labelledby="apps-heading" className="scroll-mt-4">
          <div className="shell py-16 row:py-20">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
              <h2
                id="apps-heading"
                className="wd-heading text-[22px] font-semibold tracking-[-0.02em]"
              >
                What we make
              </h2>
              <p className="wd-body text-[15px] text-stone">
                {productCountLabel(products.length)}
              </p>
            </div>

            <ul className="mt-10 divide-y divide-rule border-t border-b border-rule">
              {products.map((product) => (
                <li key={product.name}>
                  <ProductRow product={product} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-4 border-t border-rule"
        >
          <div className="shell flex flex-col items-center py-16 text-center row:py-20">
            <h2
              id="about-heading"
              className="wd-heading text-[22px] font-semibold tracking-[-0.02em]"
            >
              About
            </h2>
            <div className="mt-8 max-w-[62ch] space-y-6 text-pretty text-stone">
              <p>
                Gooder Software is a one-person studio, run by{" "}
                <a
                  href={site.founderUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-rust-deep underline-offset-[6px] hover:underline hover:decoration-rust focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust"
                >
                  {site.founderName}
                </a>
                . The same person designs, builds, tests, and ships every app
                here, which means there is no roadmap committee and no handoff
                between the person who has the idea and the person who writes
                the code. It also means the catalog stays deliberately short.
              </p>
              <p>
                The products don&apos;t have much in common on the surface, but
                they share a habit: each one replaces a spreadsheet or a guess
                with a few taps. If you can already do it well in your head,
                you don&apos;t need the app. If you&apos;ve been keeping it in a
                notes file for two years, that&apos;s the kind of thing we build.
              </p>
              <p className="text-ink">
                Questions, bugs, or anything else:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-rust-deep underline-offset-[6px] hover:underline hover:decoration-rust focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
