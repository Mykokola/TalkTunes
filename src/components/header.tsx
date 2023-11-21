import Link from "next/link"
export const Header = () => (
  <header className='container mr-14  pt-7'>
  <nav className='text-xl gap-x-3 flex  justify-end  font-medium   ' >
<Link  href="#Achievements">Achievements</Link>
<Link href="#Game">Game</Link>
  <Link href="#Contact">Projects</Link>
  </nav>
  </header>  
)