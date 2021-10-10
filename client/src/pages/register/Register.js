import "./register.css"
import { useRef } from "react"
import axios from "axios"
import { useHistory } from "react-router"
import { Link } from "react-router-dom";

const Register = () => {
    const email = useRef("")
    const username = useRef("")
    const password = useRef("")
    const passwordAgain = useRef("")
    const history = useHistory()

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value !== password.current.value) {
            console.log(password.current.value, passwordAgain.current.value)
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/api/auth/register", user);
                history.push('/login')
            } catch (err) {
                console.log(err);
            }
        }
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
                <div className="loginRight" onSubmit={handleOnSubmit}>
                    <form className="loginBox">
                        <input placeholder="Username" className="loginInput" required ref={username} />
                        <input placeholder="Email" type="email" className="loginInput" required ref={email} />
                        <input placeholder="Password" type="password" className="loginInput" minLength="6" required ref={password} />
                        <input placeholder="Password Again" type="password" className="loginInput" required ref={passwordAgain} />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <Link 
                            to={"/login"}
                            style={{ textDecoration: "none" }}
                        >
                            <button className="loginRegisterButton">
                            Log In
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
