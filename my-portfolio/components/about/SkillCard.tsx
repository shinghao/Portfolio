import Image from "next/image";
import { useState } from "react";
import ToolTip from "../ToolTip";

export default function SkillCard(props: { src: string; text: string }) {
  const [showTip, setShowTip] = useState(false);
  const handleMouseEnter = () => {
    setShowTip(true);
  };
  const handleMouseLeave = () => {
    setShowTip(false);
  };
  return (
    <div
      className="bg-slate-100 dark:bg-gray-400 shadow-skills-card dark:shadow-none 
                  rounded-xl grid items-center justify-items-center
                  w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showTip && <ToolTip text={props.text}></ToolTip>}
      <Image
        className="w-12 sm:w-14 lg:w-20 text-center"
        src={props.src}
        alt={props.text}
        width={96}
        height={96}
      />
    </div>
  );
}
