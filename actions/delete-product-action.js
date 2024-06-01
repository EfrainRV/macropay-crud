'use server'

import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteProduct(id) {
  try {
    await prisma.product.delete({
      where: {
        id
      }
    });
    
    revalidatePath('/');
  } catch (error) {
    return {
      errors: error
    }
  }
}