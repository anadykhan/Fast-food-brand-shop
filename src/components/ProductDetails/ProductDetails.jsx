import { useLoaderData, useParams } from "react-router-dom"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const ProductDetails = () => {

    const productID = useParams().id
    const loadedData = useLoaderData()

    console.log(productID)

    const filtered = loadedData.filter(data => productID == data._id)

    const { _id, image, name, brandID, brandName, type, price, des, rating } = filtered[0]

    const slider = (
        <AwesomeSlider animation="cubeAnimation">
            <div data-src="/path/to/image-0.png" />
            <div data-src="/path/to/image-1.png" />
            <div data-src="/path/to/image-2.jpg" />
        </AwesomeSlider>
    );  


    console.log(filtered)

    return (
        <div className="flex">
            <div className="w-full lg:w-[35rem] flex flex-col gap-6 m-5">
                <div className="h-[20rem] lg:w-[35rem] rounded-lg bg-cover" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="flex items-center justify-start gap-10 lg:gap-[20rem]">
                    <div className="flex gap-4">
                        <div className="badge badge-outline bg-[#ab1d2c] text-white text-base p-4">{brandName}</div>
                        <div className="badge badge-outline text-base p-4">{type}</div>
                    </div>
                    <div>
                        {rating}/5
                    </div>
                </div>
                <div className="text-5xl">
                    {name}
                </div>
                <div className="text-justify">
                    {des}
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default ProductDetails