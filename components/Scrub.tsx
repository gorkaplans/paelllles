"use client";

import { useRef, type ReactNode } from "react";
import { useScrub } from "@/lib/scroll";

export function Scrub({
  children,
  className = "",
  mode = "view",
}: {
  children: ReactNode;
  className?: string;
  mode?: "stage" | "view";
}) {
  const ref = useRef<HTMLDivElement>(null);
  useScrub(ref, mode);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
