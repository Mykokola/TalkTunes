import Link from "next/link"
export const Header = () => (
  <header className='mr-14 container  pt-7  flex items-center justify-between   font-medium  '>
  <nav className='text-xl gap-x-3 flex' >
<Link  href="#Achievements">Achievements</Link>
<Link href="#Game">Game</Link>
  <Link href="#Contact">Projects</Link>
  </nav>
  <div className=" gap-5 flex">
<button className="authButton    bg-slate-400 text-cyan-50 ">Register</button>
  <button className="authButton  bg-slate-400 text-red-400 " >Login</button>
  </div>
  </header>  
)