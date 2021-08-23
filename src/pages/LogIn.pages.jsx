import { useState } from "react";
import { useAuth } from "../hooks/useAuth.hook";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, signin } = useAuth();

  const handleSignUp = () => {
    return signup(email, password)
      .then((res) => {
        console.log("success::", res);
      })
      .catch((e) => alert(e.message));
  };

  const handleSignIn = () => {
    return signin(email, password)
      .then((res) => {
        console.log("success::", res);
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignUp}>Sign Up with Email Link</button>
      </div>

      <div>
        <h1>LogIn</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignIn}>Log In with Email Link</button>
      </div>
    </div>
  );
}
