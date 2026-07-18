type BrowserFrameProps = {
  src: string;
  alt: string;
  url?: string;
};

/**
 * A hard-edged macOS-style browser mockup that wraps a screenshot, matching the
 * site's editorial frame + offset-shadow language. The shadow deepens when the
 * frame sits inside a `group` card that is being hovered.
 */
export function BrowserFrame({ src, alt, url }: BrowserFrameProps) {
  return (
    <div className="overflow-hidden border border-[#1f2a24] bg-[#fffaf2] shadow-[8px_8px_0_#ded4c6] transition-shadow duration-300 group-hover:shadow-[14px_14px_0_#ded4c6]">
      <div className="flex items-center gap-2 border-b border-[#d9d0c2] bg-[#f2ebdd] px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#c8917e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d6b25f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8fa58f]" />
        </span>
        {url ? (
          <span className="ml-2 hidden truncate border border-[#e0d7c7] bg-[#fffaf2] px-3 py-0.5 text-xs text-[#7b857b] sm:inline">
            {url}
          </span>
        ) : null}
      </div>
      <div className="aspect-[16/10] w-full overflow-hidden bg-[#0f1f18]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}
