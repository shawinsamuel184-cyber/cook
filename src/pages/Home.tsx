import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import LuxuryCursor from "@/components/LuxuryCursor";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedFoodSection from "@/components/sections/FeaturedFoodSection";
import StorySection from "@/components/sections/StorySection";
import ChefSection from "@/components/sections/ChefSection";
import ParallaxShowcaseSection from "@/components/sections/ParallaxShowcaseSection";
import GallerySection from "@/components/sections/GallerySection";
import EventsSection from "@/components/sections/EventsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import MenuShowcaseSection from "@/components/sections/MenuShowcaseSection";
import ReservationSection from "@/components/sections/ReservationSection";
import BrandStatementSection from "@/components/sections/BrandStatementSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import {
  brand,
  hero,
  featuredFood,
  story,
  chef,
  parallaxShowcase,
  gallery,
  events,
  experience,
  menu,
  contact,
  brandStatement,
} from "@/data/luxuryContent";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import { cn } from "@/lib/utils";

export default function Home() {
  const { scrollTo } = useLenisScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(t);
  }, []);

  const navItems = useMemo(
    () => [
      { label: "Menu", href: "#menu" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Gallery", href: "#gallery" },
      { label: "Events", href: "#events" },
      { label: "Contact", href: "#contact" },
    ],
    [],
  );

  const onNavigate = (href: string) => {
    const el = document.querySelector(href);
    if (el instanceof HTMLElement) scrollTo(el);
  };

  const onReserve = () => onNavigate("#reservations");

  return (
    <div className="relative">
      <ScrollProgress />
      <LuxuryCursor />

      <Navigation
        brand={brand.name}
        items={navItems}
        onNavigate={onNavigate}
        onReserve={onReserve}
      />

      <AnimatePresence>
        <LoadingScreen visible={loading} label={brand.name} />
      </AnimatePresence>

      <main className="relative">
        <HeroSection
          videoSrc={hero.videoSrc}
          posterImage={hero.posterImage}
          headline={hero.headline}
          subheading={hero.subheading}
          onExploreMenu={() => onNavigate("#menu")}
          onReserve={onReserve}
        />

        <FeaturedFoodSection
          heading={featuredFood.heading}
          body={featuredFood.body}
          image={featuredFood.image}
        />

        <StorySection heading={story.heading} body={story.body} />

        <ChefSection
          heading={chef.heading}
          name={chef.name}
          title={chef.title}
          quote={chef.quote}
          image={chef.image}
        />

        <ParallaxShowcaseSection
          image={parallaxShowcase.image}
          cards={parallaxShowcase.cards}
        />

        <GallerySection items={gallery.items} />

        <EventsSection heading={events.heading} cards={events.cards} onInquire={() => onNavigate("#contact")} />

        <ExperienceSection heading={experience.heading} blocks={experience.blocks} />

        <MenuShowcaseSection heading={menu.heading} categories={menu.categories} />

        <ReservationSection onSubmitted={() => {}} />

        <BrandStatementSection word={brandStatement.word} image={brandStatement.image} />

        <ContactFooterSection brand={brand.name} onReserve={onReserve} {...contact} />
      </main>

      <motion.button
        type="button"
        onClick={onReserve}
        className={cn(
          "fixed bottom-4 right-4 z-[75] inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-ivory shadow-glow sm:bottom-6 sm:right-6 sm:px-5 sm:py-3 sm:text-[12px]",
          "transition-transform duration-300 hover:-translate-y-0.5",
        )}
        initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
        aria-label="Reserve"
      >
        RESERVE <ArrowUpRight className="h-4 w-4" />
      </motion.button>
    </div>
  );
}
