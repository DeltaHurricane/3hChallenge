import { User } from "@/model/model"
import React from "react"

export function useChat() {
  //open a websocket connection and listen to message events
  // events related to user list
  const [selected, setSelected] = React.useState<User|null>(null)

  React.useEffect(()=>{
    //fetchDataHere
    //listen to events and update the message feed with new data
    //check if new message comes from selected user and update current feed
  },[selected])





  return {
    selected,
    setSelected
  }
} 