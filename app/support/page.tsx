import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with any app published by ${site.legalName}.`,
  alternates: { canonical: "/support" },
  openGraph: {
    title: `Support — ${site.name}`,
    description: `Get help with any app published by ${site.legalName}.`,
    url: `${site.url}/support`,
  },
};

export default function SupportPage() {
  return (
    <ContentPage title="Support">
      <p>
        Every app here is supported by the person who built it. There is no
        ticket queue and no chatbot — email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and you&apos;ll get a
        reply, usually within two business days.
      </p>

      <h2>What to include</h2>
      <p>
        It speeds things up considerably if your first message says which app
        you&apos;re using, what iOS version you&apos;re on, what you expected to
        happen, and what happened instead. A screenshot is worth a paragraph.
      </p>

      <h2>The apps</h2>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <strong>{product.name}</strong> — {product.platform},{" "}
            {product.statusLabel.toLowerCase()}.
          </li>
        ))}
      </ul>

      <h2>Deleting your data</h2>
      <p>
        Most of what our iPhone apps store never leaves your device, so deleting
        the app deletes it. For anything held on our servers, email us and
        we&apos;ll take care of it — see the{" "}
        <a href="/privacy">Privacy Policy</a> for details.
      </p>

      <h2>Billing and subscriptions</h2>
      <p>
        Purchases are handled by Apple. To view or cancel a subscription, open
        Settings on your iPhone, tap your name, then Subscriptions. Refunds are
        requested through Apple at{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">
          reportaproblem.apple.com
        </a>
        . We can&apos;t issue App Store refunds ourselves, but tell us what went
        wrong anyway — it&apos;s usually something we can fix.
      </p>

      <h2>Contact</h2>
      <p>
        {site.legalName}, {site.location} —{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </ContentPage>
  );
}
