const AddProduct = () => {

  const handleProduct = (event) => {
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

    fetch('http://localhost:8080/addedproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the response is JSON
      })
      .then((data) => {
        console.log(data); // Process the response data here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div >

      <div className="flex flex-col gap-4 lg:p-20 p-10">
        <div className="text-3xl">
          FILL THE REQUIRED INFORMATION
        </div>
        <div>
          <form onSubmit={handleProduct} className="flex flex-col gap-4 lg:w-[30rem]">
            <div className="form-control">
              <input type="text" name="productImage" placeholder="Product Image" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <input type="text" name="productName" placeholder="Product Name" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <input type="text" name="brandID" placeholder="Brand ID" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <input type="text" name="productType" placeholder="Product Type" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <input type="text" name="productPrice" placeholder="Product Price" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <input type="text" name="productDes" placeholder="Product Description" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <input type="text" name="productRating" placeholder="Product Rating" className="input input-bordered w-full" />
            </div>
            <input type="submit" value="Add Product" className="btn btn-primary bg-[#ab1d2c] border-none" />
          </form>
        </div>
      </div>
    </div>
  )
}
export default AddProduct