import Link from 'next/link'
import Search from './Search'

export default function Navbar() {
  return (
    <header>
      <nav className='md:fixed top-0 inset-x-0 flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-stone-200 bg-black opacity-75 z-50'>
        <h1 className='text-2xl sm:text-xl text-center whitespace-nowrap text-green-400'>
          <Link href='/'>PicPlunge</Link>
        </h1>
        <Search />
      </nav>
    </header>
  )
}
