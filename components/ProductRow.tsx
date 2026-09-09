import type { Product } from "@/lib/products";

function StatusDot({ status }: { status: Product["status"] }) {
  return (
    <span
      aria-hidden="true"
      className={
        status === "shipped"
          ? "inline-block size-[7px] shrink-0 rounded-full bg-rust"
          : "inline-block size-[7px] shrink-0 rounded-full border border-stone"
      }
    />
  );
}

/**
 * The row's chrome (background, focus bar) sits on the outer element so it
 * bleeds past the content column; the inner grid is what slides right on hover.
 */
const OUTER =
  "block -mx-4 px-4 py-7 transition-colors duration-150 row:-mx-5 row:px-5";
const LINK_OUTER =
  "hover:bg-paper-sunk focus-visible:bg-paper-sunk focus-visible:outline-none focus-visible:shadow-[inset_3px_0_0_0_var(--rust)]";
const GRID =
  "grid grid-cols-1 gap-x-8 gap-y-2 transition-transform duration-150 row:grid-cols-[minmax(0,13rem)_minmax(0,1fr)_minmax(0,10.5rem)]";

export function ProductRow({ product }: { product: Product }) {
  const inner = (
    <div
      className={
        product.href
          ? `${GRID} group-hover:translate-x-[14px] group-focus-visible:translate-x-[14px]`
          : GRID
      }
    >
      <h3 className="wd-product text-[24px] leading-tight font-semibold tracking-[-0.02em] group-hover:text-rust group-focus-visible:text-rust">
        {product.name}
      </h3>
      <p className="wd-body text-stone">{product.blurb}</p>
      <p className="wd-body flex items-center gap-2 text-[15px] text-stone row:flex-col row:items-start row:gap-1.5">
        <span>{product.platform}</span>
        <span className="flex items-center gap-2">
          <StatusDot status={product.status} />
          {product.statusLabel}
        </span>
      </p>
    </div>
  );

  if (!product.href) {
    return <div className={OUTER}>{inner}</div>;
  }

  const external = product.href.startsWith("http");

  return (
    <a
      href={product.href}
      className={`group ${OUTER} ${LINK_OUTER}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {inner}
    </a>
  );
}
