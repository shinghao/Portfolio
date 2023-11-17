import mySkillsData from "@/data/mySkills";
import SkillCard from "../SkillCard";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Skills() {
  return (
    <ul className="grid grid-cols-3 gap-4 xxm:grid-cols-4 xm:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-flow-row lg:grid-rows-2 max-w-max m-auto ">
      {mySkillsData.map((skill, index) => (
        <li key={index}>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
            <SkillCard skill={skill}></SkillCard>
          </AnimationOnScroll>
        </li>
      ))}
    </ul>
  );
}
