import { site } from "../data/site.config";
import { MarigoldGarland } from "./Florals";
import { ScrollReveal } from "./ScrollReveal";

function InstagramIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const { couple, displayDate, hashtag, footer } = site;

  return (
    <footer className="px-5 pb-12 pt-8 text-center">
      <ScrollReveal className="mx-auto max-w-md">
        <MarigoldGarland className="mx-auto mb-8 w-full max-w-md" />
        <p className="font-script text-4xl text-accent-deep">
          {couple.partnerA} & {couple.partnerB}
        </p>
        <p className="mt-2 font-display text-lg text-ink">{displayDate}</p>
        <p className="mt-2 text-sm tracking-wide text-gold">{hashtag}</p>
        <p className="mx-auto mt-5 max-w-md text-sm text-muted">{footer.closing}</p>

        {footer.instagram?.length > 0 && (
          <div className="mx-auto mt-6 max-w-md">
            <p className="text-sm text-muted">
              {footer.instagramPrompt}{" "}
              <span className="font-medium text-gold">{hashtag}</span>
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              {footer.instagram.map(({ handle, url }) => (
                <a
                  key={handle}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-page px-3.5 py-1.5 text-xs font-medium text-accent-deep transition-opacity hover:opacity-80"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                  <span>{handle}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <p className="mt-8 text-xs text-muted/80">{footer.crafted}</p>
      </ScrollReveal>
    </footer>
  );
}