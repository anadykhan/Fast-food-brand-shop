import { useEffect, useState } from "react"
import Category from "../Category/Category";
import { AiOutlineEye } from 'react-icons/ai';


const Brands = () => {

    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch(`https://brand-shop-server-j07dqpm9r-anadykhan.vercel.app/addedbrandlist`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then((response) => response.json())
            .then((messages) => {
                setBrands(messages)
            });
    }, [])



    return (
        <div className="my-32 flex flex-col gap-16 items-center">
            <div className="ml-20 text-3xl">
                OUR TOP PICKED BRANDS 🔥
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center justify-items-center gap-[2rem]">
                {
                    brands.map(data => <Category key={data._id} data={data}></Category>)
                }
            </div>
            <div>
                <button className="btn btn-primary bg-[#f2a22a] text-black border-none"><AiOutlineEye />VIEW ALL BRANDS</button>
            </div>
        </div>
    )
}
export default Brands