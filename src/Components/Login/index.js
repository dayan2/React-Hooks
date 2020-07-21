import React, {useState} from "react"
import history from '../../routes/history'

import image from'../../../assets/images/undraw_grades_j6jn.png'
import avatar from'../../../assets/images/undraw_profile_pic_ic5t.svg';

import "./login.scss"

const Login = () => {
    const [toggleUserName, setToggleUserName] = useState(false)
    const [togglePassword, setTogglePassword] = useState(false)

    const onBlurUserName = () => setToggleUserName(false)
    const onFocusUserName = () => setToggleUserName(true)

    const onBlurPassword = () => setTogglePassword(false)
    const onFocusPassword = () => setTogglePassword(true)

    const handleClick = () => history.push("/dashboard")

    return (
        <section className="login-form-wrapper">
            <div className="container">
                <div className="img">
                    <img src={image} alt="image"/>
                </div>
                <div className="login-container">
                    <form action="#">
                        <img  src={avatar} alt="avatar" className="avatar"/>

                        <h2>Welcome</h2>
                        <div className={toggleUserName ? 'input-div one focus' : 'input-div one'}>
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Username</h5>
                                <input type="text" className="input" onBlur={onBlurUserName} onFocus={onFocusUserName} />
                            </div>
                        </div>

                        <div className={togglePassword ? 'input-div two focus' : 'input-div two'}>
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input type="password" className="input" onBlur={onBlurPassword} onFocus={onFocusPassword} />
                            </div>
                        </div>

                        <a href="#">Forget Password?</a>
                        {/*<input type="submit" className="btn" value="Login"  />*/}
                        <button onClick={handleClick} type="button" className="btn">Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login
