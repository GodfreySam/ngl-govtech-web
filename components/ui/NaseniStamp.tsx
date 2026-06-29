import Image from "next/image";

interface NaseniStampProps {
  className?: string;
}

export default function NaseniStamp({ className = "" }: NaseniStampProps) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/naseni-stamp.png"
        alt="A NASENI Company"
        width={1596}
        height={304}
        className="h-16 w-auto object-contain sm:h-20"
      />
    </div>
  );
}
