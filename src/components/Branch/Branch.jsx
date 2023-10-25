import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
const Branch = ({data}) => {
    const {_id, name, rating, type, food, phone, email, address, url} = data
    return (
        <div className="card w-80 bg-base-100 shadow-xl h-[30rem]">
            <figure><img src={url} alt="Shoes" className="h-[14rem]" /></figure>
            <div className="card-body p-5 px-6">
                <div className="card-actions justify-start gap-3">
                    <div className="badge badge-outline bg-[#ab1d2c] text-white">{type}</div>
                    <div className="badge badge-outline">{food}</div>
                </div>
                <div>
                    <span className="text-bold text-[#ab1d2c]">{rating}</span>/5
                </div>
                <h2 className="card-title">
                    {name}
                </h2>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-4 justify-start items-center'>
                        <div>
                            <AiOutlinePhone />
                        </div>
                        <div>
                            {phone}
                        </div>
                    </div>
                    <div className='flex gap-4 justify-start items-center'>
                        <div>
                            <FiMail/>
                        </div>
                        <div>
                            {email}
                        </div>
                    </div>
                    <div className='flex gap-4 justify-start items-center'>
                        <div>
                            <FaLocationDot/>
                        </div>
                        <div>
                            {address}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Branch