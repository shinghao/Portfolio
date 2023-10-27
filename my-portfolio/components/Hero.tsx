export default function Hero() {
  return (
    <section className="min-h-screen flex justify-center">
      <div
        className="grid grid-flow-row items-center justify-items-center content-center
        gap-3 xm:gap-4 sm:gap-5 lg:gap-6 2xl:gap-7 "
        id="hero"
      >
        <p
          className="pt-hero-s text-4xl lg:text-5xl 2xl:text-6xl font-bold
          animate__animated animate__slow animate__fadeIn"
        >
          Hi, I&apos;m
        </p>
        <h2
          className="text-4xl 2xl:text-6xl lg:text-5xl font-bold
        animate__animated animate__fadeIn animate__slow animate__delay-1s"
        >
          Shing Hao
        </h2>
        <h3
          className="text-3xl 2xl:text-4xl text-center
        animate__animated animate__fadeIn animate__slow animate__delay-2s"
        >
          Web // Software Engineer
        </h3>
        <a href="mailto:sohshinghao@gmail.com">
          <button
            className="w-32 h-11 xm:w-36 xm:h-12 md:w-48 md:h-14 
            animate__animated animate__fadeInUp animate__delay-3s
            lg:text-2xl
            ease-in duration-100 
                    hover:from-teal-500 hover:to-primary-btn-blue
            rounded-btn-primary text-primary-text-light bg-gradient-to-r from-primary-btn-blue to-teal-500 font-bold"
          >
            Let&apos;s Chat!
          </button>
        </a>
      </div>
    </section>
  );
}
