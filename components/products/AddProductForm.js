'use client'

import { useRouter } from "next/navigation"
import { createProduct } from "@/actions/create-product-action"
import { ProductSchema } from "@/src/schema"
import { toast } from "react-toastify"

export default function AddProductForm( {children} ) {

  const router = useRouter();

  const handleSubmit = async (formData) => {
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      color: formData.get('color')
    }

    const response = await createProduct(data);
    if(response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
      return
    }

    toast.success('Producto creado correctamente');
    router.push('/');
  }

  return (
    <div className='bg-white my-10 px-5 py-10 rounded-md shadow-md max-w-xl mx-auto'>
      <form className='space-y-5 rounded-md' action={handleSubmit}>
        
        {children}

        <input type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-full p-3 cursor-pointer rounded-md' value='Crear' />
      </form>
    </div>
  )
}
