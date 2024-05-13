import { buttonVariants } from '../components/ui/button'
import { toast } from 'sonner'
import Link from 'next/link'

export const useCustomToasts = () => {
  const loginToast = () => {
    return toast('Login required.',{
      description: 'You need to be logged in to do that.',
    
      action: (
        <Link
          onClick={() => console.log('login')}
          href='/sign-in'
          className={buttonVariants({ variant: 'outline' })}>
          Login
        </Link>
      ),
    })
  }
  return { loginToast }
}