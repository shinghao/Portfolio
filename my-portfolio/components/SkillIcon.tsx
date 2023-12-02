import Image from "next/image";
import ToolTip from "./ToolTip";
import { useState } from "react";
import skillMap from "@/data/skillMap";

export default function SkillIcon(props: { skill: string }) {
  const skillText = skillMap[props.skill];
  const [showTip, setShowTip] = useState(false);
  const handleMouseEnter = () => {
    setShowTip(true);
  };
  const handleMouseLeave = () => {
    setShowTip(false);
  };
  return (
    <>
      {showTip && <ToolTip text={skillText}></ToolTip>}
      <Image
        className="w-12 text-center"
        src={`/icons8-${props.skill}-96.png`}
        alt={skillText}
        width={96}
        height={96}
        quality={100}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
}
