import Link from 'next/link'

export default function ProductsPagination( {page, totalPages} ) {

  const pages= Array.from( {length: totalPages}, (_, i) => i + 1 );

  return (
    <nav className='flex justify-center py-10'>

      {
        page > 1 && (
          <Link href={`?page=${page - 1}`} className='px-3 py-2 mx-1 bg-gray-200 text-gray-800 rounded-md'>&laquo;</Link>
        )
      }

      {
        pages.map( p => (
          <Link key={p} href={`?page=${p}`} className={`px-3 py-2 mx-1 bg-gray-200 text-gray-800 rounded-md ${p === page ? 'bg-gray-800 text-white' : ''}`}>{p}</Link>
        ))
      }

      {
        page < totalPages && (
          <Link href={`?page=${page + 1}`} className='px-3 py-2 mx-1 bg-gray-200 text-gray-800 rounded-md'>&raquo;</Link>
        )
      }

    </nav>
  )
}
