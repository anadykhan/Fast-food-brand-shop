import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"
import { NavLink, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

const Menu = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                console.log(result)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Successfully signed out`,
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(error => {
                {
                    console.log(error)
                }
            })
    }

    return (
        <div className="bg-[#070521] flex text-white text-xs p-1 justify-center flex-col lg:flex-row gap-0 lg:gap-[25rem] ">
            <div className="flex gap-5">
                <div className="">
                    Email: hamabis@gmail.com
                </div>
                <div>
                    |
                </div>
                <div>
                    Contact: +991293812
                </div>
            </div>
            <div className="flex gap-5">
                <div>
                    $USD
                </div>
                <div>
                    |
                </div>
                <div className="flex gap-4">
                    {
                        user ? (user.displayName ? user.displayName : user.email) : "Account"
                    }
                    <div>
                        |
                    </div>
                    {
                        user ? <button onClick={handleSignOut}>Sign Out</button> : <NavLink to='/login'>SIGN IN</NavLink>
                    }
                </div>
            </div>
        </div>
    )
}
export default Menu