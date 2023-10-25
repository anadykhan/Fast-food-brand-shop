import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Menu from "./Menu/Menu"

const Root = () => {

  return (
    <div>
      <Menu></Menu>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
export default Root