"use client";

import { SignIn, SignUp } from '@clerk/nextjs';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SignIn
          path="/auth"
          routing="path"
          signUpUrl="/auth"
          redirectUrl="/"
          appearance={{
            baseTheme: undefined,
            variables: {
              colorPrimary: '#3b82f6',
            },
            elements: {
              formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
              card: 'bg-slate-800 border-slate-700',
              headerTitle: 'text-white',
              headerSubtitle: 'text-slate-300',
              formFieldLabel: 'text-white',
              formFieldInput: 'bg-slate-700 border-slate-600 text-white',
              footerActionLink: 'text-blue-400 hover:text-blue-300',
            },
          }}
        />
      </div>
    </div>
  );
}
