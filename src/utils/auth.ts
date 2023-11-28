import { SignupUser, LoginUser } from "@/interface/auth";
import axios from "axios";
const baseURL = "https://teamproject-powerpulse-group4.onrender.com/";
const setHeader = (header: any) => {
const token = header
  return (() => {
    return token
  })
};

export const getToken = () => token;
export const setToken = (newToken:any) => {
  token = newToken;
};
let token = ''
console.log(getToken())


export const signupFetch = async (body: SignupUser) => {
  const response: any = await fetch(`${baseURL}identification/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json()
  token = data.token
};
export const login = async (body: LoginUser) => {
  const response: any = await fetch(`${baseURL}identification/login`, {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify(body),
 });
 const data = await response.json()
 console.log(setHeader(data.token)())
  token = data.token
  setToken(token)
};
export const currnetUser = async () => {
  const response = await fetch(`${baseURL}identification/currentUser`,
  {
   headers: {Authorization: `Bearer ${getToken()}`}
  })
  const data  =  await response.json();
  return data;
};
export const logOut = async () => {
const response = await fetch(`${baseURL}identification/logout`,  {
  headers: {Authorization: `Bearer ${token}`}
 })
  setHeader("");
};
