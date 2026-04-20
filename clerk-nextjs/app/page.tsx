"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useUser, useClerk } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/auth");
  };

  // Show loading state
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Not logged in - redirect prompt
  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Workout Master</h1>
          <p className="text-xl mb-8 text-slate-300">
            Please sign in to continue
          </p>
          <button
            onClick={() => router.push("/auth")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  // Logged in - show dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navigation Bar */}
      <nav className="bg-slate-950 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Workout Master</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Welcome, {user?.primaryEmailAddress?.emailAddress || user?.emailAddresses?.[0]?.emailAddress || 'User'}! 🎉
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stats Card 1 */}
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Total Workouts
              </h3>
              <p className="text-4xl font-bold text-blue-400">0</p>
            </div>

            {/* Stats Card 2 */}
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                This Week
              </h3>
              <p className="text-4xl font-bold text-green-400">0</p>
            </div>

            {/* Stats Card 3 */}
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Current Streak
              </h3>
              <p className="text-4xl font-bold text-purple-400">0</p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Features</h3>
            <div className="space-y-4">
              <div className="bg-slate-700 rounded-lg p-4 flex items-center gap-4">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-xl">💪</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Workout Generator</h4>
                  <p className="text-slate-300 text-sm">
                    Get personalized workout recommendations
                  </p>
                </div>
              </div>

              <div className="bg-slate-700 rounded-lg p-4 flex items-center gap-4">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-xl">📊</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Track Progress</h4>
                  <p className="text-slate-300 text-sm">
                    Monitor your fitness journey with detailed stats
                  </p>
                </div>
              </div>

              <div className="bg-slate-700 rounded-lg p-4 flex items-center gap-4">
                <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Set Goals</h4>
                  <p className="text-slate-300 text-sm">
                    Define and achieve your fitness goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
