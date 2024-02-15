import Image from "next/image";
import { BentoGridDemo } from "./components/Bento";
import { SpotlightPreview } from "./components/Spotlight";
import { ThreeDCardDemo } from "./components/ThreeDCardDemo";
import { HeroParallaxDemo } from "./components/HeroParallaxDemo";
import { Footerbox } from "./components/Footerbox";
import { TabsDemo } from "./components/TabsDemo";
export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <BentoGridDemo />
      <SpotlightPreview />
      <ThreeDCardDemo />
      <TabsDemo />
      <Footerbox />
    </>
  );
}
