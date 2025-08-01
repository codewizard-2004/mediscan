"use client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center text-white font-sans">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/30 via-transparent to-cyan-900/30"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000 pointer-events-none"></div>
      <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500 pointer-events-none"></div>
      
      {/* Glassmorphism card */}
      <div className="relative z-50 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-10 w-full max-w-md flex flex-col items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none"></div>
        
        <div className="relative z-10 w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 text-transparent bg-clip-text animate-pulse">
            Sign Up
          </h1>
          
          <div className="w-full flex flex-col gap-5">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-4 rounded-xl bg-white/5 backdrop-blur-sm text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/10" 
              />
            </div>
            
            <div className="relative">
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full px-4 py-4 rounded-xl bg-white/5 backdrop-blur-sm text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/10" 
              />
            </div>
            
            <button onClick={() => router.push('/info')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-purple-500/25"
            >
              Create Account
            </button>
          </div>
          
          <div className="flex items-center my-6 w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <span className="px-4 text-gray-300 text-sm">OR</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
          
          <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
          
          <p className="text-gray-300 mt-8 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text hover:from-purple-200 hover:to-pink-200 font-semibold transition-all duration-300">
              Log in
            </a>
          </p>
        </div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-repeat pointer-events-none" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 l -60 0 l 0 -60 l 60 0' stroke='%23ffffff' stroke-width='0.5' fill='none' opacity='0.1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`
             }}>
        </div>
      </div>
    </main>
  );
}