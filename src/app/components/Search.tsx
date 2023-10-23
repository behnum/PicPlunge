'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/results/${search}`)
    setSearch('')
  }

  return (
    <form
      className='flex justify-center md:justify-between'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
        className={
          'bg-white p-2 w-[250px] sm:w-80 text-xl rounded-md text-black focus:outline-none opacity-75'
        }
        placeholder='Search for anything...'
      />
    </form>
  )
}
