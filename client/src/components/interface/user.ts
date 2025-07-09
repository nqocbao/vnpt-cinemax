export interface User {
  id: number
  name: string
  email: string
  phone: string
  password: string
  gender: string 
  role: string         
  customer: any | null    
}