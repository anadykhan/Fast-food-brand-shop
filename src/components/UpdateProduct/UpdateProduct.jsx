import { useLoaderData, useParams } from "react-router-dom"
import Swal from 'sweetalert2'

const UpdateProduct = () => {

    const loadedData = useLoaderData()
    const productID = useParams()

    const filteredData = loadedData.filter(data => data._id == productID.id)

    const { _id, image, name, brandID, brandName, type, price, des, rating } = filteredData[0]

    console.log(name)
    const updateProduct = (event) => {

        event.preventDefault();
        const form = event.target

        const image = form.productImage.value
        const name = form.productName.value
        const brandID = form.brandID.value
        const brandName = form.brandName.value
        const type = form.productType.value
        const price = form.productPrice.value
        const des = form.productDes.value
        const rating = form.productRating.value

        const newProduct = { image, name, brandID, brandName, type, price, des, rating }

        console.log(newProduct)

        fetch(`http://localhost:8080/updateproduct/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return (
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Successfully Added`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                ) // Assuming the response is JSON
                
            })
            .then((data) => {
                console.log(data); // Process the response data here
                
            })
            .catch((error) => {
                console.error("Error:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Something Wrong',
                    text: 'Looks like you have given the wrong credentials'
                })
            });
    }

  return (
      <div>
          <div className="flex flex-col gap-4 p-20">
              <div className="text-3xl">
                  UPDATE THE REQUIRED INFORMATION
              </div>
              <form onSubmit={updateProduct} className="flex flex-col gap-4 w-[30rem]">
                  <div className="form-control">
                      <input type="text" name="productImage" defaultValue={image} placeholder="Product Image" className="input input-bordered w-full" />
                  </div>
                  <div className="form-control">
                      <input type="text" name="productName" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                  </div>
                  <div className="form-control">
                      <input type="text" name="brandID" defaultValue={brandID} placeholder="Brand ID" className="input input-bordered w-full" />
                  </div>
                  <div className="form-control">
                      <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand Name" className="input input-bordered w-full" />
                  </div>
                  <div className="form-control">
                      <input type="text" name="productType" defaultValue={type} placeholder="Product Type" className="input input-bordered w-full" />
                  </div>
                  <div className="form-control">
                      <input type="text" name="productPrice" defaultValue={price} placeholder="Product Price" className="input input-bordered w-full" />
                  </div>
                  <div className="form-control">
                      <input type="text" name="productDes" defaultValue={des} placeholder="Product Description" className="input input-bordered w-full" />
                  </div>
                  <div className="form-control">
                      <input type="text" name="productRating" defaultValue={rating} placeholder="Product Rating" className="input input-bordered w-full" />
                  </div>
                  <input type="submit" value="Update Product" className="btn btn-primary" />
              </form>
          </div>
      </div>
  )
}
export default UpdateProduct