import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth.hook";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();

  const handleSignUp = () => {
    return signup(email, password)
      .then((res) => {
        alert("You have successfully registered.");
        console.log("success::", res);
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div
      style={{
        width: "28%",
        marginLeft: "36%",
        height: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h1>Sign Up</h1>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link style={{ width: "20%", marginLeft: "40%" }} to="/signup">
        <button onClick={handleSignUp}>SIGNUP</button>
      </Link>
      <span>
        To sign in: <Link to="/">LogIn</Link>
      </span>
    </div>
  );
}
