import { useSelector } from 'react-redux';

const Profile = () => {
  const { name, age, isLoggedIn } = useSelector((state) => state.user);
  
  if (!isLoggedIn) {
    return <div className="p-4">Please login to see profile</div>;
  }
  
  return (
    <div className="p-4 border rounded m-4">
      <h2>Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};
export default Profile