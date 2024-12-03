import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { truncateString } from "@/lib/utils"
import { Icons } from "../icons"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const mpoxData = [
  {
    name: "Monkeypox Virus Detection Using Pre-trained Deep Learning-based Approaches",
    author: "Chiranjibi Sitaula",
    link: "https://link.springer.com/article/10.1007/s10916-022-01868-2",
    published: "06 October 2022"
  },
  {
    name: "Utilizing convolutional neural networks to classify monkeypox skin lesions",
    author: "Entesar Hamed I. Eliwa",
    link: "https://www.nature.com/articles/s41598-023-41545-z",
    published: "03 September 2023"
  },
]

export function Papers() {
  return (
    <Table>
      <TableCaption>Research Papers related to Monkeypox.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mpoxData.map((data) => (
          <TableRow key={data.name}>
            <TableCell className="font-medium flex items-center">
              <Icons.page />
              <HoverCard>
                <HoverCardTrigger asChild>
                  <span className="ml-2">{truncateString(data.name, 20)}</span>
                </HoverCardTrigger>
                <HoverCardContent className="w-full">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{data.author}</h4>
                      <p className="text-sm">
                       {data.link}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={data.link} >Learn more</Link></Button>
                      <div className="flex items-center pt-2">
                        <Icons.user className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          {data.published}
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </TableCell>
            <TableCell>{data.author}</TableCell>
            <TableCell>
              <Link href={data.link}>{truncateString(data.link, 30)}</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
