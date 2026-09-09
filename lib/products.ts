export type ProductStatus = "shipped" | "in-development";

export type Product = {
  /** Display name, set at the widest point of Archivo's width axis. */
  name: string;
  /** One or two sentences. What the thing does, in plain language. */
  blurb: string;
  /** Where it runs: "Web", "iPhone", etc. */
  platform: string;
  /** Drives the dot: filled rust when shipped, hollow stone when not. */
  status: ProductStatus;
  /** Human-readable status shown next to the dot. */
  statusLabel: string;
  /** Omit while there's nowhere to send people yet; the row renders unlinked. */
  href?: string;
};

/** Adding a fifth product is a single entry here — nothing else to touch. */
export const products: Product[] = [
  {
    name: "GooderTherapy",
    blurb:
      "Anonymous, honest reviews of therapists and other support providers, so finding the right one isn't a guess.",
    platform: "Web",
    status: "shipped",
    statusLabel: "Live",
    href: "https://www.goodertherapy.com/",
  },
  {
    name: "Stride",
    blurb:
      "Return-to-run coaching after knee surgery. Every session adapts to how the last one actually went.",
    platform: "iPhone",
    status: "shipped",
    statusLabel: "On the App Store",
    href: "https://www.striderunningapp.com/",
  },
  {
    name: "TowCheck",
    blurb:
      "Know whether your truck can pull the load before you hitch up. Payload, tongue weight, and the margins that matter.",
    platform: "iPhone",
    status: "shipped",
    statusLabel: "On the App Store",
    href: "https://towcheckapp.com/",
  },
  {
    name: "The Stand",
    blurb:
      "A hunting journal that logs every sit and tells you what your seasons have been quietly teaching you.",
    platform: "iPhone",
    status: "shipped",
    statusLabel: "On the App Store",
    href: "https://www.thestandmobileapp.com/",
  },
];

const COUNT_WORDS = [
  "No",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

/** "Four products" — falls back to digits past ten. */
export function productCountLabel(n: number): string {
  const word = COUNT_WORDS[n] ?? String(n);
  return `${word} ${n === 1 ? "product" : "products"}`;
}
