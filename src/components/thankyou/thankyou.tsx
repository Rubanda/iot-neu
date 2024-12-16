"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl =
    "https://neu.edu.tr/in-the-best-scientists-ranking-published-by-research-com-prof-dr-fadi-al-turjman-from-near-east-university-ranked-in-the-top-five-in-turkey-and-first-in-the-trnc-in-the-field-of-computer-sciences/?lang=en";
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">Prof. Dr. Fadi AL-TURJMAN
Dr. Fadi</p>
        <p className="font-normal text-sm">received his Ph.D. in computer science from Queens University, Canada, in 2011.</p>
      </DirectionAwareHover>
    </div>
  );
}
