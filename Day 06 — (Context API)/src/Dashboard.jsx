import React from 'react'
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
const Dashboard = () => {
    const { user } = useContext(UserContext);
    return (
        <div className='text-xl mt-6'>{user.isLoggedIn ? "Dashboard Access Granted" : "Access Denied"}</div>
    )
}
export default Dashboard
