export default function Hero() {
  return (
    <section className="min-h-screen flex justify-center">
      <div
        className="grid grid-flow-row items-center justify-items-center content-center gap-3"
        id="hero"
      >
        <p className="hero-heading pt-hero-s animate__animated animate__slow animate__fadeIn">
          Hi, I&apos;m
        </p>
        <h2 className="animate__animated animate__fadeIn animate__slow animate__delay-1s">
          Shing Hao
        </h2>
        <h3 className="text-center font-normal animate__animated animate__fadeIn animate__slow animate__delay-2s">
          Web // Software Engineer
        </h3>
        <a href="mailto:sohshinghao@gmail.com">
          <button
            className="w-32 h-11 xm:w-36 xm:h-12 md:w-48 md:h-14 
            animate__animated animate__fadeInUp animate__delay-3s ease-in duration-100 
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
