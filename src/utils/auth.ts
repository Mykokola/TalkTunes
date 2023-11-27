import { SignupUser, LoginUser } from "@/interface/auth";
import axios from "axios";
axios.defaults.baseURL = "https://teamproject-powerpulse-group4.onrender.com/";
const baseURL = "https://teamproject-powerpulse-group4.onrender.com/";
const setHeader = (header: any) => {
  if (header) {
    axios.defaults.headers.common = { Authorization: `Bearer ${header}` };
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signupFetch = async (body: SignupUser) => {
  const response: any = await fetch(`${baseURL}identification/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json()
  const { token } = data;
  setHeader(token);
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
  const { token } = data;
  setHeader(token);
};
export const currnetUser = async () => {
  const response = await fetch(`${baseURL}identification/currentUser`,
  {
   headers: {Authorization: 'Bearer {token}'}
  })
  const data  =  await response.json();
  return data;
};
export const logOut = async () => {
  const response = await axios.post("/identification/logout");
  setHeader("");
};
