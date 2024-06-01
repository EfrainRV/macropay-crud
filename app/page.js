import { redirect } from "next/navigation";
import { prisma } from "@/src/lib/prisma";
import ProductsTable from "@/components/products/ProductsTable";
import ProductsPagination from "@/components/products/ProductsPagination";
import Link from "next/link";

async function productsCount() {
  return await prisma.product.count();
}

async function getProducts(page, limit, totalProducts) {

  if(totalProducts < 0) return

  const skip= (page - 1) * limit;

  return await prisma.product.findMany({
    take: limit,
    skip: skip,
  });
}

export default async function Home( {searchParams} ) {

  const page= +searchParams.page || 1;
  const limit= 10;

  if (page < 1) redirect('/?page=1');

  const totalProductsData = productsCount();
  const productsData = getProducts( page, limit);

  const [products, totalProducts] = await Promise.all( [productsData, totalProductsData] )

  const totalPages= Math.ceil(totalProducts / limit);

  if (page > totalPages) redirect(`/?page=${totalPages}`);

  return (
    <main className="w-full h-full max-w-[1920px] mx-auto bg-gray-50 p-4">
      
      <Link href="/create" className="w-full lg:w-fit block bg-blue-500 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-md">Nuevo Producto</Link>
      
      <ProductsTable products={products}/>

      <ProductsPagination page={page} totalPages={totalPages}/>
        
    </main>
  );
}
