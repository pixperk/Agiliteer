import { getCurrent } from '@/features/auth/actions'
import { SignUpCard } from '@/features/auth/components/sign-up-card'
import { redirect } from 'next/navigation'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = async ({}) => {
  const user = await getCurrent()

  if (user) redirect("/")

  return <SignUpCard/>
}

export default page