


const AccountOrders = ()=>{
    return(
        <table>
            <thead>
            <tr className="th">
                <th>Order Num</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {/*@foreach($orders as $order)*/}
            {/*<tr>*/}
            {/*    <td>{{$order->id}}</td>*/}
            {/*    <td>{{$order->created_at}}</td>*/}
            {/*    <td>{{$order->status}}</td>*/}
            {/*    <td>$<span>{{$order->discount_price}}</span></td>*/}
            {/*    <td>View</td>*/}
            {/*</tr>*/}
            {/*@endforeach*/}

            </tbody>
        </table>
    )
}

export default AccountOrders;