import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {fetchProducts} from "../../../../store/ProductsSlice.jsx";
import { Link } from 'react-router-dom';
import classes from './blog.module.css';


const Blog = () => {
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



return (
    <div>
        <div className={classes.containerShop}>
            <div className={classes.header}>
                <h2>Shop</h2>
                <select name="selectShop" id="selectShop">
                    <option value="Sort By">Sort By</option>
                    <option value="select1">select1</option>
                    <option value="select2">select2</option>
                    <option value="select3">select3</option>
                    <option value="select4">select4</option>
                    <option value="select5">select5</option>
                </select>
            </div>

            <div className={classes.products}>
                {products.data.map((product) => (
                    <Link to={`/product/${product.id}`} className={classes.card} key={product.id}>
                        <img src={product.img} alt={product.title}/>
                            <p>{product.title}</p>
                            <p> $<span className={classes.line}>{product.price}</span>
                                <span>{product.discount}% endirim olub</span>
                                {/*$<span>{product.price} - {product}->discount * $product->price / 100 }}</span>*/}
                            </p>
                    </Link>
                    ))}
            </div>
            {/*<div className={classes.pagination-container}>*/}
                {/*{{ $products->appends(request()->all())->links('pagination::bootstrap-4') }}*/}
            {/*</div>*/}
        </div>
    </div>

)}

export default Blog;