import Image from 'next/image'
import { USER_MOCK } from '@/model/mock'
import Link from 'next/link'

export default function Profile() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-start p-24 pt-5 gap-5">
      <div className='w-full flex items-start'>
        <Link href={'/'} className='underline'> {"<- Go back"}</Link>
      </div>
      <div>
        <Image className='rounded-full' width={125} height={125} alt='userImg' src={"/user.png"}></Image>
      </div>
      <div className='flex w-full items-start flex-wrap gap-5'>
        <h1 className='text-3xl w-full text-center'>Name: <span className='font-bold'>{USER_MOCK.name}</span></h1>
        <div className='flex w-full items-center justify-center flex-wrap gap-5'>
          <h3 className='text-xl'>Current Company: <span className='font-bold'>{USER_MOCK.company.name}</span></h3>
          <h3 className='text-xl'>Role: <span className='font-bold'>{USER_MOCK.company.role}</span></h3>
        </div>  
      </div>

      <div className='w-full bg-white flex flex-col rounded-md  items-center' >
        <div  className='p-2 text-2xl  font-bold'>
        Company History
        </div>
        {USER_MOCK.history.map((company, index)=>{
          return(
            <div key={company.name} className={`${index % 2 === 0 ? "bg-slate-400/50" : ''} p-2 w-full`}>
              <p>Company Name: <span className='font-bold'>{company.name}</span></p>
              <p>Role: <span className='font-bold'>{company.role}</span></p>
            </div>)})
        }
      </div>
      <Link href={'/chat'} className='underline font-bold text-blue-700'> {"Contact ->"}</Link>

    </main>
  )
}
