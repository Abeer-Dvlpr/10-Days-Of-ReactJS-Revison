import { useContext } from "react";
import { UserContext } from "./context/UserContext.jsx";

function Profile() {
  const { user, theme } = useContext(UserContext);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Profile</h2>
      <p>Name: {user.name}</p>
      <p>Status: {user.isLoggedIn ? "Logged In" : "Logged Out"}</p>
      <p>Theme: {theme}</p>
    </div>
  );
}

export default Profile;
