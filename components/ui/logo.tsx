import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Proxenixx">
      <Image 
        src="/images/pxrm.png"
        width={90}
        height={90}
        alt="Proxenixx Logo"
      />
    </Link>
  );
}
