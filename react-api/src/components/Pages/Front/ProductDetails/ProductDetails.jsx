import classes from './productdetails.module.css'
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../../../store/ProductsSlice.jsx";
import React, {useEffect, useState} from "react";


const ProductDetails = () => {
    const {productId} = useParams();

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    const [isDataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        let isMounted = true;

        if (!isDataFetched) {
            dispatch(fetchProducts())
                .then(() => {
                    if (isMounted) {
                        setDataFetched(true);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching products:', error);
                    // Handle error if needed
                });
        }

        // Cleanup function to handle unmounting
        return () => {
            isMounted = false;
        };
    }, [dispatch, isDataFetched]);

    if (products.loading) {
        return <div>Loading...</div>;
    }

    if (products.error) {
        return <div>Error: {products.error}</div>;
    }
    const product = products.data.filter((data) => data.id == productId);
    // console.log(product);

    return (
        <div className={classes.singlePage}>
            {product.map((p) => (
                <div className={`${classes.flex} ${classes.w_100}`} key={p.id}>
                    <div className={`${classes.flex} ${classes.w_60} ${classes.h_340}`}>
                        <div className={`${classes.images} ${classes.w_20}`}>
                            <img src={p.img} alt={p.id}/>
                            <img src={p.img} alt={p.id}/>
                            <img src={p.img} alt={p.id}/>
                        </div>
                        <img src={p.img} alt={p.id}/>
                    </div>
                    <div className={`${classes.information}  ${classes.w_40}`}>
                        <h3>{p.title}</h3>
                        <p className={classes.price}>$<span>{p.price}</span></p>
                        <div>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <span>1 customer review</span>
                            <p className={classes.description}>{p.description}</p>
                            <select name='color'>
                                <option value='color'>Color</option>
                            </select>

                            <form action="" className={classes.myForm} method='post'>
                                <div className={classes.flex}>
                                    <input type='number' className={classes.quantityInput} value='1' name='quantity'/>
                                    {/*<input type='hidden' className={classes.quantityInput} value="{{$product->id}}"*/}
                                    {/*       name='product_id'/>*/}
                                    <button type='submit' className={classes.addToCart}>Add To Cart</button>
                                </div>
                            </form>

                            <p className={classes.tags}> Tags: <span> Art, Office</span></p>
                        </div>
                    </div>
                </div>
            ))}
            <div className={classes.des}>
                <button>Description</button>
                <button>Additional Information</button>
            </div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed mollis augue. Cras suscipit sit
                amet
                est in aliquam in vel blandit nunc.
            </p>
        </div>
    )
}

export default ProductDetails;