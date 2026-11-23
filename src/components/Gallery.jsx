import { lazy, Suspense, useCallback, useState } from "react";
import { site } from "../data/site.config";
import { asset } from "../lib/asset";
import { ScrollReveal } from "./ScrollReveal";

const Lightbox = lazy(() => import("./Lightbox"));

function Row({ photos, reverse, onOpen }) {
  const loop = [...photos, ...photos];
  const trackClass = reverse ? "marquee-track-reverse" : "marquee-track";

  return (
    <div className="marquee overflow-hidden">
      <div className={`flex w-max gap-3 ${trackClass}`}>
        {loop.map((photo, index) => (
          <button
            key={`${photo.src}-${index}`}
            type="button"
            className="shrink-0 overflow-hidden rounded-2xl"
            onClick={() => onOpen(photo)}
          >
            <img
              src={asset(photo.src)}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
              className="h-40 w-56 object-cover sm:h-48 sm:w-72"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const photos = site.gallery.photos;
  const midpoint = Math.ceil(photos.length / 2);
  const rowA = photos.slice(0, midpoint);
  const rowB = photos.slice(midpoint);
  const [active, setActive] = useState(null);

  const onOpen = (photo) => {
    setActive(photos.findIndex((item) => item.src === photo.src));
  };

  const onClose = useCallback(() => setActive(null), []);
  const onPrev = useCallback(
    () => setActive((current) => (current + photos.length - 1) % photos.length),
    [photos.length],
  );
  const onNext = useCallback(
    () => setActive((current) => (current + 1) % photos.length),
    [photos.length],
  );

  return (
    <section id="gallery" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <p className="font-display text-sm tracking-[0.28em] text-gold uppercase">
            {site.gallery.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            {site.gallery.heading}
          </h2>
        </ScrollReveal>
        <div className="mt-10 space-y-4">
          <ScrollReveal delay={0.08} distance={24}>
            <Row photos={rowA} onOpen={onOpen} />
          </ScrollReveal>
          <ScrollReveal delay={0.16} distance={24} direction="left">
            <Row photos={rowB} reverse onOpen={onOpen} />
          </ScrollReveal>
        </div>
      </div>
      {active !== null && (
        <Suspense fallback={null}>
          <Lightbox
            photos={photos}
            index={active}
            onClose={onClose}
            onPrev={onPrev}
            onNext={onNext}
          />
        </Suspense>
      )}
    </section>
  );
}
