"use client"

import { useState } from 'react'
import MermaidDiagram from './mermaid-flow'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AppOverview() {
  const [activeTab, setActiveTab] = useState("diagram")

  const diagramDefinition = `
    graph TD
    User((User))
    System[Monkeypox Detection System]

    User -->|Login with Google| System
    User -->|Access Dashboard| System
    User -->|Add Health Data| System
    User -->|Update Profile| System
    User -->|Upload Skin Image| System
    User -->|View Past Results| System

    subgraph System
        Login[Login with Google]
        Dashboard[Access Dashboard]
        HealthData[Manage Health Data]
        Profile[Update Profile]
        ImageUpload[Upload Skin Image]
        Detection[Detect Monkeypox]
        SaveResult[Save Detection Result]
        ViewResults[View Past Results]

        Login --> Dashboard
        Dashboard --> HealthData
        HealthData -->|Add Allergies| HealthData
        HealthData -->|Add Skin Conditions| HealthData
        Dashboard --> Profile
        Dashboard --> ImageUpload
        Dashboard --> ViewResults
        ImageUpload --> Detection
        Detection --> SaveResult
        SaveResult --> ViewResults
    end

    classDef default fill:#f9f,stroke:#333,stroke-width:2px;
    classDef actor fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5;
    class User actor;

    %% Use linkStyle to make all lines straight
    linkStyle default interpolate basis
  `

  const appExplanation = `
    Our monkeypox detection app is a user-friendly web application designed to help people monitor their skin health and detect potential cases of monkeypox. Here's how it works:

    1. User Login: Users start by logging in to the app using their Google account. This ensures secure and easy access to their personal health information.

    2. Dashboard: After logging in, users land on a dashboard where they can access all the app's features.

    3. Health Data Management: Users can input and update their health information, including any allergies or existing skin conditions. This helps provide context for skin assessments.

    4. Profile Updates: The app allows users to keep their personal information up-to-date, ensuring accurate records.

    5. Skin Image Upload: The core feature of the app is the ability to upload images of skin areas. Users can easily take a photo of any concerning skin spots or rashes and upload it directly through the app.

    6. Monkeypox Detection: Once an image is uploaded, the app uses advanced image recognition technology to analyze the skin and detect any signs that might indicate monkeypox.

    7. Result Storage: After each analysis, the app saves the results. This feature is crucial for tracking changes over time and maintaining a health history.

    8. View Past Results: Users can easily access their past detection results, allowing them to monitor changes in their skin health and share this information with healthcare providers if needed.

    In essence, our app serves as a personal skin health assistant, providing a convenient way for users to monitor their skin, detect potential health issues early, and maintain a record of their skin health over time.
  `

  return (
    <div className=" max-w-4xl mx-auto">
      <div className='mb-4'>
        <h2 className='font-semibold'>Monkeypox Detection App Overview</h2>
        <span className='text-muted-foreground'>Understand the structure and functionality of our app</span>
      </div>
      <div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className=" ">
            <TabsTrigger value="diagram">System Diagram</TabsTrigger>
            <TabsTrigger value="explanation">App Explanation</TabsTrigger>
          </TabsList>
          <TabsContent value="diagram" className="mt-4">
            <div className="border rounded p-4">
              <MermaidDiagram chart={diagramDefinition} />
            </div>
          </TabsContent>
          <TabsContent value="explanation" className="mt-4">
            <div className="border rounded p-4 prose max-w-none">
              {appExplanation.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

