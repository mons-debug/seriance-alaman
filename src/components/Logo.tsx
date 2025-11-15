import Image from "next/image";

export default function Logo({ className = "", ...props }: { className?: string } & React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`relative ${className}`} {...props}>
      <Image
        src="/logo.png"
        alt="Seriance Alaman Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}


