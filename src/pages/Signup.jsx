import React from "react";
// import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
        <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create Account
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default Signup;
