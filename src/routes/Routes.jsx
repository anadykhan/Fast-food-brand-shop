import { createBrowserRouter } from "react-router-dom"
import Root from "../components/Root"
import Home from "../components/Home/Home"
import AddBrand from "../components/AddBrand/AddBrand"
import AddProduct from "../components/AddProduct/AddProduct"
import Login from "../components/Login/Login"
import Cart from "../components/Cart/Cart"
import Products from "../components/Products/Products"
import UpdateProduct from "../components/UpdateProduct/UpdateProduct"
import ProductDetails from "../components/ProductDetails/ProductDetails"
import Registration from "../components/Registration/Registration"
import Branches from "../components/Branches/Branches"
import PrivateRoute from "./PrivateRoute"
import NoPage from "../components/NoPage/NoPage"

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/addbrand',
                element: <PrivateRoute><AddBrand></AddBrand></PrivateRoute>
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/cart',
                loader: () => fetch('http://localhost:8080/addedcartlist'),
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/products/:id',
                loader: () => fetch('http://localhost:8080/addedproductlist'),
                element: <Products></Products>
            },
            {
                path: '/updateproduct/:id',
                loader: () => fetch('http://localhost:8080/addedproductlist'),
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
            },
            {
                path: '/productdetails/:id',
                loader: () => fetch('http://localhost:8080/addedproductlist'),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/branches',
                loader: () => fetch('http://localhost:8080/addedlocationlist'),
                element: <Branches></Branches>
            },
            {
                path: '*',
                element: <NoPage></NoPage>
            }
        ]
    }
])
export default Routes