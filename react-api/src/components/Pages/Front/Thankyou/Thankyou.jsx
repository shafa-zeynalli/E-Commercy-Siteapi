import  classes from './thankyou.module.css';
import  styles from '../Checkout/checkout.module.css';



const Thankyou = ()=>{
    return (
        <div className={`${styles.checkout} w-100`}>
            <div className={`${styles.details} ${classes.thanks}`}>
                <h2>Thank you!</h2>

                <div>
                    <p>Order number: orderID </p>
                    <p>Your order has been received. An email confirming your order has been sent to
                        <span>email </span>.</p>
                </div>
                <h3>Shipping Address</h3>

                <div className="">
                    <p>address</p>
                </div>
            </div>
            <div className={styles.order}>
                <h2>Your Order</h2>
                <div>
                    <p>Product <span>Subtotal</span></p>
                    <p>Total <span>$0</span></p>
                </div>
            </div>
        </div>
    )
}

export default Thankyou;