import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { Dispatch, SetStateAction } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isCollapsed?: boolean; // Make it optional
}

export function DashboardNav({
  items,
  setOpen,
  isCollapsed,
}: DashboardNavProps) {
  // Add isCollapsed here
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <TooltipProvider delayDuration={50}>
      <nav className="grid items-start gap-2">
        {items.map((item, index) => {
          const Icon = Icons[item.icon || "arrowRight"];
          const isHome = item.href === "/" && path === "/";
          const isActive = item.href !== "/" && path.startsWith(item.href ?? "");
          const link = (
            <Link
              key={index}
              href={item.disabled ? "/" : item.href!}
              onClick={() => setOpen?.(false)}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10",
                  isHome || isActive
                    ? "justify-start rounded-md bg-primary font-medium text-primary-foreground shadow hover:bg-primary/90"
                    : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                <Icon className="icon-element mr-2 h-4 w-4" />
                {isCollapsed ? null : (
                  <span className="text-element">{item.title}</span>
                )}{" "}
                {/* Text appears when sidebar is extended */}
                {isCollapsed
                  ? null
                  : item.count && (
                    <span className="text-element ml-auto text-xs font-semibold">
                      {item.count}
                    </span>
                  )}
                {isCollapsed
                  ? null
                  : item.tag && (
                    <span className="text-element ml-auto rounded-md bg-green-500 px-2 text-xs text-foreground">
                      {item.tag}
                    </span>
                  )}
              </span>
            </Link>
          );
          return (
            item.href && (
              isCollapsed ? (<Tooltip key={index}>
                <TooltipTrigger>{link}</TooltipTrigger>
                <TooltipContent>{item.title}</TooltipContent>
              </Tooltip>
              ) : (link))
          );
        })}
      </nav>
    </TooltipProvider>
  );
}
