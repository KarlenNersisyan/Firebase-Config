import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.hook";
import { updateProfile } from "../services/user.services";

export default function Home() {
  const { user, signout } = useAuth();
  const [description, setDescription] = useState("");

  const handleStatusUpd = () => {
    updateProfile(user.uid, {
      description,
    });
  };

  return (
    <div className='App2'>
      <h1>Home</h1>

      <h3>Hi, {user.displayName || user.email}</h3>

      {!user.emailVerified && <p>Please, verify your email.</p>}

      <div>
        <p>Profile:</p>
        <p>
          Description: <br />
          <textarea
            cols={22}
            rows={7}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <button onClick={handleStatusUpd}>Save Description</button>
      </div>
      <Link to="/">
        <button style={{ marginTop: "5px" }}  onClick={signout}>LOGOUT</button>
      </Link>
    </div>
  );
}
