import classes from './cart.module.css';

const Cart = () => {
    return (
        <div className={`${classes.cart} ${classes.w_100}`}>
            <div className={classes.items}>
                <h2>Cart Items</h2>

                <table>
                    <tbody>
                    {/*@if($products->isEmpty())*/}
                    <tr>
                        <td className='successMessage'>Your cart is empty</td>
                    </tr>
                    {/*@else*/}
                    {/*@php*/}
                    {/*$totalPrice = 0;*/}
                    {/*$subTotalPrice = 0;*/}
                    {/*@endphp*/}
                    {/*@foreach($products as $product)*/}
                    {/*@php*/}
                    {/*$totalPrice += $product->price * $product->quantity;*/}
                    {/*$subTotalPrice += ($product->price - $product->price * $product->discount / 100) * $product->quantity*/}
                    {/*@endphp*/}
                    {/*<tr>*/}
                    {/*    <td>{{$product->title}}</td>*/}
                    {/*    <td>$<span>{{$product->price}}</span></td>*/}
                    {/*    <td>{{$product->quantity}}</td>*/}
                    {/*    <td  class='removeItem'>*/}
                    {/*        <form action="{{ route('remove.product') }}" method="post">*/}
                    {/*            @csrf*/}
                    {/*            <input type="hidden" name="product_id" value="{{ $product->product_id }}">*/}
                    {/*                <button type="submit" class="btn btn-danger"><i class='fa-solid fa-x'></i></button>*/}
                    {/*        </form>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {/*@endforeach*/}
                    {/*@endif*/}
                    </tbody>
                </table>
            </div>
            <div className={classes.totals}>
                <h2>Cart Totals</h2>
                <div>
                    <p>Total <span>$0</span></p>
                    <p>Subtotal <span>$0</span></p>
                </div>
                <form action="" method="post">
                    <input type="hidden" name="total_price" value=""/>
                    <button type="submit">Place Order</button>
                </form>
            </div>
        </div>
    )
}

export default Cart;