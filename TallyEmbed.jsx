import { useEffect } from "react";
import { CONTACT_EMAIL } from "../lib/tally.js";

const EMBED_SRC = "https://tally.so/widgets/embed.js";

export default function TallyEmbed({ formId, title, minHeight = 640 }) {
  useEffect(() => {
    if (!formId) return;
    const load = () => window.Tally?.loadEmbeds?.();
    if (window.Tally) { load(); return; }
    let script = document.querySelector(`script[src="${EMBED_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = EMBED_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", load);
    // If the widget script is blocked, fall back to loading the frames directly.
    const fallback = () =>
      document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((f) => {
        f.src = f.dataset.tallySrc;
      });
    script.addEventListener("error", fallback);
    return () => {
      script.removeEventListener("load", load);
      script.removeEventListener("error", fallback);
    };
  }, [formId]);

  if (!formId) {
    return (
      <div className="border-2 border-charcoal/20 p-8 text-center">
        <p className="font-display text-xl text-charcoal font-bold mb-2">Form coming online shortly</p>
        <p className="font-body text-sm text-charcoal/60">
          In the meantime, email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay hover:underline">{CONTACT_EMAIL}</a>.
        </p>
      </div>
    );
  }

  return (
    <iframe
      key={formId}
      data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
      title={title}
      loading="lazy"
      width="100%"
      height={minHeight}
      frameBorder="0"
      className="block w-full"
    />
  );
}
