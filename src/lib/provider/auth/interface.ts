import { type Session } from "next-auth";

export interface User {
  id: string
  name: string
  email: string
  groups: string[]
}

export interface UserResponse {
  pk: string
  username: string
  email: string
  groups: string[]
}

export interface Response {
  access: string
  user: UserResponse
}

export interface Credential {
  providerName: string
  username: string
  password: string
}

