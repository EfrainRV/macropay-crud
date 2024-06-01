import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string()
          .trim()
          .min(1, "El nombre del producto no puede estar vacío"),
  price: z.string()
          .trim()
          .transform((value) => parseFloat(value))
          .refine((value) => value > 0, { message: "El precio del producto debe ser mayor a 0" }),
  color: z.string()
          .min(1, "El color del producto no puede estar vacío")
});