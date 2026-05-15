import { useContext } from "react";
import { UserContext } from "./context/UserContext.jsx";

function Controls() {
  const { user, setUser, theme, setTheme } = useContext(UserContext);

  const toggleLogin = () => {
    setUser({ ...user, isLoggedIn: !user.isLoggedIn });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="p-6 space-x-4">
      <button
        className="px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        onClick={toggleLogin}
      >
        {user.isLoggedIn ? "Logout" : "Login"}
      </button>

      <button
        className="px-5 py-2.5 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        onClick={toggleTheme}
      >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
}

export default Controls;
