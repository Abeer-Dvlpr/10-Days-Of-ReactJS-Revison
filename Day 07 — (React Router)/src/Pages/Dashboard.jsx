import { Outlet, Link } from "react-router-dom"

function Dashboard() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">Manage your account and preferences</p>

        <div className="flex gap-4 mb-6">
          <Link 
            to="profile" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            👤 Profile
          </Link>
          <Link 
            to="settings" 
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            ⚙️ Settings
          </Link>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard