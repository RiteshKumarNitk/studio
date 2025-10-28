import Image from "next/image";
import React from "react";

export const TyreIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/Tyre.png"
      alt="Tyre Icon"
      width={90}
      height={90}
      className={`object-contain ${className}`}
    />
  );
};
