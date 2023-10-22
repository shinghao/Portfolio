import SkillIcon from "../SkillIcon";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
      className="bg-primary-bg-light dark:bg-primary-bg-dark dark:shadow-none relative group overflow-hidden md:w-11/12 lg:w-10/12 xl:w-3/5 max-w-max
      "
    >
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        animateOut="animate__zoomOut"
        animateOnce
      >
        <img
          className=" object-cover transform duration-700 backdrop-opacity-100"
          src={prop.imgSrc}
          alt={prop.imgAlt}
        />
        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
        <div className="absolute bg-black/80 from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
          <div className="absolute w-full flex">
            <h3
              className="capitalize  font-bold shadow-2xl text-white 
          mt-2 xm:mt-3 xsm:mt-5 sm:mt-6 md:mt-8 
          px-4 xsm:px-6 sm:px-8 lg:px-10
          text-base xxm:text-lg xm:text-xl sm:text-2xl md:text-3xl
          "
            >
              {prop.heading}
            </h3>
          </div>

          <div
            className=" absolute w-full flex flex-col justify-end text-primary-text-light opacity-0 group-hover:opacity-100 duration-100 ease-in-out
                      px-4 xsm:px-6 sm:px-8 lg:px-10
                      lg:py-8  
                      mt-9 xm:mt-12 xsm:mt-14 sm:mt-16 md:mt-20 lg:mt-12"
          >
            <p
              className="leading-relaxed 
          xxm:pb-2 sm:pb-4
          text-base xxm:text-lg xm:text-xl sm:text-2xl md:text-3xl
          "
            >
              {prop.subheading}
            </p>
            {prop.skills.length > 0 && (
              <div className="w-max flex gap-4 bg-gray-400 rounded-xl p-2 place-content-center place-items-center">
                {prop.skills.map((item, index) => {
                  return <SkillIcon skillName={item} key={index} />;
                })}
              </div>
            )}
          </div>
        </div>{" "}
      </AnimationOnScroll>
    </a>
  );
}

function RenderVideo(prop: PortfolioCardProps) {
  return (
    <div className="shadow-skills-card dark:shadow-none relative group overflow-hidden md:w-11/12 lg:w-10/12 xl:w-3/5 bg-primary-bg-dark text-primary-text-light">
      <video
        className=" object-cover transform duration-700 backdrop-opacity-100"
        src={prop.imgSrc}
        controls
      />
      <div
        className="my-4
          px-4 xsm:px-6 sm:px-8 lg:px-10
          text-base xxm:text-lg xm:text-xl sm:text-2xl"
      >
        <h3
          className="capitalize  font-bold shadow-2xl text-white 
          
          "
        >
          {prop.heading}
        </h3>
        <p
          className="leading-relaxed 
      "
        >
          {prop.subheading}
        </p>
        <div className="w-10 xm:w-max">
          {prop.skills.map((item, index) => {
            return <SkillIcon skillName={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioCard(prop: PortfolioCardProps) {
  return prop.isVideo ? RenderVideo(prop) : RenderImage(prop);
}
