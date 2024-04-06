"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Comprehensive Skill Courses",
      description:
        "Gain expertise in high-demand domains such as DSA, Dev, IoT, AI/ML, and more. Our platform offers comprehensive skill courses designed to equip you with practical knowledge and hands-on experience, empowering you to thrive in today's tech-driven world.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Explore Courses
        </div>
      ),
    },
    {
      title: "Real-Time Learning Experience",
      description:
        "Experience real-time learning with our interactive platform. Stay engaged with live sessions, practical demonstrations, and collaborative projects. Our approach ensures that you grasp concepts effectively and stay updated with the latest advancements.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Real-Time Learning
        </div>
      ),
    },
    {
      title: "Personalized Progress Tracking",
      description:
        "Track your progress and stay motivated on your learning journey. Our platform provides personalized progress tracking tools, allowing you to monitor your performance, identify areas for improvement, and celebrate your achievements along the way.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Track Progress
        </div>
      ),
    },
    {
      title: "Expert-Led Curriculum",
      description:
        "Learn from industry experts and seasoned professionals. Our curated curriculum is crafted by experienced instructors who bring real-world insights and best practices into the classroom. Get access to top-notch education and mentorship to accelerate your career.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Meet Instructors
        </div>
      ),
    },
  ];
  
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
