import Image from "next/image";
import Link from "next/link";

const NAV = [
  { label: "Apps", href: "/#apps" },
  { label: "About", href: "/#about" },
  { label: "Support", href: "/support" },
];

export function Masthead() {
  return (
    <header className="border-b border-rule">
      <div className="shell flex items-center justify-between gap-6 py-5">
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={494}
            height={484}
            priority
            className="h-[30px] w-auto"
          />
          <span className="wd-heading sr-only text-[17px] font-semibold tracking-[-0.02em] whitespace-nowrap group-hover:text-rust xs:not-sr-only">
            Gooder Software
          </span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 sm:gap-7">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="wd-body text-[15px] text-stone underline-offset-[6px] hover:text-rust-deep hover:underline hover:decoration-rust focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust sm:text-[16px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
