import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Page.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔁 where user came from (default = home)
  const from = location.state?.from || "/";

  function handleLogin(e) {
    e.preventDefault();

    // 🟢 get name from email
    const rawName = email.split("@")[0];
    const name =
      rawName.charAt(0).toUpperCase() + rawName.slice(1);

    // ✅ save user as OBJECT
    setUser({ name, email });
    localStorage.setItem(
  "user",
  JSON.stringify({ name, email })
);


    // popup
    alert(`Hi ${name} 👋 Logged in successfully!`);

    // 🔥 redirect back
    navigate(from, { replace: true });
  }

  return (
    <div className="page">
      <h1>Login</h1>

      <form className="login-card" onSubmit={handleLogin}>
        {/* Email */}
        <div className="login-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password with 👁 */}
        <div className="login-field password-field">
          <label>Password</label>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
        </div>

        <button className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
