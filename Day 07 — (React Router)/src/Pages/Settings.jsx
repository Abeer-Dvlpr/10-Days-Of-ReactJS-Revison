import React, { useState } from 'react'

const Settings = () => {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
          <div>
            <h3 className="font-semibold">Email Notifications</h3>
            <p className="text-sm text-gray-600">Receive updates via email</p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`px-4 py-2 rounded-md ${
              notifications ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {notifications ? 'ON' : 'OFF'}
          </button>
        </div>


        <div className="p-4 bg-white rounded-lg border">
          <h3 className="font-semibold mb-2">Language</h3>
          <select className="w-full px-3 py-2 border rounded-md">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Settings