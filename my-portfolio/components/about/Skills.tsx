import mySkillsData from "@/data/mySkills";
import SkillCard from "../SkillCard";

export default function Skills() {
  return (
    <ul className="grid grid-cols-3 gap-4 xm:grid-cols-5 sm:grid-cols-7 lg:grid-flow-row lg:grid-rows-2 max-w-max m-auto ">
      {mySkillsData.map((skill, index) => (
        <li key={index}>
          <SkillCard skill={skill}></SkillCard>
        </li>
      ))}
    </ul>
  );
}
