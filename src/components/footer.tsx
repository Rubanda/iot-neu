'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { ModeToggle } from "@/components/mode-toggle";
export const Footer = () => {
    return (
        <footer className="mt-4">

            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <span className="">
                        © {new Date().getFullYear()} {" "}
                        <Link href="/" className="hover:underline">
                            iot-neu.com
                        </Link>
                    </span>

                    <Link href="/privacy" className=" hover:underline">Privacy Policy</Link>

                    <Link href="about" className="hover:underline ">About</Link>
                </div>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                </div>
            </div>
        </footer >


    )
}
