
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Button } from "../ui/button"
import { Alert } from "../ui/alert"
import Link from "next/link"

export function RecentResults(data: any) {
  const info = data.data
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Image className="w-full rounded-lg" src={info?.image} alt="monkeypox" width={100} height={50} />
        <div className="flex flex-col space-y-2">
          <h3>Recent Result</h3>
          <div className="flex gap-2">
            <span> {info?.result==='MonkeyPox' ? 'MonkeyPox' : 'Health' } </span>
            <Badge className={`inline-flex  ${info?.result === 'MonkeyPox' ? 'bg-muted' : ''}`}>{info?.result === 'MonkeyPox' ? 'see doctor' : 'safe'}
              </Badge></div>
          <p>{info?.confidence}</p>
          <Button className="inline-flex " variant="outline" size='sm' asChild>
            <Link href="/result">View More</Link>
            </Button>
        </div>
      </div>

    </div>
  )
}
