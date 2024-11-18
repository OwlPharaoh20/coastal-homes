// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginForm = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, googleSignIn, facebookSignIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(emailOrUsername, password);
      navigate("/listings");
    } catch (error) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/listings");
    } catch (error) {
      setError("Failed to log in with Google. Please try again.");
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn();
      navigate("/listings");
    } catch (error) {
      setError("Failed to log in with Facebook. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Email or Username"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <a href="/forgot-password" className="text-blue-500 hover:underline">
          Forgot Password?
        </a>
      </div>
      <div className="mt-6 text-center">
        <p className="mb-2">Or login with:</p>
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center bg-red-500 text-white p-2 rounded hover:bg-red-600 mb-2"
        >
          <FaGoogle className="mr-2" /> Login with Google
        </button>
        <button
          onClick={handleFacebookSignIn}
          className="w-full flex items-center justify-center bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
        >
          <FaFacebook className="mr-2" /> Login with Facebook
        </button>
      </div>
      <div className="mt-6 text-center">
        <p className="mb-2">Don't have an account?</p>
        <a href="/register" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 inline-block">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
