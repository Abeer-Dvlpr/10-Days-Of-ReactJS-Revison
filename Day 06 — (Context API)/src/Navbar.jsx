import { useContext } from "react";
import { UserContext } from "./context/UserContext.jsx";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="font-bold">My App</h1>
      <p>{user.isLoggedIn ? `Welcome, ${user.name}` : "Guest"}</p>
    </nav>
  );
}

export default Navbar;
