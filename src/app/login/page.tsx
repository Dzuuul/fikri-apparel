"use client";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSocialLogin = (provider: string) => {
    // Placeholder for social login logic
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Column - Login Form */}
      <div className="w-1/3 flex items-center justify-center bg-white px-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5"
        >
          <div>
            <h2 className="text-3xl font-outfit font-bold text-gray-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-sm">
              Enter your credentials to access your account
            </p>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-outfit text-green-800 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 text-base border border-green-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900 font-medium tracking-wider placeholder-green-700/60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-outfit text-green-800 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-3 text-base border border-green-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 text-green-900 font-medium tracking-wider placeholder-green-700/60"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-green-600 transition duration-300"
              >
                {showPassword ? (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 text-base rounded-lg hover:bg-green-700 transform hover:scale-105 transition duration-300"
          >
            Login
          </button>
          
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={() => handleSocialLogin('google')}
              className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition duration-300 group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                className="text-gray-600 group-hover:text-green-600 transition duration-300"
                fill="currentColor"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-1 7.28-2.69l-3.57-2.77c-.99.69-2.26 1.1-3.71 1.1-2.87 0-5.3-1.94-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.11c-.22-.69-.35-1.43-.35-2.11s.13-1.42.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l2.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.86-2.59 3.29-4.51 6.16-4.51z" fill="#EA4335"/>
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin('facebook')}
              className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition duration-300 group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                className="text-gray-600 group-hover:text-green-600 transition duration-300"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </button>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account? <a href="/register" className="text-green-600 hover:underline">Register</a>
            </p>
          </div>
        </form>
      </div>

      {/* Right Column - Image */}
      <div className="w-2/3 relative">
        <Image 
          src="https://picsum.photos/id/237/1200/800"
          alt="Login Background"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0"
        />
      </div>
    </div>
  );
}
