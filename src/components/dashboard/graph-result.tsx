"use client"
import dayjs from "dayjs"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

// Format the data for the chart
const chartData = [
  {
    date: "16/01 12:29",
    confidence: 0.2689,
    result: "non_monkeypox",
    id: 'cm5zb4wh00007xdf49qm72s2s'
  },
  {
    date: "16/01 12:21",
    confidence: 0.7310,
    result: "MonkeyPox",
    id: 'cm5zavll10006xdf4wvt646jf'
  },
  {
    date: "16/01 12:20",
    confidence: 0.2754,
    result: "non_monkeypox",
    id: 'cm5zatd5i0005xdf46m7cr4q5'
  },
  {
    date: "16/01 12:19",
    confidence: 0.2689,
    result: "non_monkeypox",
    id: 'cm5zaso8k0004xdf4et5ee4ot'
  },
  {
    date: "16/01 11:56",
    confidence: 0.2979,
    result: "non_monkeypox",
    id: 'cm5z9zlzh0003xdf47b53osgo'
  },
  {
    date: "16/01 11:56",
    confidence: 0.7310,
    result: "MonkeyPox",
    id: 'cm5z9za950002xdf4y7obkncw'
  },
  {
    date: "16/01 11:56",
    confidence: 0.7310,
    result: "MonkeyPox",
    id: 'cm5z9z1v60001xdf45io73x8d'
  },
  {
    date: "16/01 11:53",
    confidence: 0.7310,
    result: "MonkeyPox",
    id: 'cm5z9vfqh0000xdf4p6xzqje8'
  }
].reverse() // Reverse to show chronological order

export default function ConfidenceChart(data: any) {
    const chartData = data.data.map((item: any) => {
        return {
            ...item,
            date: dayjs(item.createdAt).format("DD/MM HH:mm"),
        }
    }).reverse()
  return (
    <Card className="w-full overflow-auto">
      <CardHeader>
        <CardTitle>Skin Condition Test Results</CardTitle>
        <CardDescription>Confidence probability over time for MonkeyPox detection</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            confidence: {
              label: "Probability",
              color: "hsl(var(--primary))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="date"
                className="text-sm"
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                className="text-sm"
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => value.toFixed(2)}
                domain={[0, 1]}
              />
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Probability
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {typeof payload[0].value === 'number' ? payload[0].value.toFixed(3) : payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Result
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].payload.result}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line
                type="monotone"
                dataKey="confidence"
                strokeWidth={2}
                activeDot={{
                  r: 6,
                  style: { fill: "hsl(var(--primary))", opacity: 0.8 },
                }}
                dot={{
                  r: 4,
                  style: { fill: "hsl(var(--primary))", opacity: 0.8 },
                }}
                style={{
                  stroke: "hsl(var(--primary))",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

