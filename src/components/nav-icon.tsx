'use client'
import React from 'react'

import { motion } from 'framer-motion'
import { Instagram, Facebook } from '../components/icon'
import { ModeToggle } from "../components/mode-toggle"
export const NavIcon = () => {
    return (
        <>
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href='https://www.instagram.com/YakinDoguUniversitesiOfficial/' target={'_blank'}
                    whileHover={{
                        y: -2
                    }}
                    arial-label='instagram'
                    whileTap={{ scale: 0.9 }}
                    className='w-6 mr-3'
                >
                    <Instagram className="text-foreground" />
                </motion.a>
                <motion.a href='/' target={'_blank'}
                    whileHover={{
                        y: -2
                    }}
                    aria-label='facebook'
                    whileTap={{ scale: 0.9 }} className='w-6 mr-3' >
                    <Facebook className="text-foreground" />
                </motion.a>
            </nav>
        </>
    )
}
