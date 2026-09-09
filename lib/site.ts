/**
 * Single source of truth for the handful of strings that appear in metadata,
 * the sitemap, and the contact lines.
 *
 * TODO(andrew): confirm `url` and `email` before the first production deploy —
 * both are used in canonical URLs, the sitemap, and the App Store support
 * contact, so they need to be real.
 */
export const site = {
  name: "Gooder Software",
  legalName: "Gooder Software LLC",
  url: "https://goodersoftware.com",
  email: "support@goodersoftware.com",
  location: "Nashville, TN",
  description:
    "Gooder Software LLC is a one-person software studio in Nashville, Tennessee, publishing small, focused apps for the web and iPhone.",
} as const;
