'use server'
import { authOptions } from "@/lib/auth"
import { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"

const handler = async (req: NextApiRequest, res: NextApiResponse)=> NextAuth(authOptions)(req, res)

export { handler as GET, handler as POST }