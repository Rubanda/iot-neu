import EducationInfo from '@/components/education/education-info'
import { Shell } from '@/components/shell/shell'


export default function Page() {
    return (
        <Shell variant="sidebar" className="flex-1 space-y-6 p-4 pt-6 md:p-8">
            <EducationInfo />
        </Shell>
    )
}

