import { Footer } from "../../../components/footer";
import { DashboardNav } from "../../../components/nav";
import { SiteHeader } from "../../../components/navs/site-head";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { landingConfig } from "../../../config/landing";
import { getCurrentUser } from "../../../lib/session";

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    const session = await getCurrentUser()
    return (
        <div className="flex w-full min-h-screen flex-col">
            <SiteHeader className='border-b' session={session} />
            <div className="grid flex-1 gap-12 md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <aside className="hidden w-[200px] overflow-y-auto border-r flex-col md:flex">
                <ScrollArea className="py-6 pr-6 lg:py-8">
                    <DashboardNav items={landingConfig.sidebarNav} />
                </ScrollArea>
                </aside>
                <main className="flex w-full flex-col overflow-hidden">
                    {children}
                </main>
            </div>
            {/* <Footer /> */}

        </div>
    )
}