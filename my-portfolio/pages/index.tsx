import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/about/About";
import WorkSection from "@/components/work/Work";
import PortfolioSection from "@/components/portfolio/Portfolio";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkModeSwitch = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Shing Hao Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Josefin+Slab"
        ></link>
      </Head>
      <main className="bg-primary-bg-light text-primary-text-dark dark:bg-primary-bg-dark dark:text-primary-text-light">
        <Navbar
          handleDarkModeSwitch={handleDarkModeSwitch}
          darkMode={darkMode}
        />

        <HeroSection />
        <AboutSection />
        <WorkSection />
        <PortfolioSection />
        <Footer />
      </main>
    </div>
  );
}
