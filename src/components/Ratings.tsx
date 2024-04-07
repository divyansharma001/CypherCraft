"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Ratings() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.1] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "This platform is a game-changer! I came in with some basic Python knowledge, but the AI/ML and DSA courses took my skills to the next level. The interactive exercises and real-world project examples really helped me understand the concepts. Now I feel confident tackling complex data analysis problems at work. Plus, the IIoT section was a great intro – definitely piqued my interest in this growing field!",
    name: "Sarah",
    title: "Data Analyst",
  },
  {
    quote:
    "This is exactly what I was looking for! The platform offers a comprehensive curriculum that covers all the essential topics in AI and machine learning. The instructors are fantastic – they break down complex concepts into clear, digestible pieces. The best part? The hands-on labs! Building my own AI models was incredibly rewarding, and it gave me a practical understanding of how these technologies work in the real world.",
    name: "Nikhil",
    title: "Aspiring AI Engineer",
  },
  {
    quote: "Whoa! This platform is packed with content. It's been a lifesaver for brushing up on my DSA (Data Structures and Algorithms) skills before exams. The quizzes and practice problems are perfect for testing your knowledge, and the explanations are super helpful. I also love the discussion forums – it's a great way to connect with other students and learn from each other.",
    name: "Saira",
    title: "Computer Science Student",
  },
  {
    quote:
    "Finally, an edtech platform that gets IIoT (Industrial Internet of Things)! The courses provide a solid foundation in the core concepts and technologies. I particularly enjoyed the simulations – they allowed me to experiment with connecting devices and setting up data flows in a safe, virtual environment. Now I feel more prepared to delve deeper into the world of smart factories and connected machines.",
    name: "Emily",
    title: "Robotics Enthusiast",
  },
  {
    quote:
    "This platform is a goldmine for educators!  I'm incorporating the AI/ML lessons into my computer science curriculum, and the students are loving it. The platform is engaging and interactive, and it sparks their curiosity about these cutting-edge technologies. The teacher resources are also fantastic – they provide lesson plans, activities, and assessments that make integrating AI/ML into the classroom a breeze.",
    name: "Zara",
    title: "Teacher",
  },
];
