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

const mpoxData = [
  {
    name: "Momo",
    result: "Monkeypox",
    action: "Analyze",
  },
  {
    name: "Momo",
    result: "Monkeypox",
    action: "Analyze",
  },
  {
    name: "Momo",
    result: "Normal",
    action: "Analyze",
  },
  {
    name: "Momo",
    result: "Monkeypox",
    action: "Analyze",
  },
]

export function RecentResults() {
  return (
    <Table>
      <TableCaption>A list of your Skin condition.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>result</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mpoxData.map((data, index) => (
          <TableRow key={data.name + index}>
            <TableCell className="font-medium">{data.name}</TableCell>
            <TableCell>{data.result}</TableCell>
            <TableCell>
              <Badge variant="outline">{data.action}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
