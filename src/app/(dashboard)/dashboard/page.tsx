import { TableDemo } from "@/components/member-pie";
import { NewMember } from "@/components/dashboard/new-member";
import { Card, CardFooter } from "@/components/ui/card";
import React, { Suspense } from "react";
import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import { getAllMember, memberCount } from "@/lib/member";
import { getDepartment } from "@/app/_action/department";
import { getEvents } from "@/lib/event";
import { UpcomingEvent } from "@/components/dashboard/upcoming-event";
import { fetchGroups } from "@/lib/group";
import { Appointments } from "@/components/dashboard/appointment";
import CustomCard from "@/components/dashboard/custom-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import EventsCard from "@/components/dashboard/card-component";
import { Event } from "@/lib/validations/event";
import { getInboxData } from "@/lib/inbox";
import InboxCard from "@/components/dashboard/card-inbox";
import { NewUsers } from "@/lib/validations/member";

export default async function Overview() {
  const session = await getCurrentUser();
  // const member = await memberCount();
  const events: Event[] = await getEvents();
  // const links = await fetchGroups({ page: "1", per_page: "10" });
  const inbox = await getInboxData();
  const members: NewUsers[] = await getAllMember(3)
  // console.log(inbox);
  // const groups = await fetchGroups({ page: "1", per_page: "10" });
  // const departments = await getDepartment({ page: "1", per_page: "10" });
  // const gridItemClasses = `rounded-3xl bg-slate-200 flex justify-center items-center text-3xl font-bold`;
  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <div className="grid grid-cols-1 h-full w-full md:grid-cols-2 lg:grid-cols-3 auto-rows-[22rem] my-10 gap-3">
        <div className={`col-span-1 row-span-2 shadow-xl rounded-xl overflow-hidden`}>
          <InboxCard
            data={inbox ?? []}
            type='Inbox'
            subType='pending'
            icon='lightingBolt'
            color='text-red-400'
            disable={true}
          />
        </div>
        <div className='col-span-1 shadow-xl rounded-xl overflow-hidden'><Appointments /></div>
        <div className='col-span-1 shadow-xl rounded-xl overflow-hidden'>
          <Card className="h-full border-0">
            <div className="flex flex-col bg-muted p-4">
              <h3 className="font-semibold text-xl">Links</h3>
              <p className="flex items-center justify-start gap-1 text-sm text-muted-foreground">
                <Icons.externalLink className="h-4 w-4" />
                <span>Links</span> {' . '}
                <span>{0} Links</span>
              </p>
            </div>
            <ScrollArea className="h-[90%]">
              <Link href={`/links`}>
                <div className="px-6 py-2">
                  <div className="flex items-center gap-1 hover:bg-gray-100 rounded-xl py-2 -mb-3">
                    <Icons.link2 className="h-5 w-5" />
                    <h3 className="">Links</h3>
                  </div>
                  <Separator className=" mt-3 hover:hidden" />
                </div>
              </Link>
            </ScrollArea>
          </Card>
        </div>
        <div className='col-span-1 shadow-xl rounded-xl overflow-hidden'>
          <UpcomingEvent events={events} />
        </div>
        <div className='col-span-1 rounded-xl shadow-xl overflow-hidden'>
          <NewMember members={members}/>
        </div>
      </div>
    </div >
  );
}
