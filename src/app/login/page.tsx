"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_HOVER,
  PAGE_BG,
  PRIMARY_COLOR_TEXT,
} from "@/constants/theme";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        {/* KC Logo */}
        <div className="mb-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-2">
            <span className="text-white text-3xl font-bold">kc</span>
          </div>
          {/* <span className="text-xl font-semibold text-gray-700">Admin Panel</span> */}
        </div>
        {/* Login Form */}
        <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 text-black"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full ${PRIMARY_COLOR} text-white py-2 rounded-lg font-semibold ${PRIMARY_COLOR_HOVER} transition`}
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" className={`${PRIMARY_COLOR_TEXT} hover:underline font-semibold`}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
} 