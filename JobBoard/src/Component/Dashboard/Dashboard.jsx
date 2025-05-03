import React from 'react'
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
    <header className="bg-blue-600 text-white p-6 text-2xl font-semibold">Dashboard</header>
    <main className="flex-grow p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Posted Jobs</h3>
          <p>Manage and view all your posted jobs here.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Applications</h3>
          <p>Track who applied to your jobs.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Profile</h3>
          <p>Edit your profile, change settings, and more.</p>
        </div>
      </div>
    </main>
  </div>
  )
}

export default Dashboard