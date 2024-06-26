import * as React from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="text-muted-foreground container flex flex-col items-center justify-between gap-4 pt-10 md:h-24 md:flex-row md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image
              src="/iot-logo.svg"
              alt="Logo" // Provide a descriptive alt text
              width={10} // Adjust width as needed
              height={28} // Adjust height as needed (maintain aspect ratio)
              className="object-cover h-7 w-[2rem] object-left" // If you need additional styling
            />
          </div>{" "}
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={siteConfig.user.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Mo
            </a>
  
            . The source code is available on{" "}
            <a
              href={siteConfig.user.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}