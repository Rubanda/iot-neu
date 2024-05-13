import Link from "next/link"
import { landingConfig } from '../../config/landing';
import { cn } from "../../lib/utils"
import { buttonVariants } from "../../components/ui/button"
import { MainNav } from "../../components/main-nav"
import { UserAccountNav } from "../../components/navs/use-account-nav";
import { NavIcon } from "../../components/nav-icon";

interface siteHeaderProps {
  session?: any
  className?: string
}

export const SiteHeader = ({className,session}:siteHeaderProps) => {

  return (
    <div>
      <header className={cn("z-9 bg-background",className)}>
        <div className="flex h-14 items-center justify-between py-6">
          <MainNav items={landingConfig.mainNav} />
          <nav className="flex gap-2">
            {/* <Navbar /> */}
            <NavIcon />
            {session ? <UserAccountNav user={session?.user} /> : <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "px-4 disabled"
              )}

            >
              Login
            </Link>}
          </nav>
        </div>
      </header>
    </div>
  )
}
