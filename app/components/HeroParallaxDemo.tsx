"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
// import Pic from "@/public/framer.png";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/framer.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/framer.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/framer.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/framer.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/framer.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/framer.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/framer.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/framer.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/framer.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/framer.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/framer.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/framer.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/framer.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/framer.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/framer.png",
  },
];
