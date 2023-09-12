export enum ROLE {
  Senior =  "senior",
  Junior =  "junior",
  Mid =  "mid",
}

export enum RECIPIENT {
  From =  "from",
  To =  "to",

}

interface Company {
  name: string,
  role: ROLE
}

export interface User {
  name: string
  company: Company
  history: Company[]
  image:string 
}

export interface Message {
  body: string
  recipient: RECIPIENT
}