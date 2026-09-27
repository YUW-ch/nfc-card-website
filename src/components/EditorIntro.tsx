"use client";

import { ui } from "@/lib/site";
import { useT } from "@/lib/i18n";

// Small localized header for the editor page (kept separate so the page
// itself can stay a server component).
export function EditorIntro() {
  const t = useT();
  return (
    <div className="section-pad pb-10 sm:pb-14">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-2/60 px-3 py-1 text-xs font-semibold text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {t(ui.editor.badge)}
        </span>
        <h1 className="display mt-5 text-4xl text-ink sm:text-5xl">{t(ui.editor.title)}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{t(ui.editor.intro)}</p>
      </div>
    </div>
  );
}
