import classes from './style.module.css';
import {Outlet, Link, useLocation} from "react-router-dom";


const Account = () => {
    const location = useLocation();

    const navLinks = [
        {to: '/account', label: 'Dashboard'},
        {to: '/account/orders', label: 'Orders'},
        {to: '/account/details', label: 'Details'},
        {to: '/account/logout', label: 'Logout'}
    ];
    // console.log(location.pathname);

    return (
        <div className={classes.accountDashboard}>
            <h2>Account</h2>
            <ul>
                {navLinks.map((link) => (

                    <Link
                        to={link.to}
                        className={location.pathname === link.to ? `${classes.bg}` : ''}
                        key={link.to}
                    >
                        <li>
                            {link.label}
                        </li>
                    </Link>

                ))}
            </ul>
            <Outlet/>
        </div>
    )
}

export default Account;