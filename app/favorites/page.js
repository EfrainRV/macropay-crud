'use client'

import FavoritesTable from '@/components/products/FavoritesTable'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { selectFavoriteProducts } from '@/src/store/favorites/favoritesSlice';

export default function Favorites() {

  const favoriteProducts = useSelector( selectFavoriteProducts );
  const [products, setProducts] = useState(favoriteProducts);

  console.log(products);

  return (
    <main className="w-full h-full max-w-[1920px] mx-auto bg-gray-50 p-4">
      
      <FavoritesTable products={products} />
        
    </main>
  )
}
