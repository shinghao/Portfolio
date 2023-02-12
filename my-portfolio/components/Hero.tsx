export default function Hero() {
  return (
    <section className="min-h-screen flex justify-center">
      <div
        className="grid grid-flow-row items-center justify-items-center content-center
        gap-3 xm:gap-4 sm:gap-5 lg:gap-7 3xl:gap-8"
        id="hero"
      >
        <p className="pt-hero text-4xl xm:text-5xl sm:text-6xl lg:text-7xl 3xl:text-8xl font-bold">
          Hi, I&apos;m
        </p>
        <h2 className="text-4xl xm:text-5xl sm:text-6xl lg:text-7xl 3xl:text-8xl font-bold">
          Shing Hao
        </h2>
        <h3 className="text-xl xm:text-2xl sm:text-3xl 3xl:text-5xl">
          Web // Software Developer
        </h3>
        <a href="mailto:sohshinghao@gmail.com">
          <button
            className="w-32 h-11 xm:w-36 xm:h-12 md:w-48 md:h-14 3xl:w-60 3xl:h-16
            lg:text-2xl 3xl:text-3xl
            rounded-btn-primary text-primary-text-light bg-gradient-to-r from-primary-btn-blue to-teal-500 font-bold"
          >
            Let&apos;s Chat!
          </button>
        </a>
      </div>
    </section>
  );
}
