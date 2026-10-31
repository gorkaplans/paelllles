"use client";

import { useEffect, type RefObject } from "react";

type Mode = "stage" | "view";

type Entry = {
  el: HTMLElement;
  mode: Mode;
  last: number;
  onProgress?: (p: number) => void;
};

const entries = new Set<Entry>();
let raf = 0;
let listening = false;

const clamp = (n: number) => Math.min(1, Math.max(0, n));

function motionEnabled() {
  return document.documentElement.classList.contains("motion");
}

function tick() {
  raf = 0;
  const vh = window.innerHeight;

  for (const entry of entries) {
    const rect = entry.el.getBoundingClientRect();
    const p =
      entry.mode === "stage"
        ? clamp(-rect.top / Math.max(1, rect.height - vh))
        : clamp((vh - rect.top) / (vh + rect.height));
    if (p === entry.last) continue;
    entry.last = p;
    entry.el.style.setProperty("--p", p.toFixed(4));
    entry.onProgress?.(p);
  }

  const root = document.documentElement;
  const max = Math.max(1, root.scrollHeight - vh);
  root.style.setProperty("--page-p", clamp(window.scrollY / max).toFixed(4));

  // Sense `break`: si n'hi ha de niades, mana la més interior.
  for (const section of document.querySelectorAll<HTMLElement>("[data-tone]")) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 40 && rect.bottom > 40) {
      const ample = window.innerWidth >= 768 && section.dataset.toneMd;
      root.dataset.navTone = ample || section.dataset.tone;
      root.dataset.navHero = String(section.classList.contains("hero"));
    }
  }
}

export function requestTick() {
  if (!raf) raf = requestAnimationFrame(tick);
}

function onResize() {
  for (const entry of entries) entry.last = -1;
  requestTick();
}

function listen() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", onResize);
}

/** Publica el progrés de scroll de l'element com a `--p` (de 0 a 1). */
export function useScrub<T extends HTMLElement>(
  ref: RefObject<T | null>,
  mode: Mode,
  onProgress?: (p: number) => void,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !motionEnabled()) return;
    const entry: Entry = { el, mode, last: -1, onProgress };
    entries.add(entry);
    listen();
    requestTick();
    return () => {
      entries.delete(entry);
    };
  }, [ref, mode, onProgress]);
}

/** Només la capçalera: to de color i progrés de pàgina, sense cap element lligat. */
export function usePageScroll() {
  useEffect(() => {
    if (!motionEnabled()) return;
    listen();
    requestTick();
  }, []);
}
