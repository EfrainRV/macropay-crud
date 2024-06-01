'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function BackButton() {

  const router = useRouter()

  return (
    <button onClick={() => router.back()} className="w-full lg:w-fit block bg-blue-500 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-md">Volver</button>
  )
}
