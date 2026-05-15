import React from 'react'

const About = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg mb-4">
          We are a passionate team dedicated to creating amazing web experiences.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to help developers learn and grow through practical examples.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <span className="text-2xl">🎯</span>
            <h3 className="font-bold mt-2">Mission</h3>
            <p className="text-sm">To empower developers</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <span className="text-2xl">👁️</span>
            <h3 className="font-bold mt-2">Vision</h3>
            <p className="text-sm">To simplify learning</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <span className="text-2xl">💡</span>
            <h3 className="font-bold mt-2">Values</h3>
            <p className="text-sm">Innovation & Excellence</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About