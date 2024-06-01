'use client'

import { toggleFavorite } from "@/src/store/favorites/favoritesSlice";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";

export default function ToggleFavorite( {product} ) {

  const { id } = product;

  const isFavorite = useSelector( state => !!state.favorites[id] );
  const dispatch = useDispatch();
  
  const onToggle = () => {
    dispatch( toggleFavorite(product) );
  }

  return (
    <div className="cursor-pointer" onClick={ onToggle }>
      {isFavorite ? <IoHeart className="text-red-500"/> : <IoHeartOutline className="text-gray-500"/>}
    </div>
  )
}
