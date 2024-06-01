'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

import { deleteProduct } from "@/actions/delete-product-action"
import { toast } from "react-toastify"

export default function DeleteButton( {product} ) {

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const id = product.id;

  const handleDelete = async () => {
    const response = await deleteProduct(id);
    if(response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
      return
    }

    toast.success('Producto eliminado correctamente');
    router.push('/');
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="text-red-600 hover:text-red-400">Eliminar</button>

      {
        showModal && (
          <div className="absolute top-0 left-0 bottom-0 right-0 backdrop-blur-sm bg-black/10 flex justify-center items-center">
            <div className="min-w-[350px] h-[150px] bg-white rounded-md shadow-md flex flex-col justify-center items-center">
              <p>¿Deseas eliminar?</p>
              <div className="mt-4 flex gap-3">
                <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold p-3 cursor-pointer rounded-md">Eliminar</button>
                <button onClick={() => setShowModal(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 cursor-pointer rounded-md">Cancelar</button>
              </div>

            </div>
          </div>
        )
      }
      
    </>
  )
}