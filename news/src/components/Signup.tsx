import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

import "../App.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim().length < 3) return setMessage("Name must be at least 3 characters");
    if (!email.includes("@")) return setMessage("Please enter a valid email");
    if (password.length < 6) return setMessage("Password must be at least 6 characters");

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) return setMessage(data.message || "Signup failed");

      setMessage("Signup successful — you can login now.");
      setName("");
      setEmail("");
      setPassword("");
    } catch {
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Create account ✨</h2>

        {message && <p className="alert">{message}</p>}

        <div className="input-wrapper">
          <UserOutlined className="icon" />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-wrapper">
          <MailOutlined className="icon" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-wrapper">
          <LockOutlined className="icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <span className="toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </span>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Signing up…" : "Signup"}
        </button>

        <p className="small">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}
