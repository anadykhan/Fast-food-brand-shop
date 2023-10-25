import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import { FcGoogle } from 'react-icons/fc';

const Registration = () => {
    const { createUser, googleRegister, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const validPassword = new RegExp('/^[a-z]{0,5}$/');

    const handleGoogle = () => {
        console.log("Hello world")
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

                navigate('/')
            }).catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Wrong Credentials',
                    text: 'Looks like you have given the wrong credentials'
                })
            })
    }

    const handleRegistration = (event) => {
        event.preventDefault()
        const form = event.target


        const name = form.email.value
        const password = form.password.value

        const userRegistration = { name, password }
        console.log(userRegistration)

        if (validPassword.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Wrong Credentials',
                text: 'Conditions didnot match. Password should have at least 6 characters, will have a capital letter and will have a special letter'
            })
        }
        else {
            createUser(name, password)
                .then(result => {
                    console.log(result)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Successfully registered in on ${name}`,
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
    }

    return (
        <div>
            <div className="flex lg:gap-20 lg:justify-start justify-center items-center">
                <div>
                    <img className="h-[40rem]" src="https://i.ibb.co/SnPxGtX/joseph-gonzalez-fdl-ZBWIP0a-M-unsplash.jpg hidden lg:visible" alt="" />
                </div>
                <div className="flex flex-col items-center text-center gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co/82bC3dy/1090804-1478.jpg" alt="" className="w-[6rem]" />
                        <div className="text-2xl">SIGN UP TO GET THE BEST</div>
                        <div className="text-xs">You can sign up here to get the best out of the service</div>
                    </div>
                    <form action="" onSubmit={handleRegistration} className="flex flex-col gap-6 w-[25rem]" >
                        <div className="form-control">
                            <input type="text" placeholder="Email" className="input input-bordered w-full text-sm" name="email" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" className="input input-bordered w-full text-sm" name="password" />

                        </div>
                        <input type="submit" value="SIGN UP" className="btn btn-primary bg-[#ab1d2c] border-none" />
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
        </div>
    )
}
export default Registration