import classes from './styles.module.css'


const SignIn = ()=>{
    return (
        <div className={classes.login}>
            <div className={classes.welcome}>
                {/*// @if(session('success'))*/}
                {/*// <span className="successMessage">*/}
                {/*//     /!*{{ session('success') }}*!/*/}
                {/*// </span>*/}

                <h2>Welcome back</h2>
                <p>Enter your email and password to sign in to the website.</p>
                <p>Not signed up yet? <a href=''>Sign up</a></p>
            </div>

            <div className={classes.inputs} >


                <form action="" method="post">
                    <label htmlFor="email" >Email Address
                        <input type="text" name="email" value=""/>
                            {/*@error('email')*/}
                            {/*<span className="errMessage">{}</span>*/}
                            {/*@enderror*/}
                    </label>

                    <label htmlFor="password">Password
                        <input type="text" name="password" value=""/>
                            {/*@error('password')*/}
                            {/*<span className="errMessage">{}</span>*/}
                            {/*@enderror*/}
                    </label>

                    <label className={classes.checkbox}>
                        <input type="checkbox"/>
                            <p> Keep me logged in </p>
                    </label>

                    <button type="submit">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;