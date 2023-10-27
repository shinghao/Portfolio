import Skills from "./Skills";
import { AnimationOnScroll } from "react-animation-on-scroll";
import SectionHeader from "../SectionHeader";

export default function About() {
  return (
    <section
      className="min-h-screen m-auto w-10/12 5xl:w-9/12 py-20"
      id="about"
    >
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <div
          className="flex flex-col
                  lg:grid lg:grid-cols-3"
        >
          <SectionHeader>Nice to meet you!</SectionHeader>
          <div
            className="
            mb-12 lg:mb-0
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
                      lg:col-start-1 lg:col-span-2 pb-12"
          >
            Hi, I’m Soh Shing Hao, a year 3 Computer Science undergraduate with
            a passion for building impactful products. I love solving problems,
            learning about new technologies and improving my craft. <br />
            <br /> I am currently seeking internship opportunities in software
            engineering.&nbsp;
            <a
              href="mailto:sohshinghao@gmail.com"
              className="bg-primary-blue underline font-semibold text-primary-btn-blue"
            >
              Contact Me!
            </a>
          </p>
          <hr className="border-gray-300 dark:border-gray-500 h-px lg:col-span-2 lg:my-4"></hr>
        </div>
      </AnimationOnScroll>
      <div className="w-full flex flex-col items-center">
        <h3 className="m-8 text-center">
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
            Some technologies I currently work with:
          </AnimationOnScroll>
        </h3>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <Skills></Skills>
        </AnimationOnScroll>
      </div>
    </section>
  );
}
