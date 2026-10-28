type BrowserFrameProps = {
  src: string;
  alt: string;
  url?: string;
};

/**
 * A flat macOS-style browser mockup that wraps a screenshot, drawn with the
 * same hairline borders as the rest of the site.
 */
export function BrowserFrame({ src, alt, url }: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[#cfc5b6] bg-[#fffaf2]">
      <div className="flex items-center gap-2 border-b border-[#ddd4c5] bg-[#f2ebdd] px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#c8917e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d6b25f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8fa58f]" />
        </span>
        {url ? (
          <span className="ml-2 hidden truncate rounded border border-[#e0d7c7] bg-[#fffaf2] px-3 py-0.5 text-xs text-[#7b857b] sm:inline">
            {url}
          </span>
        ) : null}
      </div>
      {/* The image keeps its natural aspect ratio so screenshots are never
          cropped; overflow-hidden only clips the hover zoom. */}
      <div className="w-full overflow-hidden bg-[#0f1f18]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
      </div>
    </div>
  );
}
