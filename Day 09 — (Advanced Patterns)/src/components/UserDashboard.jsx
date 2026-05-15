// UserDashboard.jsx
import { useQuery } from '@tanstack/react-query';
import useTheme from './useTheme';
import Card from './Card';

function UserDashboard() {

  const { dark, toggle } = useTheme();
  

  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={`p-4 flex flex-col justify-center ${dark ? 'text-white bg-orange-900':'text-white bg-orange-400'}`}>
      <button onClick={toggle} className='p-4 rounded-md bg-green-400'>{dark ? 'Light' : 'Dark'}</button>
      
      <div>
        {users.map(user => (
          <Card key={user.id} user={user}>
            <Card.Title />
            <Card.Body />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard