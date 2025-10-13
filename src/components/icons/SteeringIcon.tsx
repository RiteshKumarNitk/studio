import Image from "next/image";
import React from "react";

export const SteeringIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/steering.png"
      alt="Steering Icon"
      width={62}
      height={62}
      className={`object-contain ${className}`}
    />
  );
};
