export interface User {
    id: number,
    name: string,
    email: string,
    mobile: string,
    gender: string,
    dob: string,
    isActive: boolean,
    range?: any,
    userType?: string,
    rating:number
}