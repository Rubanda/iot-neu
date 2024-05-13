import { Button, buttonVariants } from '@/components/ui/button'

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
          <div className='w-64 h-64 bg-gray-200 rounded-full'></div>
        </div>
        {/* <Join /> */}
      </main>
    </div>
  )
}
