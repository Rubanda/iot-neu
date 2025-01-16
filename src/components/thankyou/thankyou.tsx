"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import Image from "next/image";

// Define a type for our advisor data
type Advisor = {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  readMoreUrl: string;
};

// Create an array of advisor data
const advisors: Advisor[] = [
  {
    name: "Prof. Dr. Fadi AL-TURJMAN",
    title: "Professor of Computer Science",
    description: "Received his Ph.D. in computer science from Queens University, Canada, in 2011. Currently a Professor at Near East University, Cyprus.",
    imageUrl: "https://neu.edu.tr/wp-content/uploads/2022/03/04/Prof.-Dr.-Fadi-Al-Turjman1.jpeg",
    readMoreUrl: "https://research.com/u/prof-dr-fadi-al-turj",
  },
  {
    name: "Ibrahim",
    title: "Associate Professor of Data Science",
    description: "Specializes in machine learning and big data analytics.",
    imageUrl: "/default-profile.jpg",
    readMoreUrl: "#",
  },
  // Add more advisors as needed
];

export default function ThankYouPage() {
  return (
    <div className=" py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Thank You to Our Advisors and Professors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisors.map((advisor, index) => (
          <div key={index} className=" w-full relative flex items-center justify-center">
            <DirectionAwareHover imageUrl={advisor.imageUrl}>
              <div className="space-y-2 text-center">
                <h2 className="font-bold text-xl">{advisor.name}</h2>
                <p className="font-medium text-sm">{advisor.title}</p>
                <p className="font-normal text-sm">{advisor.description}</p>
                <Link href={advisor.readMoreUrl} className="inline-block mt-2 text-blue-500 hover:underline">
                  Read more
                </Link>
              </div>
            </DirectionAwareHover>
          </div>
        ))}
      </div>
    </div>
  );
}

