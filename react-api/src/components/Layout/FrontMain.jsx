import Footer from "./Footer/Footer.jsx";
import classes from "./style.module.css";
import SideBar from "./SideBar/SideBar.jsx";
import { Outlet, useLocation } from 'react-router-dom';

const FrontMain = (props) => {
    return (
        <>
              <div className={`${classes.dFlex}  ${classes.w_100}`}>

                <SideBar/>
                <div>
                    <div className={classes.container}>
                        {/*{props.children}*/}
                        <Outlet />
                        <Footer/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FrontMain;