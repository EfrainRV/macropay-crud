import Link from "next/link";

import DeleteButton from "../ui/DeleteButton";
import ToggleFavorite from "./ToggleFavorite";

export default function FavoritesTable( {products} ) {
  return (
    <div className="mt-10 min-w-full py-2 sm:px-6 lg:px-8 bg-white p-5 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300 ">
        <thead>
          <tr>
            <th scope="col" className="w-3/6 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Producto
            </th>
            <th scope="col" className="w-1/6 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Color
            </th>
            <th scope="col" className="w-1/6 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Precio
            </th>
            <th scope="col" className="w-full py-3.5 pl-3 pr-4 sm:pr-0">
              <span className="sr-only">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">

          {products.map((product) => (
            <tr key={product.id}>
              <td className="w-3/6 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                {product.name}
              </td>
              <td className="w-1/6 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {product.color}
              </td> 
              <td className="w-1/6 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {`$ ${product.price.toFixed(2)}`}
              </td>
              <td className="w-full whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex justify-center items-center gap-8">
                {/* <ToggleFavorite product={product}/> */}
              </td>
            </tr>
          ))}
    
        </tbody>
      </table>
    </div>
  )
}