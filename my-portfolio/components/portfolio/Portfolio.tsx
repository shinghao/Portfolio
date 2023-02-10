import PortfolioCard from "./PortfolioCard";

PortfolioCard;
export default function Portfolio() {
  const portfolioItems = [
    {
      imgSrc: "project-findr.png",
      imgAlt: "Image of findr website",
      link: "https://github.com/shinghao/findR",
      heading: "Price Comparison Shopping App",
      subheading: "Front-end Web Development",
      skills: "react",
    },
  ];

  return (
    <section className="min-h-screen px-[12.8rem] py-40" id="portfolio">
      <h2 className="text-5xl font-bold pb-16">Project Highlights</h2>
      <div className="grid justify-items-center gap-20">
        {portfolioItems.map((item, index) => {
          return (
            <PortfolioCard
              imgSrc={item["imgSrc"]}
              imgAlt={item["imgAlt"]}
              link={item["link"]}
              heading={item["heading"]}
              subheading={item["subheading"]}
              skills={item["skills"]}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}
