import SkillCard from "@/components/about/SkillCard";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function About() {
  return (
    <section
      className="min-h-screen m-auto w-10/12 5xl:w-9/12 py-20"
      id="about"
    >
      <div
        className="flex flex-col
                  gap-y-8 xm:gap-y-10 sm:gap-y-12 md:gap-y-12 lg:gap-y-0
                  lg:grid lg:grid-cols-3"
      >
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:col-span-2 justify-self-center">
          Nice to meet you!
        </h2>
        <div
          className="
          self-center relative flex justify-center
          bg-gradient-to-b from-primary-btn-blue rounded-full 
          w-44 h-44 md:w-52 md:h-52 lg:w-[23vw] lg:h-[23vw] max-w-[300px] max-h-[300px]
          lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:justify-self-center
          
        "
        >
          <img
            src="https://i.ibb.co/kxBMV3G/shing-memoji-laptop.png"
            alt="Avatar of boy using macbook"
            className="rounded-full object-scale-down
            "
          />
        </div>

        <p
          className="text-center sm:text-start
                      lg:col-start-1 lg:col-span-2 lg:py-14"
        >
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

        <hr className="border-gray-300 dark:border-gray-500 h-px lg:col-span-2 lg:my-4"></hr>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl m-12 text-center font-bold">
          Technologies:
        </h3>
        <ul className="grid grid-cols-3 gap-6 xm:grid-cols-4 sm:grid-cols-5 sm:gap-6 lg:grid-flow-row lg:grid-rows-2 lg:gap-10 max-w-max m-auto ">
          <SkillCard src="icons8-c++-96.png" text="C++" />
          <SkillCard src="icons8-python-96.png" text="Python" />
          <SkillCard src="icons8-javascript-96.png" text="JavaScript" />
          <SkillCard src="icons8-git-96.png" text="Git" />
          <SkillCard src="icons8-unity-96.png" text="Unity" />
          <SkillCard src="icons8-html-5-96.png" text="HTML" />
          <SkillCard src="icons8-css3-96.png" text="CSS" />
          <SkillCard src="icons8-react-native-96.png" text="React" />
          <SkillCard src="icons8-tailwindcss-96.png" text="Tailwindcss" />
          <SkillCard src="icons8-adobe-photoshop-96.png" text="Photoshop" />
        </ul>
      </div>
    </section>
  );
}
