"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_TEXT,
  PRIMARY_COLOR_HOVER,
  TEXT_COLOR,
  INPUT_TEXT_COLOR,
  CARD_BG,
  CARD_SHADOW,
  CARD_RADIUS,
  PAGE_BG,
} from "@/constants/theme";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${PAGE_BG}`}> 
      <div className={`w-full max-w-md ${CARD_BG} ${CARD_RADIUS} ${CARD_SHADOW} p-8 flex flex-col items-center`}>
        {/* KC Logo */}
        <div className="mb-6 flex flex-col items-center">
          <div className={`w-16 h-16 rounded-full ${PRIMARY_COLOR} flex items-center justify-center mb-2`}>
            <span className="text-white text-3xl font-bold">kc</span>
          </div>
          <span className={`text-xl font-semibold ${TEXT_COLOR}`}>Sign Up</span>
        </div>
        {/* Signup Form */}
        <form className="w-full flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${INPUT_TEXT_COLOR}`}
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
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 ${INPUT_TEXT_COLOR}`}
                placeholder="Enter your password"
                autoComplete="new-password"
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
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 ${INPUT_TEXT_COLOR}`}
                placeholder="Confirm your password"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 focus:outline-none"
                tabIndex={-1}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full ${PRIMARY_COLOR} text-white py-2 rounded-lg font-semibold ${PRIMARY_COLOR_HOVER} transition`}
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className={`${PRIMARY_COLOR_TEXT} hover:underline font-semibold`}>Login</Link>
        </div>
      </div>
    </div>
  );
} 