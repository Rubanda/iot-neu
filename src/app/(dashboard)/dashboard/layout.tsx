import { redirect } from "next/navigation";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/layout/sidebar";
interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    const session = await getAuthSession()
    return (
        <div >
            <div className={cn("block p-5 sm:!hidden")}>
                <MobileSidebar />
            </div>
            <div className="flex  h-screen overflow-hidden">
                <Sidebar user={session} className="hidden w-64 md:block" />
                <main className="> flex-1 overflow-y-auto overflow-x-hidden">
                    {children}
                </main>
            </div>
            {/* <Footer /> */}

        </div>
    )
}