import { SignupUser ,LoginUser} from "@/interface/auth";
import axios from "axios";
axios.defaults.baseURL = "https://teamproject-powerpulse-group4.onrender.com/";


const setHeader = (header:any) => {
    axios.defaults.headers.setHeader = header
}

 export const signupFetch = async (body:SignupUser) => {
 const response = await axios
    .post("/identification/signup", body)
    const {data} = response

console.log(data)
};
 export const login = async (body:LoginUser) => {
    const response = await axios.post("/identification/login",body)
    const {data} = response
    const {token} = data
    console.log(token)
    setHeader(token)
 }
 export const currnetUser = async () => {
    const response = await axios.get('/identification/currentUser')
    const {data} = response
    console.log(data)
 }
 export const logOut = async () => {
    const response = await axios.patch('')
    console.log(response)
 }