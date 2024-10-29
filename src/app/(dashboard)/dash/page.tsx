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

export default async function page() {
  const session = await getCurrentUser();
  return (
    <div className="container flex-1 space-y-4 p-4 pt-10">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Hi {session?.name?.split(' ')[0]}, Welcome back 👋
        </h2>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Check your Skin Condition</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <CheckSkinCondition />
          </CardContent>
        </Card>
        <Card className="col-span-4 md:col-span-3">
          <CardHeader>
            <CardTitle>Recent Result</CardTitle>
            <CardDescription>
              see a doctor 
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
             We advise you to see a doctor
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="">
        <Card >
        <CardHeader>
          <CardTitle>
          Previous Test
          </CardTitle>
        </CardHeader>
        <CardContent>
        <RecentResults />
        </CardContent>
        </Card>
      </div>
    </div>
  );
}