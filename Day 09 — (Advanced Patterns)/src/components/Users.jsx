import React from 'react'
import {useQuery} from "@tanstack/react-query"

const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    return res.json();
}
const Users = () => {
    const {data: users, isLoading, error} = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        📋 User List
      </h1>
      
      <div className="grid gap-4 md:grid-cols-2">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {user.id}
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h2>
            </div>
            <div className="ml-12 space-y-1">
              <p className="text-gray-600">
                <span className="font-medium">📧 Email:</span> {user.email}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">🏠 City:</span> {user.address.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users