import React from 'react'

const Home = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
        <p className="text-gray-600 text-lg mb-6">
          This is your home page. We're glad to have you here!
        </p>
        <div className="bg-blue-50 rounded-lg p-6">
          <p className="text-blue-800">✨ Get started by exploring our dashboard and features.</p>
        </div>
      </div>
    </div>
  )
}

export default Home