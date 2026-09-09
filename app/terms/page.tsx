import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply to this website and to apps published by ${site.legalName}.`,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `Terms of Service — ${site.name}`,
    description: `The terms that apply to this website and to apps published by ${site.legalName}.`,
    url: `${site.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <ContentPage title="Terms of Service" updated="February 3, 2026">
      <p>
        These terms are an agreement between you and {site.legalName}, a
        Tennessee limited liability company (&ldquo;we,&rdquo; &ldquo;us&rdquo;).
        They apply when you use this website or any app we publish. By using
        them, you agree to what follows. If you don&apos;t agree, please
        don&apos;t use them.
      </p>

      <h2>Using our apps</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable, revocable
        license to use our apps on devices you own or control, for your own
        purposes. You may not resell them, rent them out, reverse-engineer them
        except where law says you may, or use them to break the law or to
        interfere with anyone else&apos;s use of them.
      </p>
      <p>
        We can change, suspend, or discontinue an app or any part of it. We will
        try to give reasonable notice when a change would meaningfully affect
        how you use something, but we can&apos;t promise any app will be
        available forever.
      </p>

      <h2>Your content</h2>
      <p>
        Some of our apps let you write things — reviews, journal entries, notes.
        That content is yours. You keep ownership of it.
      </p>
      <p>
        Where an app publishes your content to other people (GooderTherapy
        reviews, for example), you give us permission to host, store, display,
        and distribute that content for the purpose of operating the service.
        That permission ends when you delete the content, except for copies in
        routine backups.
      </p>
      <p>
        You are responsible for what you write. Don&apos;t post anything
        unlawful, defamatory, harassing, or that you don&apos;t have the right to
        post. We may remove content that violates these terms or that we are
        legally required to remove.
      </p>

      <h2>Reviews are opinions, not verified facts</h2>
      <p>
        GooderTherapy hosts anonymous reviews written by users. We do not verify
        them, endorse them, or investigate whether they are accurate. They are
        the opinions of the people who wrote them. Use your own judgment.
      </p>

      <h2>Our apps are not professional advice</h2>
      <p>
        This one matters, so it is plain. Stride offers running plans after knee
        surgery; it is not a physical therapist, a surgeon, or a medical device,
        and nothing it tells you is medical advice. Follow your own clinician,
        not the app. TowCheck performs arithmetic on numbers you enter; the
        results are estimates, they depend entirely on the accuracy of your
        inputs, and they do not replace your vehicle&apos;s manufacturer ratings,
        a certified scale, or applicable law. You are responsible for the safe
        and legal operation of your vehicle. GooderTherapy helps you find
        providers; it does not provide therapy or crisis services.
      </p>
      <p>
        <strong>
          If you are in crisis or having thoughts of harming yourself, contact
          your local emergency number, or in the US call or text 988 for the
          Suicide &amp; Crisis Lifeline.
        </strong>
      </p>

      <h2>Purchases and subscriptions</h2>
      <p>
        Paid apps, in-app purchases, and subscriptions are sold and billed by
        Apple through the App Store. Prices, renewals, and refunds are handled
        under Apple&apos;s terms. To cancel a subscription, use Manage
        Subscriptions in your Apple Account settings; deleting an app does not
        cancel a subscription.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <a href="/privacy">Privacy Policy</a> explains what we collect and
        what we do with it. It is part of these terms.
      </p>

      <h2>Our intellectual property</h2>
      <p>
        The apps, this website, the Gooder Software name, and the Gooder
        Software logo belong to us. These terms don&apos;t give you any right to
        use our name or logo.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        Our apps and this website are provided &ldquo;as is&rdquo; and &ldquo;as
        available,&rdquo; without warranties of any kind, express or implied,
        including implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We do not warrant that they
        will be uninterrupted, error-free, or that any result they produce will
        be accurate. Some jurisdictions do not allow the exclusion of implied
        warranties, so parts of this section may not apply to you.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.legalName} is not liable
        for indirect, incidental, special, consequential, or punitive damages,
        or for lost profits, data, or goodwill, arising out of your use of our
        apps or this website. Our total liability for any claim relating to an
        app is limited to the greater of the amount you paid us for that app in
        the twelve months before the claim, or fifty US dollars. Some
        jurisdictions do not allow these limits, so they may not apply to you.
      </p>

      <h2>Indemnity</h2>
      <p>
        You agree to indemnify and hold us harmless from claims arising out of
        content you post or your misuse of our apps, to the extent those claims
        result from your own conduct.
      </p>

      <h2>Apple</h2>
      <p>
        Apple is not a party to these terms and has no responsibility for our
        apps. Apple is, however, a third-party beneficiary of these terms and
        may enforce them against you. Any claim that an app fails to conform to
        a warranty is our responsibility, not Apple&apos;s, and support is
        provided by us, not by Apple.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using our apps at any time by deleting them. We may suspend
        or terminate access if you materially violate these terms. Sections that
        by their nature should survive termination — ownership, disclaimers,
        limitation of liability, and the governing law section below — do.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Tennessee, without
        regard to its conflict-of-laws rules. Disputes will be brought in the
        state or federal courts located in Davidson County, Tennessee, and you
        and we consent to their jurisdiction. Nothing here prevents either of us
        from bringing a claim in small claims court.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms. When we do, we&apos;ll change the date at the
        top of this page. Continuing to use our apps after a change means you
        accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        {site.legalName}, {site.location} —{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </ContentPage>
  );
}
