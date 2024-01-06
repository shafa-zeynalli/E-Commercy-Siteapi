import {Link} from "react-router-dom";


const AccountDashboard =()=>{
    return(
        <>
            <p>Hello Vitatheme (not Vitatheme? <span> <Link to='/account/logout'>Log out</Link></span>)</p>
            <p>From your account dashboard you can view your <span> <Link to='/account/orders'>recent orders </Link> </span>and edit your <span>
            <Link to='/account/details'>password and account details</Link></span>.</p>
        </>

    )
}

export default AccountDashboard;