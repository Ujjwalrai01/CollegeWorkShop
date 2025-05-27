import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Trophy,
  Target,
  Globe,
  Shield,
  CheckCircle,
  Star
} from 'lucide-react';

const AmazingAuthForm = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Smart Job Matching",
      description: "AI-powered algorithm finds your perfect career opportunities"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Network",
      description: "Connect with top headhunters and companies worldwide"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Career Growth",
      description: "Advanced tools and insights to accelerate your success"
    }
  ];

  const stats = [
    { number: "8M+", label: "Job Seekers" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-white-900 to-blue-900 flex items-center justify-center p-4">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="flex flex-col lg:flex-row min-h-[700px]">
            
            {/* Left Side - Form */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="w-full h-full max-w-md mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {isSignUp ? 'Join the Future' : 'Welcome Back'}
                  </h1>
                  <p className="text-gray-300 text-lg">
                    {isSignUp 
                      ? 'Start your journey to career excellence' 
                      : 'Continue your path to success'
                    }
                  </p>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  {isSignUp && (
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                        required={isSignUp}
                      />
                    </div>
                  )}

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  {isSignUp && (
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Shield className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                        required={isSignUp}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  )}

                  {!isSignUp && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="sr-only" />
                        <div className="relative">
                          <div className="w-5 h-5 bg-white/10 border border-white/20 rounded"></div>
                          <CheckCircle className="w-5 h-5 text-purple-400 absolute inset-0 opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="ml-2 text-sm text-gray-300">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <button
                    type="button"
                    // onClick={handleSubmit}
                    onClick={() => navigate('/landingpage')}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                  >
                    {isSignUp ? 'Create Account' : 'Sign In'}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-transparent text-gray-400">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="w-5 h-5 bg-white rounded mr-2"></div>
                      <span className="text-white text-sm">Google</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="w-5 h-5 bg-blue-500 rounded mr-2"></div>
                      <span className="text-white text-sm">LinkedIn</span>
                    </button>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-gray-300">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                    <button
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="ml-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                    >
                      {isSignUp ? 'Sign In' : 'Sign Up'}
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Inspirational Content */}
            <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 lg:p-12 flex flex-col justify-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                {/* Main Message */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Transform Your
                    <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                      Career Journey
                    </span>
                  </h2>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Join millions of professionals who've accelerated their careers with our cutting-edge platform. 
                    Your dream job is just one connection away.
                  </p>
                </div>

                {/* Stats */}
                <div className="flex justify-center space-x-12 mb-12">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-purple-400 group-hover:bg-white/20 transition-colors">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Success Quote */}
                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white italic text-lg mb-2">
                        "This platform transformed my career. I landed my dream job within 2 weeks!"
                      </p>
                      <p className="text-gray-300 text-sm">— Sarah M., Software Engineer at Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AmazingAuthForm;