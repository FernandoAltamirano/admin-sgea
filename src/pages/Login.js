import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles/Login.css";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineKey,
  AiOutlineMail,
} from "react-icons/ai";
import logo from "../images/Logo_desc.png";
import ErrorMessage from "../components/ErrorMessage";
import { login } from "../utils/login";
import { useUser } from "../hooks/useUser";
import Button from "../components/Button";

function Login() {
  const [_, dispatch] = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: null });
  const [showPassword, setShowPassword] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const updateUser = (user) => {
    dispatch({ type: "UPDATE_USER", payload: user });
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setError({ ...error, status: false });
    setLoading(true);
    login(email, password)
      .then((data) => {
        setLoading(false);
        localStorage.setItem("token", data.token);
        updateUser(data.user);
        history.push("/dashboard/profile");
        setError({ ...error, status: false });
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
        setError({ status: true, message: err.message });
      });
  };
  return (
    <div className="login">
      <div className="login__image">
        <img
          src="https://wpuploads-lamp-s-1vcpu-1gb-nyc1-01.nyc3.cdn.digitaloceanspaces.com/adtk/2013/01/CONFERENCIA-MARTA-CALAD-3.jpg"
          alt="bg"
        />
      </div>
      <div className="login__right">
        <div className="login__logo">
          <Link to="/">
            {" "}
            <img src={logo} alt="" width="250" />
          </Link>
        </div>
        <div className="login__form">
          <form onSubmit={handleLogin}>
            <h1>Iniciar sesión</h1>
            {error.status && (
              <ErrorMessage setError={setError} message={error.message} />
            )}
            <div className="input ">
              <AiOutlineMail size="15" color="gray" />
              <input
                type="email"
                placeholder="Ingresa tu email"
                ref={emailRef}
              />
            </div>
            <div className="input password">
              <AiOutlineKey size="15" color="gray" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                ref={passwordRef}
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className="eye_icon"
                  cursor="pointer"
                  color="gray"
                  onClick={toggleShowPassword}
                />
              ) : (
                <AiOutlineEye
                  className="eye_icon"
                  cursor="pointer"
                  color="gray"
                  onClick={toggleShowPassword}
                />
              )}
            </div>
            <Button
              text="Iniciar sesión"
              loading={loading}
              classes="btn_session"
              functionToExecute={handleLogin}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
