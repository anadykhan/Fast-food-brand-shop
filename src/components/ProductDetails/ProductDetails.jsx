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
        <div className="flex flex-col-reverse">
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
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/fHZ4QvS/Screenshot-2023-10-25-at-10-52-21-PM.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails