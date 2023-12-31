const AddBrand = () => {

  const handleBrand = (event) => {
    event.preventDefault()
    const form = event.target

    const id = form.brandId.value
    const name = form.brandName.value
    const url = form.brandPhoto.value

    const newBrand = { id, name, url }

    console.log(newBrand)

    fetch('https://brand-shop-server-j07dqpm9r-anadykhan.vercel.app/addedbrand', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBrand),
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
    <div>
      <div className="p-5">
        <form onSubmit={handleBrand} className="flex flex-col gap-5">
          <div className="form-control">
            <input type="text" name="brandId" placeholder="Brand ID" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control">
            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control">
            <input type="text" name="brandPhoto" placeholder="Brand Photo URL" className="input input-bordered w-full max-w-xs" />
          </div>
          <input type="submit" value="Add Brand" className="btn btn-primary bg-[#ab1d2c] border-none" />
        </form>
      </div>
    </div>
  )
}
export default AddBrand