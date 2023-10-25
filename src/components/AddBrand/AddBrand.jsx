const AddBrand = () => {

  const handleBrand = (event) => {
    event.preventDefault()
    const form = event.target

    const id = form.brandId.value
    const name = form.brandName.value
    const url = form.brandPhoto.value

    const newBrand = { id, name, url }

    console.log(newBrand)

    fetch('http://localhost:8080/addedbrand', {
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
      <div>
        <form onSubmit={handleBrand}>
          <div className="form-control">
            <input type="text" name="brandId" placeholder="Brand ID" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control">
            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control">
            <input type="text" name="brandPhoto" placeholder="Brand Photo URL" className="input input-bordered w-full max-w-xs" />
          </div>
          <input type="submit" value="Add Brand" className="btn btn-primary" />
        </form>
      </div>
    </div>
  )
}
export default AddBrand