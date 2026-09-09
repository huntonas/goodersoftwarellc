import { Masthead } from "@/components/Masthead";
import { SiteFooter } from "@/components/SiteFooter";

export function ContentPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Masthead />
      <main>
        <div className="shell py-16 row:py-20">
          <h1 className="wd-h1 max-w-[20ch] text-[36px] leading-[1.1] font-semibold tracking-[-0.025em] row:text-[48px]">
            {title}
          </h1>
          {updated ? (
            <p className="wd-body mt-5 text-[15px] text-stone">
              Last updated {updated}
            </p>
          ) : null}
          <div className="prose-legal mt-12 max-w-[68ch]">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
