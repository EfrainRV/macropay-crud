export default async function ProductForm( {product} ) {

  return (
    <>
      <div className="space-y-2">
        <label
          className="text-slate-800"
          htmlFor="name"
        >Nombre:</label>
        <input
          id="name"
          type="text"
          name="name"
          className="block w-full p-3 bg-slate-100"
          placeholder="Nombre del Producto"
          defaultValue={product?.name}
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-slate-800"
          htmlFor="price"
        >Precio:</label>
        <input
          id="price"
          name="price"
          className="block w-full p-3 bg-slate-100"
          placeholder="Precio del Producto"
          defaultValue={product?.price}
        />
      </div>

      <div className="space-y-2">
        <label
          className="text-slate-800"
          htmlFor="color"
        >Color:</label>
        <input
          id="color"
          type="text"
          name="color"
          className="block w-full p-3 bg-slate-100"
          placeholder="Color del Producto"
          defaultValue={product?.color}
        />
      </div>
    </>
  )
}