import { findResults } from "@/app/_action/prediction";
import { AIChat } from "@/components/ai/ai-chat";
import { Papers } from "@/components/dashboard/papers";
import { RecentResults } from "@/components/dashboard/recent-results";
import { CheckSkinCondition } from "@/components/dashboard/scan-image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentUser } from "@/lib/session";
import Image from "next/image";

export default async function page() {
  const session = await getCurrentUser();
  const prediction = await findResults({sort: {createdAt: 'desc'}});
  return (
    <div className="flex-1 space-y-4 p-4 pt-10">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-xl font-bold tracking-tight">
          Hi {session?.name?.split(' ')[0]}, Welcome back 👋
        </h2>
        <div className="flex flex-col">
          <Image src='/logo/desam.svg' width={400}
            height={400} alt='ai neu logo' />

        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-3 flex flex-col space-y-4">
          <Card className="">
            <CardHeader>
              <CardTitle>Check your Skin Condition</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <CheckSkinCondition />
            </CardContent>
          </Card>
          <Card className="flex-1 max-h-full">
            <CardHeader>
              <CardTitle>Recent Result</CardTitle>
            </CardHeader>
            <CardContent>
             {prediction ? <RecentResults data={prediction[0]} /> : 'No recent result'}
            </CardContent>
          </Card>
        </div>
        <div className="col-span-4">
          <AIChat />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 ">
        <Card className="">
          <CardHeader>
            <CardTitle>
              Papers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Papers />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
