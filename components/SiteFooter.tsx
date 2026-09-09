import Link from "next/link";
import { site } from "@/lib/site";

const LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/support" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-rule">
      <div className="shell flex flex-col gap-4 py-8 text-[15px] text-stone sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {site.legalName} — {site.location}
        </p>
        <nav aria-label="Legal and support">
          <ul className="flex items-center gap-5 sm:gap-7">
            {LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="underline-offset-[6px] hover:text-rust-deep hover:underline hover:decoration-rust focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
