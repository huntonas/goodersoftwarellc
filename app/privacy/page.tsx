import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

/*
 * Written to describe only what can be stated accurately today. Before an app
 * ships a feature that changes how it handles data — Apple Health in Stride,
 * stand locations in The Stand, an account system in GooderTherapy, or any new
 * SDK or API that receives user data — add it to the matching section below
 * and to the App Privacy answers in App Store Connect. The two must agree.
 */

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
        The short version: we collect as little as we can, we do not sell your
        information to anyone, and we never use it to advertise to you.
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
        This site is static. It has no accounts, no login, no comment forms, no
        advertising, and no analytics — we do not measure your visit at all. It
        sets no cookies. Our host records standard server logs, including IP
        address, browser user agent, requested page, and timestamp, for security
        and to keep the site running.
      </p>

      <h2>What each app collects</h2>
      <p>
        The apps are unrelated to each other and handle information
        differently, so they are described separately.
      </p>

      <h3>GooderTherapy</h3>
      <p>
        GooderTherapy hosts anonymous reviews of therapists and other support
        providers, so it necessarily stores what you write on our servers.
        Reviews are published without your name attached. If you want a review
        you wrote taken down, email us and describe it well enough for us to
        find it, and we will remove it.
      </p>

      <h3>Stride</h3>
      <p>
        Stride works with the training and recovery information you record — the
        sessions you complete and how each one went — and uses it to adapt the
        next one. This is information you enter yourself; Stride does not go
        looking for anything else on your phone.
      </p>

      <h3>TowCheck</h3>
      <p>
        TowCheck calculates towing margins from the vehicle and trailer numbers
        you enter. The math runs on your iPhone, and the vehicles and trailers
        you save are stored there.
      </p>

      <h3>The Stand</h3>
      <p>
        The Stand is a hunting journal. It records the sits you log and the
        notes you write about them — this is information you enter yourself,
        and the app does not collect anything you haven&apos;t given it.
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
        We use a small number of outside services to run the apps and this site.
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

      <h2>What we never do</h2>
      <ul>
        <li>We do not sell or rent your personal information.</li>
        <li>
          We do not share it with advertisers or use it to target ads, in the
          apps or anywhere else.
        </li>
        <li>
          We do not build advertising profiles or track you across other apps
          and websites.
        </li>
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
        servers, email <a href={`mailto:${site.email}`}>{site.email}</a> and
        describe the content clearly enough for us to find it. We&apos;ll
        respond within 30 days.
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
    </ContentPage>
  );
}
