import Image from "next/image";

export function Paellera({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/Illustration.svg"
      alt=""
      aria-hidden="true"
      width={797}
      height={690}
      priority={priority}
      className={className}
    />
  );
}
