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
    <a
      href={prop.link}
      className="bg-primary-bg-light dark:bg-primary-bg-dark 
                  relative group overflow-hidden max-w-2xl
                  dark:border dark:border-gray-500 border border-gray-200
                  rounded-lg"
    >
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        animateOut="animate__zoomOut"
        animateOnce
      >
        <img src={prop.imgSrc} alt={prop.imgAlt} />
        <div className="absolute bg-black/80 from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
          <div className="absolute w-full flex">
            <h3
              className="capitalize  font-bold shadow-2xl text-white 
          mt-2 xm:mt-3 xsm:mt-5 sm:mt-6 md:mt-8 
          px-4 xsm:px-6 sm:px-8 lg:px-10
          text-base xxm:text-lg xm:text-xl sm:text-2xl md:text-3xl"
            >
              {prop.heading}
            </h3>
          </div>

          <div
            className="absolute w-full flex flex-col justify-end text-primary-text-light 
                      opacity-0 group-hover:opacity-100 duration-100 ease-in-out
                      px-4 xsm:px-6 sm:px-8 lg:px-10 lg:py-8  
                      mt-9 xm:mt-12 xsm:mt-14 sm:mt-16 md:mt-20 lg:mt-12"
          >
            <p className="sm:pt-2">{prop.subheading}</p>
            {prop.skills.length > 0 && (
              <ul className="w-full flex gap-2 sm:gap-4 place-items-center place-content-start pt-2 sm:pt-6">
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
    </a>
  );
}

export default function PortfolioCard(prop: PortfolioCardProps) {
  return RenderImage(prop);
}
