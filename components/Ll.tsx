import { Fragment } from "react";

/**
 * Compon un text de marca: cada "ll" es dibuixa amb les LL altes del logotip.
 * Són formes CSS perquè les astes es puguin allargar amb `--grow` sense deformar el peu.
 */
export function Ll({ children }: { children: string }) {
  return children.split(/(\s+)/).map((word, i) => {
    if (!/ll/i.test(word)) return <Fragment key={i}>{word}</Fragment>;
    return (
      <span key={i} className="whitespace-nowrap">
        {word.split(/(ll)/i).map((part, j) =>
          /^ll$/i.test(part) ? (
            <span key={j} className="ll">
              <span className="sr-only">{part}</span>
              <span className="ell" aria-hidden="true" />
              <span className="ell" aria-hidden="true" />
            </span>
          ) : (
            <Fragment key={j}>{part}</Fragment>
          ),
        )}
      </span>
    );
  });
}
