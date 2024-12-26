import MermaidDiagram from '@/components/diagram/mermaid-diagram'

export default function DiagramPage() {
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
  `

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Monkeypox Detection System Diagram</h1>
      <MermaidDiagram chart={diagramDefinition} />
    </div>
  )
}