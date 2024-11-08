"use client";

import Link from "next/link";

import { useToast } from "@/hooks/use-toast";

import ArrowUpRightIcon from "../../public/icons/arrow-up-right.svg";
import grainImage from "../../public/images/grain.jpg";

export default function ContactSection() {
  const { toast } = useToast();

  function handleCopiedEmail() {
    navigator.clipboard
      .writeText("rafalpawelsoltysiak@gmail.com")
      .then(() => {
        toast({
          variant: "gradient",
          title: "The email address has been copied!",
        });
      })
      .catch((error) => {
        alert(`Failed to copy email: ${error}`);
      });
  }

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Looking for a passionate developer?
              </h2>
              <p className="text-sm md:text-base mt-2">
                I&apos;m currently open to new job opportunities and eager to
                tackle interesting projects. Feel free to reach out - I&apos;d
                love to discuss how I can be a valuable addition to your team!
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/rafa%C5%82-so%C5%82tysiak-07ab6216a/"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
              <button
                onClick={handleCopiedEmail}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Email address</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
