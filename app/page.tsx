import Image from "next/image";
import { BentoGridDemo } from "./components/Bento";
import { SpotlightPreview } from "./components/Spotlight";
import { ThreeDCardDemo } from "./components/ThreeDCardDemo";
import { HeroParallaxDemo } from "./components/HeroParallaxDemo";

export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <BentoGridDemo />
      <SpotlightPreview />
      <ThreeDCardDemo />
    </>
  );
}
