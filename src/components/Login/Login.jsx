import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

  const { signIn, googleRegister, user } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleGoogle = () => {
    googleRegister()
      .then(result => {
        console.log(result)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Successfully signed in on ${user.email}`,
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(error => {
        console.log(error)
      })
  }

  const handlelogin = (event) => {
    event.preventDefault()
    const form = event.target


    const name = form.email.value
    const password = form.password.value

    const userLogin = { name, password }
    console.log(userLogin)

    signIn(name, password)
      .then(result => {
        console.log(result)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Successfully signed in on ${name}`,
          showConfirmButton: false,
          timer: 1500
        })

        navigate('/')
      })
      .catch(error => {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Wrong Credentials',
          text: 'Looks like you have given the wrong credentials'
        })
      })
  }

  return (
    <div className="flex lg:gap-20 lg:justify-start justify-center items-center">
      <div className="">
        <img className="h-[40rem]" src="https://i.ibb.co/SnPxGtX/joseph-gonzalez-fdl-ZBWIP0a-M-unsplash.jpg hidden lg:visible" alt=""/>
      </div>
      <div className="flex flex-col items-center text-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <img src="https://i.ibb.co/82bC3dy/1090804-1478.jpg" alt="" className="w-[6rem]" />
          <div className="text-2xl">WELCOME BACK, LOGIN</div>
          <div className="text-xs">You can log in here to get the best out of the service</div>
        </div>
        <form action="" onSubmit={handlelogin} className="flex flex-col gap-6 w-[25rem]" >
          <div className="form-control">
            <input type="text" placeholder="Email" className="input input-bordered w-full text-sm" name="email" />
          </div>
          <div>
            <input type="password" placeholder="Password" className="input input-bordered w-full text-sm" name="password" />

          </div>
          <input type="submit" value="login" className="btn btn-primary bg-[#ab1d2c] border-none" />
        </form>
        <div className="flex flex-col gap-5">
          <div>
            or
          </div>
          <div className="flex justify-center items-center gap-4 btn border-2 border-[#ab1d2c] text-[#ab1d2c]" onClick={handleGoogle}>
            <div>
              LOG IN WITH
            </div>
            <div className="">
              <span><FcGoogle /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login