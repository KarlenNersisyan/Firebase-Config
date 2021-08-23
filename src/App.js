import { lazy, Suspense } from "react";
import "./App.css";

const AuthenticatedApp = lazy(() => import("./components/AuthenticatedApp"));
const UnAuthenticatedApp = lazy(() =>
  import("./components/UnAuthenticatedApp")
);

function App() {
  const user = false;

  return (
    <div className="App">
      <h1> Firebase-Config </h1>
      <Suspense fallback={<div>Loading...</div>}>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </Suspense>
    </div>
  );
}

export default App;
