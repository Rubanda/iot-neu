import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkinConditionProps {
  condition: string
  description: string
  severityLevels: string[]
  triggeredBy: string[]
}

export function SkinConditionCard({ condition, description, severityLevels, triggeredBy }: SkinConditionProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{condition}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div>
            <h4 className="font-semibold mb-1">Severity Levels:</h4>
            <div className="flex flex-wrap gap-1">
              {severityLevels.map((level) => (
                <Badge key={level} variant="secondary">{level}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Triggered By:</h4>
            <div className="flex flex-wrap gap-1">
              {triggeredBy.map((trigger) => (
                <Badge key={trigger} variant="outline">{trigger}</Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

