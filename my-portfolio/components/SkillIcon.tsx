import Image from "next/image";
import ToolTip from "./ToolTip";
import { useState } from "react";

export default function SkillIcon(props: { src: string; alt: string }) {
  const [showTip, setShowTip] = useState(false);
  const handleMouseEnter = () => {
    setShowTip(true);
  };
  const handleMouseLeave = () => {
    setShowTip(false);
  };
  return (
    <>
      {showTip && <ToolTip text={props.alt}></ToolTip>}
      <Image
        className="w-12 text-center"
        src={`/icons8-${props.src}-96.png`}
        alt={props.alt}
        width={96}
        height={96}
        quality={100}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
}
