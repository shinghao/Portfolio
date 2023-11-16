import skillMap from "@/data/skillMap";
import SkillIcon from "./SkillIcon";

export default function SkillCard(props: { skill: string }) {
  const skillText = skillMap[props.skill];
  return (
    <div
      className="bg-slate-100 dark:bg-gray-400 shadow-skills-card dark:shadow-none 
                  rounded-3xl grid items-center justify-items-center
                  w-16 h-16"
    >
      <SkillIcon src={props.skill} alt={skillText}></SkillIcon>
    </div>
  );
}
