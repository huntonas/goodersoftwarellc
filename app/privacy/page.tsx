import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} handles information in its apps and on this site.`,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `Privacy Policy — ${site.name}`,
    description: `How ${site.legalName} handles information in its apps and on this site.`,
    url: `${site.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <ContentPage title="Privacy Policy" updated="February 3, 2026">
      <p>
        This policy covers this website and every app published by{" "}
        {site.legalName} — {products.map((p) => p.name).join(", ")}. It is
        written to be read, not to be survived. If something here is unclear,
        email <a href={`mailto:${site.email}`}>{site.email}</a> and it will get
        fixed.
      </p>
      <p>
        The short version: we collect as little as we can get away with, most of
        what our iPhone apps record never leaves your device, and we do not sell
        your information to anyone, ever.
      </p>

      <h2>Who we are</h2>
      <p>
        {site.legalName} is a Tennessee limited liability company based in{" "}
        {site.location}. For the purposes of privacy law, we are the controller
        of the information described below. You can reach us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>This website</h2>
      <p>
        This site is static. It has no accounts, no login, no comment forms, and
        no advertising or tracking cookies. Our host records standard server
        logs — IP address, browser user agent, requested page, timestamp — for
        security and basic traffic counts.
      </p>
      <p className="todo">
        Confirm the analytics answer. If Vercel Web Analytics (or anything else)
        is enabled on this project, name it here, say what it collects, and link
        its privacy policy. If nothing is enabled, replace this note with a
        sentence saying the site uses no analytics at all.
      </p>

      <h2>What each app collects</h2>
      <p>
        The apps are unrelated to each other and handle information differently,
        so they are described separately.
      </p>

      <h3>GooderTherapy</h3>
      <p>
        GooderTherapy hosts anonymous reviews of therapists and other support
        providers, which means it necessarily stores what you write on our
        servers. Reviews are published without your name attached.
      </p>
      <p className="todo">
        Fill in GooderTherapy specifics: whether an account (and therefore an
        email address) is required to post; what is stored with a review beyond
        its text; how long reviews are retained; whether IP addresses are logged
        with submissions for abuse prevention; and how a review author can have
        their own review removed.
      </p>

      <h3>Stride</h3>
      <p>
        Stride plans return-to-run sessions after knee surgery, so it works with
        information about your training and your recovery.
      </p>
      <p className="todo">
        Fill in Stride specifics: exactly what is recorded (session history,
        pain or effort ratings, surgery date, body metrics); whether any of it
        leaves the device; whether it syncs through iCloud/CloudKit; and whether
        the app reads from or writes to Apple Health. Health data has its own
        App Store disclosure rules — if HealthKit is used, say what is read,
        what is written, and state plainly that Health data is never used for
        advertising and never sold.
      </p>

      <h3>TowCheck</h3>
      <p>
        TowCheck calculates towing margins from vehicle and trailer numbers you
        enter. The math runs on your iPhone.
      </p>
      <p className="todo">
        Confirm TowCheck specifics: that saved vehicles, trailers, and
        configurations stay on the device; whether they sync via iCloud; and
        whether any vehicle lookup hits a network service.
      </p>

      <h3>The Stand</h3>
      <p>
        The Stand is a hunting journal. It is still in development, and this
        section will be finalized before it ships.
      </p>
      <p className="todo">
        Fill in The Stand specifics before release: whether sits are tagged with
        location (and if so, whether precise location is stored on-device only —
        stand locations are sensitive to hunters); whether weather data is
        fetched from a third party using your coordinates; and whether journal
        entries sync or stay local.
      </p>

      <h2>Data that stays on your device</h2>
      <p>
        Where a section above says information stays on your device, it means
        exactly that: it is stored in the app&apos;s own storage on your iPhone,
        we cannot see it, and we cannot retrieve it for you. It is included in
        your encrypted iPhone backups if you make them, and deleting the app
        deletes it.
      </p>

      <h2>Third-party services</h2>
      <p>
        We use a small number of outside services to run the apps and the site.
        They receive only what they need to do their job.
      </p>
      <ul>
        <li>
          <strong>Vercel</strong> — hosts this website and serves its pages.
          Server logs as described above.
        </li>
        <li>
          <strong>Apple</strong> — distributes the iPhone apps through the App
          Store and provides App Store Connect. Apple gives us aggregate,
          anonymous download and crash statistics. Apple&apos;s handling of your
          Apple Account is governed by Apple&apos;s privacy policy, not ours.
        </li>
      </ul>
      <p className="todo">
        Add every remaining processor with a one-line description of what it
        receives: the GooderTherapy database and email provider, any crash or
        analytics SDK compiled into the iPhone apps (Crashlytics, Sentry,
        TelemetryDeck, RevenueCat, etc.), and any weather or mapping API. Each
        one that receives user data must be listed here, and each must match the
        App Privacy answers in App Store Connect.
      </p>

      <h2>What we never do</h2>
      <ul>
        <li>We do not sell or rent your personal information.</li>
        <li>
          We do not share it with advertisers or use it to target ads, in the
          apps or anywhere else.
        </li>
        <li>We do not build advertising profiles or track you across other apps and websites.</li>
      </ul>

      <h2>Children</h2>
      <p>
        None of our apps are directed at children under 13, and we do not
        knowingly collect personal information from them. If you believe a child
        has provided us information, email us and we will delete it.
      </p>

      <h2>Your choices and your rights</h2>
      <p>
        Depending on where you live, you may have the right to request a copy of
        the personal information we hold about you, ask us to correct it, or ask
        us to delete it. We honor these requests regardless of where you live.
      </p>
      <p>
        For information that lives only on your device, you are already in
        control: delete the entry, or delete the app. For anything on our
        servers, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> from the address
        associated with your account, or describe the content clearly enough for
        us to find it. We&apos;ll respond within 30 days.
      </p>

      <h2>Security</h2>
      <p>
        Information we hold is transmitted over encrypted connections and stored
        with access limited to what running the service requires. No system is
        perfectly secure, and we won&apos;t claim otherwise.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes in a way that materially affects how we handle
        your information, we will update the date at the top of this page and,
        where an app has a way to reach you, note it in the app.
      </p>

      <h2>Contact</h2>
      <p>
        {site.legalName}, {site.location} —{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p className="todo">
        Some jurisdictions expect a physical mailing address on a privacy
        policy, and App Store Connect asks for one on the account. Decide
        whether to list the LLC&apos;s registered address here.
      </p>
    </ContentPage>
  );
}
