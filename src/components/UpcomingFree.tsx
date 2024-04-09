'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingFree() {
  const freeDemo = [
    {
      title: "Web Development Fundamentals",
      description:
        "Learn the basics of web development including HTML, CSS, and JavaScript.",
      slug: "web-development-fundamentals",
      isFeatured: true,
    },
    {
      title: "Mastering Data Structures and Algorithms",
      description:
        "Advance your programming skills with in-depth knowledge of data structures and algorithms.",
      slug: "mastering-data-structures-and-algorithms",
      isFeatured: true,
    },
    {
      title: "Introduction to Internet of Things (IoT)",
      description:
        "Explore the world of IoT and learn to develop applications for connected devices.",
      slug: "introduction-to-iot",
      isFeatured: true,
    },
    {
      title: "Artificial Intelligence Fundamentals",
      description:
        "Gain insights into the basics of artificial intelligence and its applications.",
      slug: "artificial-intelligence-fundamentals",
      isFeatured: true,
    },
    {
      title: "Machine Learning Essentials",
      description:
        "Delve into the essentials of machine learning techniques and algorithms.",
      slug: "machine-learning-essentials",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Tech Journey
          </p>
        </div>

        <div mt-10>
        <HoverEffect
          items={freeDemo.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
          
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingFree;
