import Image from "next/image";

/**
 * Una foto de marca o, mentre no n'hi hagi (`src` buit), un espai reservat
 * que diu quina imatge hi va.
 */
export function Foto({
  src,
  alt,
  sizes,
  className = "",
  imageClassName = "object-cover",
}: {
  src?: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <span className={`relative block overflow-hidden ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} className={imageClassName} />
      ) : (
        <span className="foto-buida" role="img" aria-label={`Foto pendent: ${alt}`}>
          <span className="foto-buida__marca mask-paellera" aria-hidden="true" />
          <span className="foto-buida__text" aria-hidden="true">
            foto pendent: {alt}
          </span>
        </span>
      )}
    </span>
  );
}
