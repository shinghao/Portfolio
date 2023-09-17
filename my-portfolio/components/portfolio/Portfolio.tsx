import { AnimationOnScroll } from "react-animation-on-scroll";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  const portfolioItems = [
    {
      imgSrc: "project-where-to-binge.png",
      imgAlt: "Image of where-to-binge website",
      link: "https://where-to-binge.vercel.app/",
      heading: "Where to Binge (WIP)",
      subheading:
        "Discover the best streaming options for your favorite content!",
      skills: ["react", "next", "tailwind", "django", "postgresql", "aws"],
      isVideo: false,
    },
    {
      imgSrc: "project-findr.png",
      imgAlt: "Image of findr website",
      link: "https://github.com/shinghao/findR",
      heading: "Price Comparison Shopping App",
      subheading:
        "Compare prices of searched item across various ecommerce platforms",
      skills: ["react"],
      isVideo: false,
    },
    {
      imgSrc: "project-lioncity.jpg",
      imgAlt: "Image of lion city game",
      link: "https://drive.google.com/file/d/1Frai_LPkpidQwv44x_XljvhJSYWAe4vy/view?usp=share_link",
      heading: "Lion City",
      subheading:
        "Designed & developed a city-building game to increase awareness on the Total Defense pillars with Unity (5-man team) ",
      skills: ["unity", "c#"],
      isVideo: false,
    },
  ];

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
          {portfolioItems.map((item, index) => {
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
