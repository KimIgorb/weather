'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react'

export default function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()
  const inputRef = React.useRef<HTMLInputElement>(null);
  const initialHasCity = new URLSearchParams(searchParams.toString()).has('city');

  const [search, setSearch] = React.useState('')
  const [hasCity, setHasCity] = React.useState(initialHasCity);
  
  async function getCity(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const params = new URLSearchParams(searchParams.toString());
      if (search.trim() !== '') {
        params.set('city', search);
        setSearch('')
        setHasCity(true)
      } else {
        params.delete('city');
        return
      }
      router.push(`${pathname}?${params.toString()}`);
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  }

  return (
    <div className="flex items-center gap-5 z-10 basis-[45%] md:basis-[65%]">
      <input
        ref={inputRef}
        placeholder="Выбрать город"
        className={`${hasCity ? 'bg-secondary' : 'bg-main'} h-9 md:h-12 rounded-xl outline-none pl-4 text-xs md:text-base w-full font-medium placeholder:text-gray-700 placeholder:italic`}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={getCity}
      />
    </div>
  )
}