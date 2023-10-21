import Skills from "./Skills";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";

export default function About() {
  return (
    <section
      className="min-h-screen m-auto w-10/12 5xl:w-9/12 py-20"
      id="about"
    >
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <div
          className="flex flex-col
                  gap-y-8 xm:gap-y-10 sm:gap-y-12 md:gap-y-12 lg:gap-y-0
                  lg:grid lg:grid-cols-3"
        >
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:w-max">
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
            <Image
              src="/shing-memoji-laptop.png"
              alt="Avatar of boy using macbook"
              className="rounded-full object-scale-down"
              width={259}
              height={354}
            />
          </div>
          <p
            className="text-center sm:text-start
                      lg:col-start-1 lg:col-span-2 lg:py-14"
          >
            Hi, I’m Soh Shing Hao, a year 3 Computer Science undergraduate with
            a passion for building impactful products. I love solving problems
            and learning new technologies. <br /> <br /> I am currently seeking
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
      </AnimationOnScroll>
      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl m-12 text-center font-bold">
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
            Technologies:
          </AnimationOnScroll>
        </h3>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <Skills></Skills>
        </AnimationOnScroll>
      </div>
    </section>
  );
}
