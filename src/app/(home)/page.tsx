import Image from 'next/image'
import { Button, buttonVariants } from '../../components/ui/button'

export default function Home() {
  return (
    <div>
      <main className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
        <div className='container flex max-w-7xl flex-col items-center gap-4 text-center mb-20 lg:flex-row'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-primary'>Welcome to iot</h1>
            <p className='text-lg text-gray-600'>ai for everyone</p>
            <Button>Get Started</Button>
          </div>
          <div className=''>
            <Image
              src='https://iot.neu.edu.tr/wp-content/uploads/sites/106/2023/12/11/group.jpg?ver=728e5c8cabf78172f8846fe6a83180f9'
              alt='iot logo'
              width={800}
              height={800}
            />
          </div>
        </div>
        {/* <Join /> */}
      </main>
    </div>
  )
}
