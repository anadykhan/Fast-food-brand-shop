import { useNavigate } from "react-router-dom"

const Category = ({data}) => {

  const { id, name, url } = data
  const navigate = useNavigate()

  const handleCategory = () => {
    navigate(`/products/${id}`)
  }
  return (
    <div className="" onClick={handleCategory}>
      <div className="h-28 w-72 rounded-lg brightness-50 flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${url})`}}>
              <div className="text-white absolute flex">
                  {name}
              </div>
        </div>
    </div>
  )
}
export default Category