"use client"
import Image from 'next/image'
import { MESSAGES_MOCK, USERS_MOCK } from '@/model/mock'
import Link from 'next/link'
import { RECIPIENT } from '@/model/model'
import React from 'react'
import { useChat } from './hooks/useChat'

export default function Chat() {
  const {selected, setSelected} = useChat()

  return (
    <main className="flex h-[calc(100vh-5rem)] items-center justify-start  px-10 pb-8 pt-5 gap-5 full overflow-hidden">
      <div className="flex h-[100%] flex-col items-center justify-start w-5/12 overflow-y-auto overflow-x-hidden">
        <Link href={'/'} className='underline mb-2'> {"<- Go back"}</Link>
        <h1 className='text-3xl w-full text-center mb-2'><span className='font-bold'>Select Profile:</span></h1>
        {USERS_MOCK.map((user,index)=>{
          return(
            <button key={user.name + index} className='w-full bg-white flex gap-2 rounded-md p-2 border-black border-[1px]' onClick={()=> setSelected(user)}>
              <Image className='rounded-full' width={72} height={50} alt='userImg' src={"/user.png"}></Image>
              <div>
                <p>{user.name}</p>
                <p>{user.company.name}</p>
                <p>{user.company.role}</p>
              </div>
            </button>)}
        )}
      </div>
      <div className="flex h-[100%] bg-white flex-1 flex-col justify-end items-center w-[100%] rounded-md p-3 border-[1px] border-black gap-3">
        {!!selected ?
          <>
            <div className="flex h-[100%] w-full flex-col items-center justify-start gap-5 overflow-y-auto overflow-x-hidden">
              {MESSAGES_MOCK.map((message,index)=>{
                return(
                  <div key={message.body + index} className={`w-full flex gap-2 rounded-md p-2 ${message.recipient === RECIPIENT.From ? 'justify-end': 'justify-start'}`}>
                    <div className={`w-fit border-black border-[1px] p-3 rounded-xl ${message.recipient === RECIPIENT.From ? 'bg-blue-400': 'bg-green-300'}`}>
                      <p>{message.body}</p>
                    </div>
                  </div>)}
              )}
            </div>
            <div className='flex w-full gap-2 h-12'>
              <textarea  rows={2}  className='h-12 w-full rounded-lg p-2 border-black border-[1px] resize-none'></textarea><button className='rounded-full bg-black text-white w-12'>{'->'}</button>
            </div>
          </> : <div className='flex h-full w-full justify-center items-center text-center font-bold'> Select a User to chat with</div> }
      </div>
    </main>

  )
}
