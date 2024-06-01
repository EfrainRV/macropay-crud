import AddProductForm from '@/components/products/AddProductForm'
import ProductForm from '@/components/products/ProductForm'
import BackButton from '@/components/ui/BackButton'

export default function CreateProductPage() {
  return (
    <main className='w-full h-full max-w-[1920px] mx-auto bg-gray-50 p-4'>

      <BackButton />

      <AddProductForm>
        <ProductForm />
      </AddProductForm>

    </main>
  )
}
