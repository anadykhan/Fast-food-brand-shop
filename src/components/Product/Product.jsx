import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import { AuthContext } from "../../provider/AuthProvider"

const Product = ({ data }) => {

    const { _id, image, name, brandID, brandName, type, price, des, rating } = data
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const handleCart = () => {

        const newCart = { image, name, brandID, brandName, type, price, des, rating }

        if (user) {
            fetch('http://localhost:8080/addedcart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCart),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        return response.json(); // Assuming the response is JSON

                    }

                })
                .then((data) => {
                    console.log(data); // Process the response data here
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }

        else {
            Swal.fire({
                icon: 'error',
                title: 'You are not logged in',
                text: 'Looks like you have given the wrong credentials'
            })
        }


    }

    const handleDetails = () => {
        navigate(`/productdetails/${_id}`)
    }

    const handleUpdate = () => {
        navigate(`/updateproduct/${_id}`)
    }

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className="h-[14rem]" /></figure>
            <div className="card-body p-5 px-6">
                <div className="card-actions justify-start gap-3">
                    <div className="badge badge-outline bg-[#ab1d2c] text-white">{brandName}</div>
                    <div className="badge badge-outline">{type}</div>
                </div>
                <div>
                    {rating}/5
                </div>
                <h2 className="card-title">
                    {name}
                </h2>
                <p>{des}</p>
                <div className="card-actions justify-start gap-10">
                    <button className="btn btn-primary !bg-transparent !border-[#ab1d2c] border-2 text-[#ab1d2c] " onClick={handleCart}>ADD TO CART</button>
                    <div className="text-2xl">
                        {price}$
                    </div>
                </div>
                <div className="card-actions justify-start gap-10">
                    <button className="btn btn-primary bg-transparent border-none text-[#ab1d2c] !h-2" onClick={handleUpdate}>UPDATE</button>
                    <button className="btn btn-primary bg-transparent border-none text-[#ab1d2c] !h-2" onClick={handleDetails}>Details</button>
                </div>
            </div>
        </div>
    )
}
export default Product