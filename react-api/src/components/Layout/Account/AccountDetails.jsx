

const AccountDetails = ()=>{
    return(
        <form action="" method="post">
            <h3>Details</h3>

            <label htmlFor="">Email*
                <input type="text" name="email"  value=""/>
                    {/*@error('email')*/}
                    {/*<span className="errMessage">{{ $message }}</span>*/}
                    {/*@enderror*/}
            </label>

            <h3>Password Change</h3>

            <label htmlFor="">Current Password*
                <input type="text" name="current_password" value=""/>
                    {/*@error('current_password')*/}
                    {/*<span className="errMessage">{{ $message }}</span>*/}
                    {/*@enderror*/}
            </label>

            <label htmlFor="">New Password*
                <input type="text" name="password" value=""/>
                    {/*@error('password')*/}
                    {/*<span className="errMessage">{{ $message }}</span>*/}
                    {/*@enderror*/}
            </label>

            <label htmlFor="">Confirm New Password*
                <input type="text" name="password_confirmation" value=""/>
                    {/*@error('password_confirmation')*/}
                    {/*<span className="errMessage">{{ $message }}</span>*/}
                    {/*@enderror*/}
            </label>

            <button type="submit">Save Changes</button>
        </form>
    )
}

export default AccountDetails;