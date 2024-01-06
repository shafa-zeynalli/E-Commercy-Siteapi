import classes from './checkout.module.css'


const Checkout = ()=>{
    return(
        <div className={`${classes.checkout}  w_100 `} >
            <div className={classes.details}>
                <h2>Billing Details</h2>

                <form action="" method="POST" className={classes.form}>
                    <div className={classes.inputs}>
                        <label htmlFor="fName">First Name*
                            <input type="text" name="first_name" value=" "/>
                                {/*@error('first_name')*/}
                                {/*<span className="errMessage">{{$message}}</span>*/}
                                {/*@enderror*/}
                        </label>

                        <label htmlFor="lName">Last Name*
                            <input type="text" name="last_name" value=" "/>
                                {/*@error('last_name')*/}
                                {/*<span className="errMessage">{{$message}}</span>*/}
                                {/*@enderror*/}
                        </label>

                        <label htmlFor="phone">Phone*
                            <input type="text" name="phone" value=" "/>
                                {/*@error('phone')*/}
                                {/*<span className="errMessage">{{$message}}</span>*/}
                                {/*@enderror*/}
                        </label>

                        <label htmlFor="email">Email Address*
                            <input type="text" name="email" value=" "/>
                                {/*@error('email')*/}
                                {/*<span className="errMessage">{{$message}}</span>*/}
                                {/*@enderror*/}
                        </label>

                        <label htmlFor="address">Street Address*
                            <input type="text" name="address" value=" "/>
                                {/*@error('address')*/}
                                {/*<span className="errMessage">{{$message}}</span>*/}
                                {/*@enderror*/}
                        </label>

                    </div>

                    <div className={classes.checkbox}>
                        <label htmlFor=""><input type="checkbox"/>
                            I have read and agree to the website <span> Terms and Conditions.* </span>
                        </label>
                    </div>

                    <button type="submit">Place Order</button>

                </form>
            </div>

            <div className={classes.order}>
                <h2>Your Order</h2>
                <div>
                    <p>Product <span>Subtotal</span></p>
                    <p>Total <span>$0 </span></p>
                </div>

            </div>
        </div>
    )
}

export default Checkout;