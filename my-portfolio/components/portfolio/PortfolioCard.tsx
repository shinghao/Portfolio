import SkillIcon from "../SkillIcon";
import Image from "next/image";

interface PortfolioCardProps {
  imgSrc: string;
  imgAlt: string;
  link: string;
  heading: string;
  subheading: string;
  skills: string;
}

export default function PortfolioCard(prop: PortfolioCardProps) {
  return (
    <a
      href={prop.link}
      className="shadow-skills-card dark:shadow-none relative group overflow-hidden md:w-11/12 lg:w-10/12 xl:w-3/5"
    >
      <img
        className="rounded-t-3xl object-cover transform duration-700 backdrop-opacity-100"
        src={prop.imgSrc}
        alt={prop.imgAlt}
      />
      <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
      <div className="absolute bg-black/60 from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
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
          <div className="w-10 xm:w-max">
            <SkillIcon skillName="react" />
          </div>
        </div>
      </div>
    </a>
    /*  <a
      href="https://github.com/shinghao/findR"
      target="_blank"
      className="shadow-skills-card rounded-3xl w-[60rem] relative group overflow-hidden"
    >
      <Image
        src="project-findr.png"
        alt="Image of findr website"
        className="rounded-t-3xl w-[60rem] group-hover:blur-[2px] transition-all duration-200 ease-out"
      />
      <div className="inset-0 absolute flex flex-col justify-end bg-black/60 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out px-20 py-10 text-primary-text-light">
        <h3 className="text-3xl font-bold">Price Comparison Shopping App</h3>
        <p className="leading-relaxed">Front-end Web Development</p>
        <p className="text-xl leading-relaxed">ReactJS</p>
      </div>
    </a> */
  );
}
