import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { Ratings } from "@/components/Ratings";
import { StickyScrollRevealDemo } from "@/components/StickyCard";
import UpcomingFree from "@/components/UpcomingFree";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased  ">
      <HeroSection/>
      <FeaturedCourses/>
      <StickyScrollRevealDemo/>
      <Ratings/>
      <UpcomingFree/>
    </main>
  );
}
