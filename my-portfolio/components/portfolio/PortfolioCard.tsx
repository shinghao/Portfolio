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
      className="shadow-skills-card dark:shadow-none relative group lg:w-[68rem] lg:h-[40rem] overflow-hidden rounded-3xl"
    >
      <img
        className="rounded-t-3xl object-cover lg:w-[68rem] lg:h-[40rem] transform duration-700 backdrop-opacity-100"
        src={prop.imgSrc}
        alt={prop.imgAlt}
      />
      <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
      <div className="absolute bg-black/60 from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
        <div className="absolute w-full flex">
          <h3 className="capitalize lg:text-3xl font-bold shadow-2xl text-white mt-6 lg:mt-12 px-8 lg:px-20">
            {prop.heading}
          </h3>
        </div>

        <div className=" px-9 lg:px-20 lg:py-16 absolute w-full flex flex-col justify-end mt-16 lg:mt-20 text-primary-text-light opacity-0 group-hover:opacity-100 duration-100 ease-in-out">
          <p className="leading-relaxed lg:pb-4">{prop.subheading}</p>
          <SkillIcon skillName="react" />
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
