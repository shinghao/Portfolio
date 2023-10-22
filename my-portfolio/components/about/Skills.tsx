import skillsData from "@/data/mySkills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <ul className="grid grid-cols-3 gap-4 xm:grid-cols-5 sm:grid-cols-7 lg:grid-flow-row lg:grid-rows-2 max-w-max m-auto ">
      {skillsData.map((skill, index) => (
        <li key={index}>
          <SkillCard
            src={`/icons8-${skill.src}-96.png`}
            text={skill.text}
          ></SkillCard>
        </li>
      ))}
    </ul>
  );
}
