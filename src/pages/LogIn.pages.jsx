import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.hook";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useAuth();

  const handleSignIn = () => {
    return signin(email, password)
      .then((res) => {
        console.log("success::", res);
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div
      style={{
        width: "50%",
        marginLeft: "25%",
        height: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h1> Welcome our website </h1>
      <h3> Login </h3>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        style={{ width: "20%", marginLeft: "40%" }}
        onClick={handleSignIn}
      >
        LOGIN
      </button>
      <span>
        To register: <Link to="/signup">SignUp</Link>
      </span>
    </div>
  );
}
