import { useLoaderData } from "react-router-dom"
import CartRow from "../CartRow/CartRow"

const Cart = () => {

  const loadeddata = useLoaderData()
  console.log(loadeddata)

  const handleCart = () => {

  }

  return (
    <div className="flex flex-col justify-center p-6 gap-10">
      <div className="grid grid-cols-5">
        <div>Name</div>
        <div>Brand</div>
        <div>Type</div>
        <div>Price</div>
        <div>Action</div>
      </div>
      <div>
        {
          loadeddata.map(data => <CartRow data={data} key={data._id}></CartRow>)
        }
      </div>

      <div className="w-full flex justify-center">
        <button className="btn btn-primary bg-[#ab1d2c] border-none text-white !h-2" onClick={handleCart}>PURCHASE</button>
      </div>
    </div>
  )
}
export default Cart