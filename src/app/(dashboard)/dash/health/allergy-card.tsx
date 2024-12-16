import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AllergyProps {
  allergen: string
  symptoms: string[]
  description: string
}

export function AllergyCard({ allergen, symptoms, description }: AllergyProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{allergen}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <h4 className="font-semibold mb-1">Symptoms:</h4>
          <div className="flex flex-wrap gap-1">
            {symptoms.map((symptom) => (
              <Badge key={symptom} variant="destructive">{symptom}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

