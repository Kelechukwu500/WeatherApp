// src/pages/SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !username || !password || !confirm) {
      return setError("Please fill in all fields");
    }

    if (password !== confirm) {
      return setError("Passwords do not match");
    }

    // Save to localStorage
    const newUser = {
      username,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    // Save user info in localStorage (as a demo substitute for a real DB)
    localStorage.setItem("user", JSON.stringify(newUser));

    setSuccess("Sign up successful!");
    setTimeout(() => {
      navigate("/ForecastFeatures");
    }, 1000);
  };

  return (
    <div className="w-screen w-full max-w-full min-h-screen md:px-8 flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center text-purple-700 dark:text-white mb-4">
          Sign Up
        </h2>

        {error && <div className="text-red-600 text-sm mb-3">{error}</div>}
        {success && (
          <div className="text-green-600 text-sm mb-3">{success}</div>
        )}

        <form onSubmit={handleEmailSignUp} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            autoComplete="username"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            autoComplete="new-password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
            autoComplete="new-password"
          />
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
