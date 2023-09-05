import { useState } from "react";
import validate from "./validate";
import "../index.scss";
import image from "../images/name.png";

const Login = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className="login_container">
      <div className="login_name_position">
        <img className="login_name" src={image} />
      </div>

      <div class="login-box">
        <p>Login</p>

        <form onSubmit={handleSubmit}>
          <div class="user-box">
            <input
              autoComplete="off"
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="email"
            />
            {/* <label htmlFor="email">email</label> */}
          </div>
          {errors.email && (
            <p style={{ fontSize: "10px", color: "white" }}>{errors.email}</p>
          )}
          <br />

          <div class="user-box">
            <input
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="password"
            />
            {/* <label htmlFor="password"></label> */}
          </div>

          {errors.password && (
            <p style={{ fontSize: "10px", color: "white" }}>
              {errors.password}
            </p>
          )}

          <a onClick={handleSubmit} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
