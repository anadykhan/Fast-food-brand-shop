import { FcCancel } from 'react-icons/fc';
import Swal from 'sweetalert2'

const CartRow = ({ data }) => {
  const { _id, image, name, brandID, brandName, type, price, des, rating } = data

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )

        fetch(`https://brand-shop-server-j07dqpm9r-anadykhan.vercel.app/deletecart/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              console.log('Deleted Successfully')
            }
          })

      }
    })
  }

  return (
    <div className="grid grid-cols-5 justify-center items-center border-b-2 border-[#ab1d2c]">
      <div>{name}</div>
      <div>{brandName}</div>
      <div>{type}</div>
      <div>{price}</div>
      <div><button className='btn rounded-full' onClick={() => (handleDelete(_id))}><FcCancel /></button></div>
    </div>
  )
}
export default CartRow