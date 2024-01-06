import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import FrontMain from "./components/Layout/FrontMain.jsx";
import Blog from "./components/Pages/Front/Blog/Blog.jsx";
import ProductDetails from "./components/Pages/Front/ProductDetails/ProductDetails.jsx";
import SignIn from "./components/Pages/Front/Auth/SignIn.jsx";
import SignUp from "./components/Pages/Front/Auth/SignUp.jsx";
import Cart from "./components/Pages/Front/Cart/Cart.jsx";
import Thankyou from "./components/Pages/Front/Thankyou/Thankyou.jsx";
import Checkout from "./components/Pages/Front/Checkout/Checkout.jsx";
import Account from "./components/Layout/Account/index.jsx";
import AccountDashboard from "./components/Layout/Account/AccountDashboard.jsx";
import AccountOrders from "./components/Layout/Account/AccountOrders.jsx";
import AccountDetails from "./components/Layout/Account/AccountDetails.jsx";
import AccountLogout from "./components/Layout/Account/AccountLogout.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <FrontMain/>,
            children: [
                {index: true, element: <Blog/>},
                {path: 'product/:productId', element: <ProductDetails/>},
                {path: 'login', element: <SignIn/>},
                {path: 'signup', element: <SignUp/>},
                {path: 'cart', element: <Cart/>},
                {path: 'thankyou', element: <Thankyou/>},
                {path: 'checkout', element: <Checkout/>},
                {
                    path: 'account',
                    element: <Account/>,
                    children:[
                        {index: true, element: <AccountDashboard/>},
                        {path: 'orders', element: <AccountOrders/>},
                        {path: 'details', element: <AccountDetails/>},
                        {path: 'logout', element: <AccountLogout/>}
                    ]
                },
                // <Route path="/product/:productId" element={<ProductDetails />} />
            ]
        }
    ]);
    return <RouterProvider router={router}/>
}

export default App
