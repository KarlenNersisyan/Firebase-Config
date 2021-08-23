import { lazy, Suspense } from "react";
import { useAuth } from "./hooks/useAuth.hook";

const AuthenticatedApp = lazy(() => import("./components/AuthenticatedApp"));
const UnAuthenticatedApp = lazy(() =>
  import("./components/UnAuthenticatedApp")
);

function App() {
  const { user } = useAuth();

  console.log("USER::", user);

  if (user === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </Suspense>
    </div>
  );
}

export default App;
