import { getCurrent } from '@/features/auth/actions'
import { WorkspaceForm } from '@/features/workspaces/components/workspace-form'
import { redirect } from 'next/navigation'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = async ({}) => {
  const user = await getCurrent()
  if(!user) redirect("/sign-in")
  return <div className='w-full lg:max-w-xl'>
    <WorkspaceForm/>
  </div>
}

export default page