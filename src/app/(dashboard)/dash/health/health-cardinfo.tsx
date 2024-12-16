import { SkinConditionCard } from "./skincondition-card"
import { AllergyCard } from "./allergy-card"

const data = {
  skinConditions: [
    {
      condition: "Eczema",
      description: "Dry, itchy, inflamed skin that increases infection risk.",
      severityLevels: ["Mild", "Moderate", "Severe"],
      triggeredBy: ["Dust mites", "Pet dander", "Soaps"],
    },
    {
      condition: "Psoriasis",
      description: "Scaly patches on the skin that can serve as infection entry points.",
      severityLevels: ["Mild", "Moderate", "Severe"],
      triggeredBy: ["Stress", "Skin injuries", "Medications"],
    },
    {
      condition: "Impetigo",
      description: "Bacterial sores that increase the risk of secondary infections.",
      severityLevels: ["Mild", "Moderate", "Severe"],
      triggeredBy: ["Cuts", "Scratches", "Insect bites"],
    },
    {
      condition: "Severe Acne",
      description: "Inflamed skin lesions that increase vulnerability to infections.",
      severityLevels: ["Moderate", "Severe"],
      triggeredBy: ["Hormones", "Oily skin", "Cosmetics"],
    },
    {
      condition: "Contact Dermatitis",
      description: "Skin irritation from allergens or irritants that weakens the skin barrier.",
      severityLevels: ["Mild", "Moderate"],
      triggeredBy: ["Nickel", "Fragrances", "Cleaning products"],
    },
  ],
  allergies: [
    {
      allergen: "Pollen",
      symptoms: ["Skin rashes", "Itching", "Swelling"],
      description: "Can worsen conditions like eczema.",
    },
    {
      allergen: "Nickel",
      symptoms: ["Contact dermatitis", "Blisters", "Dry skin"],
      description: "Can cause skin irritation, increasing infection risk.",
    },
    {
      allergen: "Latex",
      symptoms: ["Hives", "Redness", "Itching"],
      description: "Can lead to irritated skin and weakened defenses.",
    },
    {
      allergen: "Fragrances",
      symptoms: ["Eczema flare-ups", "Inflammation"],
      description: "Can worsen skin conditions and infection risk.",
    },
    {
      allergen: "Pet Dander",
      symptoms: ["Itchy skin", "Hives", "Rashes"],
      description: "Can cause skin irritation and inflammation.",
    },
  ],
};


export function HealthInfoCards() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="font-bold">Some Skin Diseases and causes</h1>
      <section>
        <h2 className="text-2xl font-bold mb-4">Skin Conditions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
          {data.skinConditions.map((condition) => (
            <SkinConditionCard key={condition.condition} {...condition} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Allergies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
          {data.allergies.map((allergy) => (
            <AllergyCard key={allergy.allergen} {...allergy} />
          ))}
        </div>
      </section>
    </div>
  )
}

