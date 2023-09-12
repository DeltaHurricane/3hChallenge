import { Message, ROLE, RECIPIENT, User } from "./model"

export const USER_MOCK: User = {
  name: 'User1',
  company: {name:"current company", role:ROLE.Senior},
  history: [{
    name: "current company",
    role: ROLE.Senior
  },{
    name: "old company",
    role: ROLE.Junior
  },{
    name: "old company",
    role: ROLE.Junior
  },{
    name: "old company",
    role: ROLE.Junior
  }],
  image:"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
}

export const USERS_MOCK: User[] = [USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK,USER_MOCK]

const MESSAGE_FROM_MOCK: Message = {
  body: 'Some Ipsum',
  recipient: RECIPIENT.From,
}

const MESSAGE_TO_MOCK: Message = {
  body: 'Another Thing',
  recipient: RECIPIENT.To,
}

export const MESSAGES_MOCK: Message[] =  [MESSAGE_FROM_MOCK,MESSAGE_TO_MOCK,MESSAGE_FROM_MOCK,MESSAGE_FROM_MOCK,MESSAGE_TO_MOCK,MESSAGE_FROM_MOCK,MESSAGE_FROM_MOCK,MESSAGE_TO_MOCK,MESSAGE_FROM_MOCK,MESSAGE_FROM_MOCK,MESSAGE_TO_MOCK,MESSAGE_FROM_MOCK]