import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const monkeypoxInfo = {
    title: "Monkeypox Virus: Educational Information",
    sections: [
        {
            heading: "What is Monkeypox?",
            content: "Monkeypox is a zoonotic viral disease caused by the monkeypox virus, a member of the Orthopoxvirus genus. It was first identified in 1958 in monkeys and can spread from animals to humans, as well as between humans.",
        },
        {
            heading: "Symptoms",
            content: [
                "Initial symptoms include fever, headache, muscle aches, fatigue, and swollen lymph nodes.",
                "Within 1–3 days of fever onset, a rash develops, starting as flat lesions, progressing to fluid-filled blisters, and eventually forming scabs.",
            ],
        },
        {
            heading: "How Does Monkeypox Spread?",
            content: [
                "Animal-to-Human: Direct contact with infected animals or their bodily fluids.",
                "Human-to-Human: Contact with infected skin lesions, respiratory droplets, or contaminated objects.",
            ],
        },
        {
            heading: "Who is at Risk?",
            content: [
                "People in regions with active monkeypox outbreaks.",
                "Those in close contact with infected persons or animals.",
                "Individuals with compromised immune systems or skin conditions.",
            ],
        },
        {
            heading: "Prevention",
            content: [
                "Avoid contact with potentially infected animals.",
                "Practice frequent hand washing.",
                "Avoid close contact with infected individuals.",
                "Use personal protective equipment (PPE) when necessary.",
            ],
        },
        {
            heading: "Treatment",
            content: "No specific treatment exists, but supportive care and antivirals like tecovirimat may be used for severe cases.",
        },
        {
            heading: "Vaccination",
            content: "Smallpox vaccines provide protection against monkeypox. Newer vaccines like Jynneos are FDA-approved for prevention.",
        },
    ],
};
export default function EducationInfo() {
  return (
        <div>
            <h2 className=" font-bold text-center">
                {monkeypoxInfo.title}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {monkeypoxInfo.sections.map((section, index) => (
                    <Card key={section.heading + index} className="overflow-hidden">
                        <CardHeader className="bg-secondary">
                            <CardTitle className=" font-semibold">
                                {section.heading}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                            {Array.isArray(section.content) ? (
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="content" className="border-none">
                                        <AccordionTrigger className="hover:no-underline p-0 font-semibold text-primary">
                                            View Details
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc text-sm pl-6 space-y-2">
                                                {section.content.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ) : (
                                <p className="text-muted-foreground text-sm">{section.content}</p>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
            </div>
  )
}
