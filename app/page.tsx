import Image from 'next/image'
import { USERS_MOCK } from '@/model/mock'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-start p-24 pt-5 gap-5">
      <div className='flex gap-3'>
        <Link className='underline text-3xl text-center' href={`chat`}>Go to Chat</Link>
        <span className='text-3xl text-center'>or</span>
        <h1 className='text-3xl text-center'><span className='font-bold'>Select Profile:</span></h1>
      </div>
      {USERS_MOCK.map((user,index)=>{
        return(
          <Link key={user.name + index} className='w-full bg-white flex gap-2 rounded-md p-2' href={`profile/${user.name}`}>
            <Image className='rounded-full' width={72} height={50} alt='userImg' src={"/user.png"}></Image>
            <div>
              <p>{user.name}</p>
              <p>{user.company.name}</p>
              <p>{user.company.role}</p>
            </div>
          </Link>)}
      )}
    </main>
  )
}
