import Image from "next/image";
import { BentoGridDemo } from "./components/Bento";
import { SpotlightPreview } from "./components/Spotlight";
import { ThreeDCardDemo } from "./components/ThreeDCardDemo";
import { HeroParallaxDemo } from "./components/HeroParallaxDemo";
import { Footerbox } from "./components/Footerbox";
import { TabsDemo } from "./components/TabsDemo";
import { NavbarDemo } from "./components/NavbarDemo";
import { Qna } from "./components/Qna";
export default function Home() {
  return (
    <>
      <NavbarDemo />
      <HeroParallaxDemo />
      <BentoGridDemo />
      <SpotlightPreview />
      <ThreeDCardDemo />
      <TabsDemo />
      <Qna />
      <Footerbox />
    </>
  );
}
