/**
 * Single source of truth for the handful of strings that appear in metadata,
 * the sitemap, and the contact lines.
 */
export const site = {
  name: "Gooder Software",
  legalName: "Gooder Software LLC",
  /** Canonical host. The apex 308-redirects to www, so www is the real one. */
  url: "https://www.goodersoftwarellc.com",
  email: "admin@goodersoftwarellc.com",
  location: "Nashville, TN",
  /** Andrew's personal site, linked from the About section. */
  founderUrl: "https://www.andrewhunton.me/",
  founderName: "Andrew Hunton",
  description:
    "Gooder Software LLC is a one-person software studio in Nashville, Tennessee, publishing small, focused apps for the web and iPhone.",
} as const;
