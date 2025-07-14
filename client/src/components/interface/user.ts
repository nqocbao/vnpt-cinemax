export interface User {
  id: number
  name: string
  email: string
  phone: number
  password: string
  gender: string 
  role: string         
  customer: any | null    
}