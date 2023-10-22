import { AnimationOnScroll } from "react-animation-on-scroll";
import PortfolioCard from "./PortfolioCard";
import portfolioProjectsData from "@/data/portfolioProjects";

export default function Portfolio() {
  return (
    <section className=" m-auto w-10/12 5xl:w-9/12 pt-20 " id="portfolio">
      <h2 className="font-bold text-3xl md:text-4xl mb-2 lg:text-5xl text-center">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          Project Highlights
        </AnimationOnScroll>
      </h2>
      <div
        className="pt-8 lg:pt-12 pb-28  bg-gradient-to-r bg-[length:1px] bg-no-repeat bg-center
      from-gray-300 to-gray-300 
      dark:from-gray-500 dark:to-gray-500 "
      >
        <div
          className="grid justify-items-center gap-20 lg:gap-32 2xl:gap-36
      "
        >
          {portfolioProjectsData.map((item, index) => {
            return (
              <PortfolioCard
                imgSrc={item["imgSrc"]}
                imgAlt={item["imgAlt"]}
                link={item["link"]}
                heading={item["heading"]}
                subheading={item["subheading"]}
                skills={item["skills"]}
                isVideo={item["isVideo"]}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
