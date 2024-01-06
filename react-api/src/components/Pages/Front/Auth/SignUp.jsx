import classes from './styles.module.css'


const SignUp = ()=> {
    return (
        <div className={`${classes.login} ${classes.register}`}>
            <div className={classes.welcome}>
                <h2>Register an Account</h2>
                <p>Welcome to the Notation</p>
                <p>Already have an account? <a href=" ">Sign in</a></p>
            </div>

            <div className={classes.inputs}>
                <form action="" method="post">
                    <label htmlFor="email">Email Address
                        <input type="text" name="email" id="email" value=""/>
                            {/*@error('email')*/}
                            {/*<span className="errMessage">{{$message}}</span>*/}
                            {/*@enderror*/}
                    </label>

                    <label htmlFor="password">Password
                        <input type="password" name="password" id="password"/>
                            {/*@error('password')*/}
                            {/*<span className="errMessage">{{$message}}</span>*/}
                            {/*@enderror*/}
                    </label>

                    <label htmlFor="password_confirmation">Password Confirmation
                        <input type="password" name="password_confirmation" id="password_confirmation" />
                            {/*@error('password_confirmation')*/}
                            {/*<span className="errMessage">{{$message}}</span>*/}
                            {/*@enderror*/}
                    </label>

                    <button type="submit">Sign up</button>
                </form>
                <p>By creating an account, you agree to the <span> Terms of Use</span> and <span>Privacy Policy</span>.
                </p>



            </div>



        </div>
    )
}


export default SignUp;