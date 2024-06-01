'use client'

import FavoritesTable from '@/components/products/FavoritesTable'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';

export default function Favorites() {

  const favoriteProducts = useSelector( state => Object.values(state.favorites) );
  const [products, setProducts] = useState(favoriteProducts);

  console.log(products);

  return (
    <main className="w-full h-full max-w-[1920px] mx-auto bg-gray-50 p-4">
      
      <FavoritesTable products={favoriteProducts} />
        
    </main>
  )
}
