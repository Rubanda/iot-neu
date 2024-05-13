import { ChevronDown, Circle, Contact, CopyCheck, Info, XIcon } from "lucide-react"
import { MailCheck } from "lucide-react"
import { ChevronUp } from "lucide-react"
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  LayoutDashboard,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  MapPin,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  User,
  X,
  AlignJustify,
  ThermometerSun,
  Send,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = typeof LucideIcon

export const Icons = {
  logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  trash: Trash,
  dashboard: LayoutDashboard,
  post: FileText,
  map: MapPin,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  temperature: ThermometerSun,
  email: MailCheck,
  menu: AlignJustify,
  copy: CopyCheck,
  info: Info,
  contact: Contact,
  circle:Circle,
  send:Send,
  google: ({ ...props }: LucideProps) => (
    <svg width="50px"
      height="50px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <title>google</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="invisible_box" data-name="invisible box">
          <rect width="48" height="48" fill="none" />
          <rect width="48" height="48" fill="none" />
        </g>
        <g id="icons_Q2" data-name="icons Q2">
          <path d="M24.7,20.5v7.6H35.6a10.9,10.9,0,0,1-10.9,8,12.1,12.1,0,1,1,7.9-21.3l5.6-5.6A20,20,0,1,0,24.7,44c16.8,0,20.5-15.7,18.9-23.5Z" />
        </g>
      </g>
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  masatafit: ({ ...props }: LucideProps) => (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 507"
      width="100"
      height="60"
      {...props}>
      <title>masatafit</title>
      {/* <style>
        .s0 {fill: #000000 }
      </style> */}
      <path id="Masatafi " className="s0" aria-label="Masatafi " d="m115.9 346v-109.4h22l27.9 74.5 28.1-74.5h22v109.4h-14.4v-96l-28.2 75h-14.9l-28.2-75v96zm179.5-41.2h-13.4q-16.3 0-22.6 3.7-6.3 3.7-6.3 12.7 0 7.2 4.7 11.5 4.8 4.1 12.9 4.1 11.2 0 17.9-7.9 6.8-7.9 6.8-21.1zm13.5-5.6v46.8h-13.5v-12.4q-4.6 7.4-11.5 11-6.8 3.5-16.8 3.5-12.6 0-20.1-7-7.4-7.1-7.4-19 0-13.8 9.3-20.8 9.3-7.1 27.6-7.1h18.9v-1.3q0-9.3-6.1-14.4-6.1-5.1-17.2-5.1-7 0-13.7 1.7-6.6 1.7-12.8 5.1v-12.5q7.4-2.8 14.4-4.2 6.9-1.5 13.5-1.5 17.8 0 26.6 9.2 8.8 9.3 8.8 28zm80.1-32.8v12.7q-5.7-2.9-11.9-4.4-6.2-1.4-12.7-1.4-10.1 0-15.1 3-5 3.1-5 9.3 0 4.7 3.6 7.4 3.6 2.6 14.4 5l4.6 1.1q14.4 3 20.4 8.7 6.1 5.5 6.1 15.6 0 11.4-9.1 18.1-9 6.6-24.8 6.6-6.6 0-13.8-1.2-7.1-1.3-15-3.9v-13.9q7.4 3.9 14.7 5.8 7.2 1.9 14.3 1.9 9.6 0 14.7-3.2 5.1-3.3 5.1-9.2 0-5.5-3.7-8.4-3.7-3-16.2-5.7l-4.7-1.1q-12.5-2.6-18.1-8-5.5-5.5-5.5-15 0-11.6 8.2-17.9 8.2-6.3 23.2-6.3 7.5 0 14.1 1.1 6.6 1.1 12.2 3.3zm76.5 38.4h-13.4q-16.3 0-22.6 3.7-6.3 3.7-6.3 12.7 0 7.2 4.7 11.5 4.7 4.1 12.8 4.1 11.3 0 18-7.9 6.8-7.9 6.8-21.1zm13.5-5.6v46.8h-13.5v-12.4q-4.6 7.4-11.5 11-6.9 3.5-16.8 3.5-12.6 0-20.1-7-7.4-7.1-7.4-19 0-13.8 9.2-20.8 9.3-7.1 27.7-7.1h18.9v-1.3q0-9.3-6.1-14.4-6.1-5.1-17.2-5.1-7 0-13.7 1.7-6.6 1.7-12.8 5.1v-12.5q7.4-2.8 14.4-4.2 6.9-1.5 13.5-1.5 17.8 0 26.6 9.2 8.8 9.3 8.8 28zm27.5-58.5h13.6v23.3h27.7v10.4h-27.7v44.6q0 10 2.7 12.9 2.8 2.8 11.2 2.8h13.8v11.3h-13.8q-15.6 0-21.5-5.8-6-5.8-6-21.2v-44.6h-9.9v-10.4h9.9zm109.7 64.1h-13.4q-16.3 0-22.6 3.7-6.3 3.7-6.3 12.7 0 7.2 4.7 11.5 4.8 4.1 12.9 4.1 11.2 0 17.9-7.9 6.8-8 6.8-21.1zm13.5-5.6v46.8h-13.5v-12.5q-4.6 7.5-11.5 11.1-6.8 3.5-16.8 3.5-12.6 0-20.1-7-7.4-7.1-7.4-19 0-13.8 9.3-20.9 9.3-7 27.6-7h18.9v-1.3q0-9.3-6.1-14.4-6.1-5.1-17.2-5.1-7 0-13.6 1.7-6.7 1.7-12.9 5.1v-12.5q7.4-2.9 14.4-4.2 6.9-1.5 13.5-1.5 17.8 0 26.6 9.2 8.8 9.2 8.8 28zm43.5-35.2h50.6v82h-13.6v-71.6h-37v71.6h-13.5v-71.6h-12.9v-10.4h12.9v-5.7q0-13.4 6.3-19.8 6.3-6.5 19.5-6.5h13.5v11.2h-12.9q-7.2 0-10.1 3-2.8 2.9-2.8 10.5zm37-14.7v-17.1h13.6v17.1z" />
      <g id="Folder 1 copy">
        <path id="Shape 2 copy" className="s0" d="m744.8 348.7c0 0 78.2-112.6 23.2-195.5-9.7-14.6-30 4.3-29.2 9.8 2.4 16.4 46.5 80.4 6 185.7z" />
        <path id="Shape 1" className="s0" d="m919.9 189.6" />
        <path id="Shape 4 copy 3" className="s0" d="m773.5 151.5c0.7 1.1 7.5 10.9 7.5 10.9 0 0 68.6-13 17.4-52 0 0 8.7 24.7 2.8 22-33.4-15.4-27.7 19.1-27.7 19.1z" />
        <path id="Shape 4 copy 4" className="s0" d="m734.1 167.5c0.4 1.2 3.7 12.3 3.7 12.3 0 0-57.9 35-54.6-24.7 0 0 14.2 22.7 16.1 17 10.4-32 34.8-4.6 34.8-4.6z" />
        <path id="Layer 1" className="s0" d="m737.9 146.3c-8.1 0-14.7-7.5-14.7-16.7 0-9.2 6.6-16.7 14.7-16.7 8.2 0 14.8 7.5 14.8 16.7 0 9.2-6.6 16.7-14.8 16.7z" />
      </g>
    </svg>
  ),
  masatafitFlex: ({ ...props }: LucideProps) => (
    <svg version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 507"
      width="100"
      height="60"
      {...props}>
      <title>masatafit</title>
      <g id="Folder 1 copy 2">
        <path id="Shape 2 copy" className="s0" d="m434.2 497c0 0 140.7-228.8 41.7-397.4-17.4-29.6-54 9-52.5 20.1 4.4 33.3 83.6 163.3 10.8 377.3z" />
        <path id="Shape 1" className="s0" d="m749.1 173.8" />
        <path id="Shape 4 copy 3" className="s0" d="m485.8 96.3c1.2 2.2 13.4 22.1 13.4 22.1 0 0 123.4-26.4 31.3-105.8 0 0 15.8 50.4 5.1 44.8-60-31.2-49.8 38.9-49.8 38.9z" />
        <path id="Shape 4 copy 4" className="s0" d="m414.9 128.8c0.8 2.4 6.7 25 6.7 25 0 0-104.2 71.2-98.2-50.3 0 0 25.6 46.2 29 34.6 18.7-65 62.5-9.3 62.5-9.3z" />
        <path id="Layer 1" className="s0" d="m421.8 85.6c-14.6 0-26.5-15.1-26.5-33.9 0-18.7 11.9-33.9 26.5-33.9 14.7 0 26.6 15.2 26.6 33.9 0 18.8-11.9 33.9-26.6 33.9z" />
      </g>
    </svg>
  ),
  x: XIcon,
  check: Check,
}
