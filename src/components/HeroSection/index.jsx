import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { usePortfolioContent } from "../../content";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroProfile from "./HeroProfile";
import SpotlightLayer from "./SpotlightLayer";
import useSpotlight from "./useSpotlight";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { content, heroLinks, profileImage, heroAnimation } =
    usePortfolioContent();

  const spotlightEnabled =
    heroAnimation?.enabled !== false &&
    (heroAnimation?.type ?? "spotlight") === "spotlight" &&
    !reduceMotion;

  const { blueprintMask, glow } = useSpotlight(spotlightEnabled);
  const [spotlightVisible, setSpotlightVisible] = useState(true);

  useEffect(() => {
    if (!spotlightEnabled) {
      setSpotlightVisible(true);
      return;
    }

    setSpotlightVisible(true);
  }, [spotlightEnabled]);

  return (
    <section className="relative h-full min-h-screen flex items-center justify-center overflow-hidden px-4">
      <HeroBackground />

      {spotlightEnabled && (
        <SpotlightLayer
          blueprintMask={blueprintMask}
          glow={glow}
          visible={spotlightVisible}
        />
      )}

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl pt-12 md:pt-16">
        <HeroProfile
          src={profileImage}
          alt={content.meta.copyrightName}
        />

        <HeroContent
          name={content.hero.name}
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          badge={heroAnimation?.badge}
          heroLinks={heroLinks}
        />
      </div>
    </section>
  );
}
