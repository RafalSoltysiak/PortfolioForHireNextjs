"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

import Logo from "../../public/images/logo.png";
import JavaScriptIcon from "../../public/icons/square-js.svg";
import HTMLIcon from "../../public/icons/html5.svg";
import CssIcon from "../../public/icons/css3.svg";
import ReactIcon from "../../public/icons/react.svg";
import ChromeIcon from "../../public/icons/chrome.svg";
import GithubIcon from "../../public/icons/github.svg";
import Angular from "../../public/icons/angular.svg";
import Firebase from "../../public/icons/firebase.svg";
import Mui from "../../public/icons/mui.svg";
import Nextjs from "../../public/icons/nextjs.svg";
import Redux from "../../public/icons/redux.svg";
import Shadcn from "../../public/icons/shadcn.svg";
import Supabase from "../../public/icons/supabase.svg";
import TanStackQuery from "../../public/icons/tanStackQuery.svg";
import Threejs from "../../public/icons/threejs.svg";
import TypeScript from "../../public/icons/typescript.svg";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React.js",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Angular.js",
    iconType: Angular,
  },
  {
    title: "Firebase",
    iconType: Firebase,
  },
  {
    title: "Material UI",
    iconType: Mui,
  },
  {
    title: "Next.js",
    iconType: Nextjs,
  },
  {
    title: "Redux",
    iconType: Redux,
  },
  {
    title: "Shadcn",
    iconType: Shadcn,
  },
  {
    title: "Supabase",
    iconType: Supabase,
  },
  {
    title: "TanStackQuery",
    iconType: TanStackQuery,
  },
  {
    title: "Three.js",
    iconType: Threejs,
  },
  {
    title: "TypeScript",
    iconType: TypeScript,
  },
];

const hobbies = [
  {
    title: "Riding",
    emoji: "🛵",
    left: "5%",
    top: "5%",
  },
  {
    title: "Astronomy",
    emoji: "🚀",
    left: "50%",
    top: "5%",
  },
  {
    title: "Movies",
    emoji: "🎬",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "25%",
  },

  {
    title: "Music",
    emoji: "🎸",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Automotive",
    emoji: "🚗",
    left: "60%",
    top: "70%",
  },
  {
    title: "Travel",
    emoji: "🧳",
    left: "35%",
    top: "70%",
  },
];

export default function AboutSection() {
  const hobbyRef = useRef(null);

  return (
    <div className="py-20 lg:py-28" id="aboutMe">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Huge fan"
                description="A suspicious mind is a healthy mind. - Warhammer 40,000"
              />
              <div className="w-50 mx-auto mt-2 md:mt-0 object-contain">
                <Image src={Logo} alt="Warhammer's logo" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Expolore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={hobbyRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={hobbyRef}
                  >
                    <span className="font-medium text-gray-950 cursor-pointer">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <DynamicMap />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
