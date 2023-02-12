import PortfolioCard from "./PortfolioCard";

PortfolioCard;
export default function Portfolio() {
  const portfolioItems = [
    {
      imgSrc: "project-findr.png",
      imgAlt: "Image of findr website",
      link: "https://github.com/shinghao/findR",
      heading: "Price Comparison Shopping App",
      subheading: "Front-End Developer",
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
      skills: [],
      isVideo: false,
    },
    {
      imgSrc: "portfolio-breakoutmonkey.gif",
      imgAlt: "Image of breakout monkey game",
      link: "https://drive.google.com/file/d/13ZtYS56-XJGNrk6ln4c5dQkOB__ZNQBj/view?usp=sharing",
      heading: "Breakout Monkey",
      subheading:
        "Designed, developed & published a mobile endless runner game for android with Unity (3-man team) ",
      skills: [],
      isVideo: false,
    },
  ];

  return (
    <section className="m-auto w-10/12 5xl:w-9/12 pt-20 " id="portfolio">
      <h2 className="font-bold text-3xl md:text-4xl mb-2 lg:text-5xl text-center">
        Project Highlights
      </h2>
      <div
        className="pt-8 lg:pt-12 pb-20  bg-gradient-to-r bg-[length:1px] bg-no-repeat bg-center
      from-gray-200 to-gray-200 
      dark:from-gray-500 dark:to-gray-500 "
      >
        <div
          className="grid justify-items-center gap-20
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
