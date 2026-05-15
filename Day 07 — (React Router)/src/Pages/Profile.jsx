import React from 'react'

const Profile = () => {
  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
            <span className="text-white text-3xl">👤</span>
          </div>
          <h2 className="text-2xl font-bold mt-4">Abeer Dvlpr</h2>
          <p className="text-gray-600">abeerdvlpre@example.com</p>
        </div>
        
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold mb-2">About Me</h3>
          <p className="text-gray-600">Full-stack developer passionate about React and modern web technologies.</p>
        </div>
        
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Member Since</h3>
          <p className="text-gray-600">January 2024</p>
        </div>
        
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default Profile