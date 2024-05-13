
import { Footer } from "../../components/footer"
import { SiteHeader } from "../../components/navs/site-head";
import { getCurrentUser } from "../../lib/session";
interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    const session = await getCurrentUser()
    return (
        <div className="relative flex min-h-screen flex-col">
            <SiteHeader className="container" session={session}/>
            <main className="flex-1">{children}</main>
            <Footer />

        </div>
    )
}
