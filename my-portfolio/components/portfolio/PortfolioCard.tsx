import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import SkillCard from "../SkillCard";
import SkillIcon from "../SkillIcon";
import ToolTip from "../ToolTip";

interface PortfolioCardProps {
  imgSrc: string;
  imgAlt: string;
  link: string;
  heading: string;
  subheading: string;
  skills: string[];
  isVideo: boolean;
}

function RenderImage(prop: PortfolioCardProps) {
  return (
    <AnimationOnScroll
      animateIn="animate__zoomIn"
      animateOut="animate__zoomOut"
      animateOnce
    >
      <div
        className="bg-primary-bg-light dark:bg-primary-bg-dark 
                   max-w-2xl
                  dark:border dark:border-gray-500 border border-gray-200
                  rounded-lg"
      >
        <a href={prop.link}>
          <img src={prop.imgSrc} alt={prop.imgAlt} />
        </a>
        <div className="w-full flex p-6 flex-col gap-3 ">
          <h3
            className="capitalize font-bold grow 
                    dark:text-primary-text-light text-primary-text-dark"
          >
            {prop.heading}
          </h3>
          <p>{prop.subheading}</p>
          {prop.skills.length > 0 && (
            <ul className="flex gap-2 sm:gap-4 place-items-center place-content-start">
              {prop.skills.map((skill, index) => (
                <li
                  key={index}
                  className="w-12 sm:w-14 md:w-16 aspect-square bg-slate-100 dark:bg-gray-400 p-2
                    rounded-2xl sm:rounded-3xl grid items-center justify-items-center"
                >
                  <SkillIcon src={skill} alt={skill}></SkillIcon>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default function PortfolioCard(prop: PortfolioCardProps) {
  return RenderImage(prop);
}
