import { useState } from "react"
import Product from "../Product/Product";
import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
    const brandID = Number(useParams().id)
    const loadedData = useLoaderData()

    const filteredProducts = loadedData.filter(product => brandID == Number(product.brandID))

    console.log(filteredProducts)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center p-2">
        {
        filteredProducts.legth ? filteredProducts.map(data => <Product key={data._id} data={data}></Product>) : <div>No Products here</div>
              
        }
    </div>
  )
}
export default Products