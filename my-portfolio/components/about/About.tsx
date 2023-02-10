import SkillCard from "@/components/about/SkillCard";
import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen px-[12.8rem] py-40" id="about">
      <div className="grid grid-cols-10 gap-x-8">
        <h2 className="col-span-6 text-5xl font-bold pb-16">
          Nice to meet you!
        </h2>
        <p className=" col-span-7 pr-8">
          Hi, I’m Soh Shing Hao, a year 3 Computer Science undergraduate with a
          passion for building impactful products. I love solving problems and
          learning new technologies. <br /> <br /> I am currently seeking
          internship opportunities in web and software development.&nbsp;
          <a
            href="mailto:sohshinghao@gmail.com"
            className="bg-primary-blue underline font-semibold text-primary-btn-blue"
          >
            Contact Me!
          </a>
        </p>
        <div className="col-start-8 row-start-1 row-span-3 self-center relative bg-gradient-to-b from-primary-btn-blue rounded-full w-[30rem] h-[30rem]">
          <Image
            src="shing-memoji-laptop.PNG"
            alt="Avatar of boy using macbook"
            className="rounded-full"
          />
        </div>
        <hr className="row-start-3 col-span-7 h-px my-16 bg-gray-200"></hr>
      </div>
      <div>
        <h3 className="text-4xl mt-4 mb-16 text-center font-bold">
          Technologies:
        </h3>
        <ul className="grid grid-cols-5 gap-16 max-w-max m-auto ">
          <SkillCard src="icons8-html-5-96.PNG" text="HTML" />
          <SkillCard src="icons8-css3-96.PNG" text="CSS" />
          <SkillCard src="icons8-javascript-96.PNG" text="JavaScript" />
          <SkillCard src="icons8-react-native-96.PNG" text="React" />
          <SkillCard src="icons8-tailwindcss-96.PNG" text="Tailwindcss" />
          <SkillCard src="icons8-c++-96.PNG" text="C++" />
          <SkillCard src="icons8-python-96.PNG" text="Python" />
          <SkillCard src="icons8-git-96.PNG" text="Git" />
          <SkillCard src="icons8-unity-96.PNG" text="Unity" />
          <SkillCard src="icons8-adobe-photoshop-96.PNG" text="Photoshop" />
        </ul>
      </div>
    </section>
  );
}
