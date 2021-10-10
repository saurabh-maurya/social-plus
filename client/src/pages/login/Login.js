import "./login.css";
import { useContext, useRef } from "react"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
    const email = useRef("")
    const password = useRef("")
    const { user, isFetching, dispatch } = useContext(AuthContext);

    const handleOnClick = (e) => {
        e.preventDefault()
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
        console.log(user)
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Plus</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on <b>Social Plus</b>.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleOnClick}>
                        <input placeholder="Email" type="email" className="loginInput" required ref={email} />
                        <input placeholder="Password" type="password" className="loginInput" minLength="6" required ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching} >{ isFetching ? <CircularProgress size="20px" style = {{'color':'white'}} />: "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link 
                            to={"/register"}
                            style={{ textDecoration: "none" }}
                        >
                            <button className="loginRegisterButton">
                            Create a new Account
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
