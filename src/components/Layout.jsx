import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="bg-green-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">FarmHub</h1>
          <div className="space-x-6 text-lg">
            <Link className="hover:text-green-300 transition" to="/">Home</Link>
            <Link className="hover:text-green-300 transition" to="/about">About</Link>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6 text-center mt-auto">
        © 2025 FarmHub. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
