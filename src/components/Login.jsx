import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Email:', email, 'Password:', password);
  };

  return (

        <div className="login-container flex justify-center items-center min-h-screen bg-gray-100">
          <div className="blue-box w-full max-w-lg p-6 bg-blue-300 rounded-lg shadow-lg">
            <div className="login-box bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="textbox mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="textbox mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button type="submit" className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    };
    
    export default Login;
    



