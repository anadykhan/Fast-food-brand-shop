import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider"

const Navbar = () => {

  const {user} = useContext(AuthContext)

  return (
    <div className="flex p-1 lg:gap-14 gap-7 text-sm lg:flex-row flex-col items-center">
      <img src="https://i.ibb.co/82bC3dy/1090804-1478.jpg" className="w-16 lg:ml-20" alt="" />
      <ul className="flex gap-7 items-center flex-col lg:flex-row">
        
        <NavLink to='/'>HOME</NavLink>
        
        <NavLink to='/addbrand'>ADD BRAND</NavLink>
        {
          user ? <NavLink to='/addproduct'>ADD PRODUCT</NavLink> : ""
        }
        {
          user? <NavLink to='/cart'>CART</NavLink> : ""
        }
        {
          user ? "" : <NavLink to='/login'>SIGN IN</NavLink>
        }
        {
          user ? "" : <NavLink to='/registration'>REGISTRATION</NavLink>
        }
        <NavLink to='/branches'>BRANCHES</NavLink>
        
      </ul>
    </div>
  )
}
export default Navbar