"use client"
import Link from "next/link"
import { ModalAuth } from "@/components/modal"
import { useState } from "react"
export const Header = () =>{
const [signup,setSignup] = useState(false)
const signUpBtn:() => void  = () => {
  document.body.style.overflow = 'hidden'
  setSignup(true)}
const closeBtn:() => void = () => {
  document.body.style.overflow = 'auto'
  setSignup(false)}
return(
  <header className='mr-14 container  pt-7  flex items-center justify-between   font-medium  '>
  <nav className='text-xl gap-x-3 flex' >
<Link  href="#Achievements">Achievements</Link>
<Link href="#Game">Game</Link>
  <Link href="#Contact">Projects</Link>
  </nav>
  <div className=" gap-5 flex">
<button onClick={signUpBtn} className="authButton     bg-slate-400 text-cyan-50 ">Register</button>
  <button className="authButton  bg-slate-400 text-red-400 " >Login</button>
  </div>
  {signup && <ModalAuth closeBtn={closeBtn}></ModalAuth>}

  </header>  
)}