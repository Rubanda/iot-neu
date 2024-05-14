import Image from 'next/image'
import { Button, buttonVariants } from '../../components/ui/button'
import { GlobeDemo } from '../../components/globe-component'
import { BentoGridThirdDemo } from '../../components/bento'
import { AnimatedBeamDemo } from '../../components/beam'

export default function Home() {
  return (
    <div>
      <main className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
        <div className='container flex max-w-7xl flex-col items-center gap-4 text-center mb-20 lg:flex-row'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-bold text-primary'>Get Your Own Digital Id</h1>
            <p className='text-lg text-gray-600'>block chain design</p>
            <Button>Get Started</Button>
          </div>
          <div className=''>
            <Image
              src='https://cdn.buttercms.com/36LchfK7QY6w1aZDeCio'
              alt='iot logo'
              width={800}
              height={800}
            />
          </div>
        </div>
        {/* <Join /> */}

        <div className=''>
          <GlobeDemo />
        </div>
        <div className=''>
          <h1 className='text-4xl font-bold text-primary text-center mb-8'>
            Features of the App
          </h1>
          {/* <BentoGridThirdDemo /> */}
          <BentoGridThirdDemo />
        </div>

        <div className='flex flex-col items-center justify-center'>
          <h1> Single Id to access everything</h1>
            <AnimatedBeamDemo />
          </div>
        <div className='flex flex-col items-center  justify-center mt-40 mb-40'>
          <h1 className='text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white'>
            International Research Center for AI and IoT
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg">
            The Department of <span className="text-sky-500 font-semibold dark:text-sky-400">Artificial Intelligence</span> at Near East University has developed a
            this health app. as final project of semester of spring of 2023.
          </p>

        </div>
        <section className="py-12 bg-gray-200 rounded-3xl dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">What Users Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <div className="mb-4">

                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Students, join us in testing our cutting-edge health app developed by the Department of AI at Near East University. Monitor your health,
                    receive personalized reports, and take control of your well-being. Give it a try today!</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">- AI and IoT</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <div className="mb-4">

                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Students, discover the incredible health app created by the Department of AI. Its like having a personal health wizard in your pocket.
                    Track activities, monitor vital signs, and unleash your inner health superhero. Try it now!
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">- Mercel</p>
              </div>
            </div>
          </div>
        </section>
      </main >
    </div >
  )
}
