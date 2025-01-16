"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"


export function RecentResults({ data }: any) {
  const chartData = [
    {
      name: "Confidence",
      value: data.confidence,
    },
  ]

  return (

    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div className="flex flex-col items-center gap-4">
        <Image
          className="flex-1  rounded-lg "
          src={data.image || "/placeholder.svg"}
          alt={data.result}
          width={100}
          height={50}
        />

        <Button variant="outline" size="sm" asChild>
          <Link href="/result">View More</Link>
        </Button>
      </div>
      <div className="flex flex-col space-y-4">
        <h3 className="text-2xl font-bold">Recent Result</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg">
            {data.result === "MonkeyPox" ? "MonkeyPox" : "Health"}
          </span>
          <Badge
            className="text-xs h-5 text-left"
            variant={data.result === "MonkeyPox" ? "destructive" : "default"}
          >
            {data.result === "MonkeyPox" ? "doctor" : "safe"}
          </Badge>
        </div>
        <div className="hidden h-16 w-full md:inline-flex">
              <ChartContainer
                config={{
                  value: {
                    label: "Confidence",
                    color: "hsl(var(--primary))",
                  },
                }}
              >
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                  <XAxis
                    type="number"
                    domain={[0, 1]}
                    ticks={[0.1, 0.2, 0.6, 0.8, 1]}
                    tickFormatter={(value) => value.toFixed(1)}
                    axisLine={false}
                    tickLine={false}
                    dy={-4}
                  />
                  <YAxis type="category" dataKey="name" hide />
                  <Bar dataKey="value" fill="currentColor" radius={[0, 4, 4, 0]} barSize={16} />
                </BarChart>
              </ChartContainer>
            </div>
      </div>

    </div>
  )
}

