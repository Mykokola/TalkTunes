import Link from "next/link"
export const Header = () => (
  <header className='container mr-14  pt-7'>
  <nav className='text-xl gap-x-3 flex  justify-end  font-medium   ' >
<Link  href="#Works">Works</Link>
<Link href="#Blog">Blog</Link>
  <Link href="#Contact">Contact</Link>
  </nav>
  </header>  
)