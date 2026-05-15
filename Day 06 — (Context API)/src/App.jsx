import Navbar from "./Navbar.jsx";
import Dashboard from "./Dashboard.jsx";
import Controls from "./Controls.jsx";
import { useContext } from "react";
import { UserContext } from "./context/UserContext.jsx";
import Profile from "./Profile.jsx";

function App() {
  const { theme } = useContext(UserContext);

  return (
    <div className={theme === "light" ? "bg-gray-100 min-h-screen text-center " : "bg-gray-900 min-h-screen text-white text-center" }>
      <Navbar />
      <Dashboard/>
      <Controls />
      <Profile />
    </div>
  );
}

export default App;
