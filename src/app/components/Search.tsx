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
          'bg-black p-2 w-[250px] sm:w-60 text-sm font-normal rounded-md text-white focus:outline-white focus:outline-dotted focus:opacity-100 outline-dashed opacity-50'
        }
        placeholder='Search for anything...'
      />
    </form>
  )
}
