'use client'

import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"

import { toast } from "react-toastify"

import { updateProduct } from "@/actions/update-product-action"

export default function EditProductForm( {children} ) {

  const router = useRouter();
  const params = useParams();
  const id = +params.id;

  const handleSubmit = async (formData) => {
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      color: formData.get('color')
    }

    const response = await updateProduct(data, id);
    if(response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
      return
    }

    toast.success('Producto actualizado correctamente');
    router.push('/');
  }

  return (
    <div className='bg-white my-10 px-5 py-10 rounded-md shadow-md max-w-xl mx-auto'>
      <form className='space-y-5 rounded-md' action={handleSubmit}>
        
        {children}

        <input type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-full p-3 cursor-pointer rounded-md' value='Guardar' />
      </form>
    </div>
  )
}
