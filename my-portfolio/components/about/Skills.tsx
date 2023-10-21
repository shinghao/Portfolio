import skillsData from "@/data/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <ul className="grid grid-cols-3 gap-6 xm:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 sm:gap-6 lg:grid-flow-row lg:grid-rows-2 max-w-max m-auto ">
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
