import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase'; // Assuming you have already initialized Firebase
import { useNavigate } from 'react-router-dom';
import log from "../assets/ayurBg.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const adminEmail = "admin@gmail.com";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.email === adminEmail) {
        navigate('/admin');
      } else {
        setError('Access denied: You are not authorized to access the admin panel.');
        await auth.signOut();
      }
    } catch (error) {
      console.error('Login Error:', error.message);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${log})` }}
    >
      <div className="w-[500px] h-[400px] p-6 flex justify-center backdrop-blur border border-white rounded-2xl">
        <div className="p-10 rounded-lg w-full">
          <h2 className="text-4xl font-semibold text-center text-white mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-5 relative">
              <MdEmail className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-xl" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-[50px] rounded-full bg-transparent border border-white pl-12 pr-4 text-white placeholder-white"
              />
            </div>
            <div className="mb-5 relative">
              <RiLockPasswordLine className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-xl" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-[50px] rounded-full bg-transparent border border-white pl-12 pr-4 text-white placeholder-white"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-white text-black font-semibold rounded-full hover:bg-blue-100 transition duration-300"
            >
              Login
            </button>
            <div>
              <a
                href="/"
                className="block mt-4 text-center text-white font-semibold transition duration-300"
              >
                Back
              </a>
            </div>
          </form>
          {error && (
            <div className="text-red-500 text-center mt-4">{error}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
