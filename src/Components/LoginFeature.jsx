import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation example
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    // Handle login logic here (API call, etc.)
    alert("Logged in!");
  };

  return (
    <div className="w-screen flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-purple-700 dark:text-white">
          Login
        </h2>
        {error && (
          <div className="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded dark:bg-red-200">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-purple-700 rounded hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
