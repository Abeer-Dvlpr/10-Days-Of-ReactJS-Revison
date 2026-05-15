import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto flex items-center justify-center">
            <span className="text-white text-3xl">👥</span>
          </div>
          <h2 className="text-2xl font-bold mt-4">User Profile</h2>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">User ID:</span> {id}
          </p>
        </div>
        
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold mb-2">User Information</h3>
          <div className="space-y-2">
            <p><span className="font-medium">Name:</span> User {id}</p>
            <p><span className="font-medium">Email:</span> user{id}@example.com</p>
            <p><span className="font-medium">Status:</span> <span className="text-green-600">Active</span></p>
          </div>
        </div>
        
        <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
          Send Message
        </button>
      </div>
    </div>
  )
}

export default User