import { useLoaderData } from "react-router-dom"
import Branch from "../Branch/Branch"
import { key } from "localforage"

const Branches = () => {

    const loadedData = useLoaderData()

    console.log(loadedData)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 p-5 justify-items-center">
        {
            loadedData.map(data => <Branch key={data._id} data={data}></Branch>)
        }
    </div>
  )
}
export default Branches