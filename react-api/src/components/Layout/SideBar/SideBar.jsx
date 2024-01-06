import styles from './sidebar.module.css'
import {Link, useLocation} from "react-router-dom";

const SideBar= () => {
    const location = useLocation();

    const navLinks = [
        { to: '/', label: 'Blog' },
        { to: '/cart', label: 'Cart' },
        { to: '/login', label: 'Login' },
        { to: '/account', label: 'Account' },
        { to: '/signup', label: 'SignUp' },
        { to: '/checkout', label: 'Checkout' },
        { to: '/thankyou', label: 'Thankyou' }
    ];

    return (
        <div className={styles.sideBar}>
            <div className= {styles.logos}>
                <div><p>N</p></div>
                <span>WP-Notes</span>
            </div>
            <div className={styles.inputSB}>
                <form action="" method="get">
                    <input type="text" placeholder="Search" name="p_title"/>
                    <button type="submit"> Search</button>
                </form>

                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <ul className={styles.ulSB}>

                {navLinks.map((link) => {
                    const isLinkActive =
                        location.pathname === link.to ||
                        (link.to.startsWith('/account') && location.pathname.startsWith(link.to)) ||
                        (link.to === '/' && location.pathname.startsWith('/product'))
                    ;

                    // console.log(`Condition Result for ${link.to}:`, link.to.startsWith('/product'));

                    return (
                    <li key={link.to}>
                        <Link
                            to={link.to}
                            className={isLinkActive ? `${styles.active}` : ''}
                        >
                            {link.label}
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default SideBar;