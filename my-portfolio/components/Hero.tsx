export default function Hero() {
  return (
    <section className="min-h-screen flex justify-center">
      <div
        className="grid grid-flow-row gap-6 lg:gap-11 items-center justify-items-center content-center"
        id="hero"
      >
        <p className="pt-hero text-5xl lg:text-7xl font-bold">Hi, I&apos;m</p>
        <h2 className="text-5xl lg:text-7xl font-bold">Shing Hao</h2>
        <h3 className="text-2xl lg:text-4xl">Web // Software Developer</h3>
        <a href="mailto:sohshinghao@gmail.com">
          <button className="w-btn-s lg:w-btn-l h-btn-primary-s lg:h-btn-primary-m rounded-btn-primary text-primary-text-light bg-gradient-to-r from-primary-btn-blue to-teal-500 font-bold">
            Let&apos;s Chat!
          </button>
        </a>
      </div>
    </section>
  );
}
