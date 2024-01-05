import { Billboard } from '@/components/Billboard';
import { Navbar } from '@/components/Navbar';
import userCurrentUser from '@/hooks/userCurrentUser';
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = userCurrentUser();
  return (
   <>
     <Navbar/>
     <Billboard/>
   </>
  )
}
