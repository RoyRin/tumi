'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TumiHeader } from '@/components/tumi-header'
import { TumiFooter } from '@/components/tumi-footer'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen bg-white">
      <TumiHeader />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">Account</span>
        </nav>

        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-light tracking-wider text-center mb-8">
            {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm tracking-wider mb-2">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm tracking-wider mb-2">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm tracking-wider mb-2">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm tracking-wider mb-2">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-12 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm tracking-wider mb-2">
                  CONFIRM PASSWORD
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="••••••••"
                    required
                  />
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm underline hover:no-underline">
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-4 text-sm tracking-wider hover:bg-gray-800 transition-colors"
            >
              {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 underline hover:no-underline text-black"
                >
                  {isLogin ? 'Create one' : 'Sign in'}
                </button>
              </p>
            </div>
          </form>

          {/* Benefits */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h2 className="text-lg font-light tracking-wider mb-6 text-center">
              TUMI ACCOUNT BENEFITS
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-start">
                <span className="mr-3">•</span>
                <span>Track your orders and view order history</span>
              </div>
              <div className="flex items-start">
                <span className="mr-3">•</span>
                <span>Save your shipping addresses for faster checkout</span>
              </div>
              <div className="flex items-start">
                <span className="mr-3">•</span>
                <span>Access exclusive member offers and early sale access</span>
              </div>
              <div className="flex items-start">
                <span className="mr-3">•</span>
                <span>Register your TUMI products for warranty protection</span>
              </div>
              <div className="flex items-start">
                <span className="mr-3">•</span>
                <span>Create and manage your wishlist</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TumiFooter />
    </div>
  )
}