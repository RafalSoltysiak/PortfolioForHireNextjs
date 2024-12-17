import Image from "next/image";

import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

import darkSaasLandingPage from "../../public/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../../public/images/light-saas-landing-page.png";
import aiStartupLandingPage from "../../public/images/ai-startup-landing-page.png";
import github from "../../public/images/github.png";
import CheckCircleIcon from "../../public/icons/check-circle.svg";
import ArrowUpRight from "../../public/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    title: "usePopcorn App",
    results: [{ title: "React.js" }, { title: "TypeScript" }, { title: "CSS" }],
    link: "https://github.com/RafalSoltysiak/usePopcornApp",
    image: darkSaasLandingPage,
  },
  {
    title: "Uber Mobile App",
    results: [
      { title: "React Native" },
      { title: "TypeScript" },
      { title: "Tailwind CSS" },
    ],
    link: "https://github.com/RafalSoltysiak/UberLightAppReactNative",
    image: lightSaasLandingPage,
  },
  {
    title: "Rent Car App",
    results: [
      { title: "Next.js" },
      { title: "TypeScript" },
      { title: "Tailwind CSS" },
    ],
    link: "https://github.com/RafalSoltysiak/RenCarAppNextjs",
    image: aiStartupLandingPage,
  },
  {
    title: "And more apps...",
    results: [
      { title: "News Expo App React Native" },
      { title: "YCDirectory Nextjs" },
      { title: "Weather AppV2" },
      { title: "user Management Table App" },
      { title: "..." },
    ],
    link: "https://github.com/RafalSoltysiak",
    image: github,
  },
];

export default function ProjectsSection() {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          eyebrow="My Results"
          description="Below are a few projects that showcase my journey as a frontend developer."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a target="_blank" href={project?.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View on GitHub</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
