import { prisma } from '@/src/lib/prisma'
import EditProductForm from '@/components/products/EditProductForm'
import ProductForm from '@/components/products/ProductForm'
import BackButton from '@/components/ui/BackButton';
import { notFound } from 'next/navigation';

async function getProductById(id) {
  return await prisma.product.findUnique({
    where: {
      id
    }
  });
}

export default async function EditProductPage( {params} ) {

  const product= await getProductById(+params.id);

  if(!product) {
    notFound();
  }

  return (
    <main className='w-full h-full max-w-[1920px] mx-auto bg-gray-50 p-4'>

      <BackButton />

      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>

    </main>
  )
}
