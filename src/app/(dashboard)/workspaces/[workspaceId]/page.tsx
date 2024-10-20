import { getCurrent } from '@/features/auth/actions'
import { redirect } from 'next/navigation'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = async ({}) => {
  const user = await getCurrent()
  if(!user) redirect("/sign-in")
  return <div>page</div>
}

export default page