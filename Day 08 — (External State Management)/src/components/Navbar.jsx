import { useSelector } from 'react-redux';

const Navbar = () => {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const name = useSelector((state) => state.user.name);
  
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1>My App</h1>
      <p>Status: {isLoggedIn ? `Logged in as ${name}` : 'Not logged in'}</p>
    </div>
  );
};

export default Navbar