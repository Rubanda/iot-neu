"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { TextShimmerDemo } from "./intro";
import { AnimatedBeamDemo } from "./beam";

export function CenterContent() {
  const { theme } = useTheme();
  const [backgroundImage, setBackgroundImage] = useState("/back.png");

  useEffect(() => {
    const effectiveTheme = theme === "system" ? "system" : theme;

    if (effectiveTheme === "light") {
      setBackgroundImage("/back.png"); // Path for the light theme background
    } else {
      setBackgroundImage("/dark.png"); // Path for the dark theme background
    }
  }, [theme]);

  return (
    <main
      className="flex flex-1 justify-center pt-16 overflow-x-hidden overflow-y-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <PageHeader className="pb-8">

        <TextShimmerDemo />
        <span
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            animation: "fadeUp 2s ease-out 0.25s forwards",
          }}
          className="text-center text-5xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]"
        >
          <span className="text-gradient_indigo-purple font-bold">
          Infection Monitoring {""}
          </span>
          Dashboard.
        </span>

        <span
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            animation: "fadeUp 2s ease-out 0.35s forwards",
          }}
          className="mx-auto max-w-[750px] text-lg text-center text-muted-foreground"
        >
          Welcome to the Health Testing Dashboard – your all-in-one platform for tracking and managing data 
          on monkeypox and chickenpox cases etc... Designed for healthcare providers and researchers, this dashboard offers real-time insights, trend analysis, 
          and secure data storage to streamline infection monitoring and support effective health responses.
          </span>

        <div
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            animation: "fadeUp 2s ease-out 0.40s forwards",
          }}
          className="flex items-center justify-center space-x-4 pb-8 pt-4 md:pb-10"
        >
          {" "}
          <Link href="/dash" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            rel="noreferrer"
            href={"#"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
        <div

          style={{
            opacity: 0,
            transform: "translateY(20px)",
            animation: "fadeUp 2s ease-out 0.55s forwards",
          }}
          className="container flex flex-col items-center mt-28 mb-32"
        >
          {" "}
          <h2 className="text-zinc-500 text-center text-sm font-semibold uppercase">
            Powered by
          </h2>
          <Link href="https://iot.neu.edu.tr/" className="text-zinc-500 text-center text-sm font-semibold uppercaser">
            <span>https://iot.neu.edu.tr/</span>
          </Link>
        </div>
        <SiteFooter />
      </PageHeader>
    </main>
  );
}

const features = [
  {
    title: "Next.js 14",
    href: "https://nextjs.org/",
    icon: (
      <svg
        className="h-6 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="512px"
        height="104px"
        viewBox="0 0 512 104"
        version="1.1"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M429.54331,0.0429770721 L429.54331,16.5035533 L394.165929,16.5035533 L394.165929,103.100426 L376.475939,103.100426 L376.475939,16.5035533 L340.361746,16.5035533 L340.361746,0.0429770721 L429.54331,0.0429770721 Z M433.519756,93.2825015 C434.76597,93.2825015 435.856244,93.7313462 436.778883,94.6289056 C437.714518,95.526465 438.181036,96.6012751 438.19403,97.8532061 C438.181036,98.703464 437.96532,99.4828995 437.533888,100.179687 C437.090761,100.88843 436.528081,101.443574 435.819858,101.845117 C435.124629,102.258485 434.357929,102.470952 433.519756,102.470952 C432.224162,102.470952 431.122193,102.022238 430.199553,101.124678 C429.276914,100.227119 428.820792,99.1404832 428.832487,97.8532061 C428.820792,96.6012751 429.276914,95.526465 430.199553,94.6289056 C431.122193,93.7313462 432.224162,93.2825015 433.519756,93.2825015 Z M82.9163208,103.100426 L17.6888203,22.0284751 L17.6888203,103.057413 L0,103.057413 L0,0 L22.1109929,0 L104.516873,102.328528 L104.518173,16.5035533 L104.510765,0.0429770721 L193.691939,0.0429770721 L193.691939,16.5035533 L122.206993,16.5035533 L122.206993,42.9835695 L179.695107,42.9835695 L179.695107,59.4441096 L122.206993,59.4441096 L122.206993,86.6398863 L193.691939,86.6398863 L193.691939,103.100426 L82.9163208,103.100426 Z M250.384893,59.2866112 L261.977665,73.7004508 L238.222944,103.222059 L215.007513,103.222059 L250.384893,59.2866112 Z M238.222944,0.085959602 L268.152853,37.2560569 L297.989198,0.200360934 L321.139655,0.164585909 L279.743025,51.6501442 L321.205929,103.14344 L297.989198,103.14344 L215.073787,0.085959602 L238.222944,0.085959602 Z M463.710863,59.0558213 L471.549401,59.0558213 L471.549401,89.2551147 C471.537706,92.0305706 470.93734,94.4044832 469.763898,96.4005036 C468.577462,98.3963939 466.934904,99.9197888 464.825827,100.994599 C462.728447,102.057454 460.271107,102.600902 457.478497,102.600902 C454.924995,102.600902 452.636589,102.140231 450.598985,101.242672 C448.561381,100.345113 446.943513,98.9987086 445.757076,97.2271107 C444.557645,95.4555127 443.970274,93.2470254 443.970274,90.6015188 L451.821807,90.6015188 C451.833503,91.7589766 452.097299,92.7627046 452.600203,93.601267 C453.103107,94.4398294 453.798335,95.0774904 454.685888,95.526335 C455.583838,95.9751797 456.615635,96.199602 457.777381,96.199602 C459.036589,96.199602 460.115168,95.9397036 460.989726,95.4082112 C461.864284,94.8885442 462.536122,94.1091086 463.003939,93.0697746 C463.458761,92.0423959 463.699168,90.7668142 463.710863,89.2551147 L463.710863,59.0558213 Z M503.801503,70.8662579 C503.610477,69.0356629 502.771005,67.6066112 501.309076,66.5909279 C499.834152,65.5634193 497.929096,65.0555777 495.59131,65.0555777 C493.950051,65.0555777 492.536203,65.3036508 491.361462,65.7878416 C490.186721,66.2838579 489.275777,66.9451695 488.65202,67.783732 C488.029563,68.6222944 487.717685,69.5789807 487.692995,70.6537909 C487.692995,71.5513503 487.908711,72.3307858 488.328447,72.980402 C488.748183,73.6417137 489.310863,74.1968569 490.042477,74.6457015 C490.761096,75.1062416 491.564183,75.484134 492.440041,75.7912041 C493.326294,76.0982741 494.213848,76.3581726 495.100102,76.5707695 L499.187005,77.5746274 C500.829563,77.9525198 502.424041,78.4604914 503.945746,79.1099777 C505.467452,79.7477685 506.846213,80.5626802 508.056041,81.5428873 C509.267168,82.5232244 510.226193,83.704203 510.933117,85.0860832 C511.640041,86.4678335 512,88.0858315 512,89.9519025 C512,92.4674599 511.352853,94.6760772 510.045563,96.5893198 C508.739574,98.4907371 506.857909,99.9789157 504.388873,101.053726 C501.931533,102.116711 498.959594,102.659898 495.460061,102.659898 C492.080081,102.659898 489.131533,102.140361 486.650802,101.101027 C484.158376,100.073519 482.215635,98.5616893 480.813482,96.5774944 C479.41133,94.5934294 478.656325,92.1722152 478.548467,89.3259371 L486.315533,89.3259371 C486.423391,90.8139858 486.902904,92.0542213 487.717685,93.0580792 C488.544162,94.0501117 489.622741,94.7823756 490.941726,95.2783919 C492.272406,95.7625827 493.757726,96.0106558 495.400284,96.0106558 C497.114315,96.0106558 498.624325,95.7507574 499.930315,95.2429157 C501.224609,94.7350741 502.243411,94.0265909 502.975025,93.1053807 C503.718335,92.195866 504.08999,91.1211858 504.101685,89.8929056 C504.08999,88.7709239 503.753421,87.8377584 503.106274,87.1054944 C502.447431,86.3733604 501.536487,85.7592203 500.373442,85.2632041 C499.2,84.7671878 497.832934,84.3183431 496.274843,83.9286254 L491.313381,82.6766944 C487.729381,81.7673096 484.88869,80.3855594 482.814701,78.5313137 C480.730315,76.677068 479.698518,74.2205076 479.698518,71.1379817 C479.698518,68.610599 480.393746,66.3902863 481.797198,64.4887391 C483.186355,62.5873218 485.092711,61.1109685 487.50197,60.0598091 C489.922924,58.9969543 492.655756,58.4771574 495.699168,58.4771574 C498.791959,58.4771574 501.500102,58.9969543 503.837888,60.0598091 C506.174376,61.1109685 508.009259,62.5754964 509.33864,64.4414376 C510.66932,66.3075086 511.364548,68.4451736 511.400934,70.8662579 L503.801503,70.8662579 Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="size-10"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="208"
          y1="128"
          x2="128"
          y2="208"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="192"
          y1="40"
          x2="40"
          y2="192"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </svg>
    ),
  },
  {
    title: "Vercel",
    href: "https://vercel.com",
    icon: (
      <svg
        className="h-6 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="512px"
        height="512px"
        viewBox="0 0 512 512"
      >
        <path fillRule="evenodd" d="M256,48,496,464H16Z" fill="currentColor" />
      </svg>
    ),
  },
];