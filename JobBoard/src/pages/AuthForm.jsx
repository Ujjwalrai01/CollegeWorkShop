
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SignUpImage from '../assets/Images/signUp.png';
// import {
//   Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles, Shield, CheckCircle
// } from 'lucide-react';

// const AmazingAuthForm = () => {
//   const navigate = useNavigate();
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/landingpage');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1f52] via-[#312e81] to-[#4c1d95] px-4">
//       <div className="relative w-full max-w-6xl bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden flex flex-col lg:flex-row">
        
//         {/* Form Section */}
//         <div className="w-full h-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10">
//           <div className="mb-10 text-center">
//             <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
//               <Sparkles className="text-white h-6 w-6" />
//             </div>
//             <h2 className="text-white text-3xl font-bold">
//               {isSignUp ? 'Create your account' : 'Welcome back'}
//             </h2>
//             <p className="text-purple-200 mt-1">
//               {isSignUp ? 'Explore thousands of job opportunities' : 'Sign in to continue your journey'}
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {isSignUp && (
//               <div className="relative">
//                 <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full py-3 pl-12 pr-4 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                   required
//                 />
//               </div>
//             )}

//             <div className="relative">
//               <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full py-3 pl-12 pr-4 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 required
//               />
//             </div>

//             <div className="relative">
//               <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="w-full py-3 pl-12 pr-10 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>

//             {isSignUp && (
//               <div className="relative">
//                 <Shield className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className="w-full py-3 pl-12 pr-10 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
//                 >
//                   {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             )}

//             {!isSignUp && (
//               <div className="flex items-center justify-between text-sm text-gray-300">
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="accent-purple-500" />
//                   <span>Remember me</span>
//                 </label>
//                 <a href="#" className="text-purple-300 hover:text-purple-200">Forgot password?</a>
//               </div>
//             )}

//             <button
//               type="submit"
//               className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center space-x-2"
//             >
//               <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
//               <ArrowRight size={18} />
//             </button>
//           </form>

//           <div className="flex items-center my-6">
//             <hr className="flex-grow border-white/20" />
//             <span className="mx-4 text-gray-300 text-sm">or</span>
//             <hr className="flex-grow border-white/20" />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <button className="flex items-center justify-center py-3 px-4 bg-white/10 rounded-xl text-white text-sm hover:bg-white/20 transition">
//               <div className="w-5 h-5 bg-white rounded-full mr-2"></div>
//               Google
//             </button>
//             <button className="flex items-center justify-center py-3 px-4 bg-white/10 rounded-xl text-white text-sm hover:bg-white/20 transition">
//               <div className="w-5 h-5 bg-blue-600 rounded-full mr-2"></div>
//               LinkedIn
//             </button>
//           </div>

//           <div className="text-center mt-8 text-sm text-gray-300">
//             {isSignUp ? 'Already have an account?' : "Don't have an account?"}
//             <button
//               onClick={() => setIsSignUp(!isSignUp)}
//               className="ml-2 text-purple-300 hover:text-purple-200 font-semibold"
//             >
//               {isSignUp ? 'Sign In' : 'Sign Up'}
//             </button>
//           </div>
//         </div>

//         {/* Right Side Branding */}
//         <div className="hidden lg:flex w-1/2 flex-col justify-center items-center text-white text-center bg-gradient-to-br from-[#7e22ce]/30 to-[#9333ea]/20 p-12 space-y-6">
//          <div className="hidden md:block">
//                   <img
//                     src={SignUpImage} // replace with your image
//                     alt="FAQImage"
//                     className="w-full h-auto"
//                   />
//                 </div>
//           <h3 className="text-3xl font-bold leading-snug">
//             Transform your career with SkillBridge
//           </h3>
//           <p className="text-purple-100 max-w-md">
//             Unlock opportunities with the most intelligent job-matching platform. Built for the modern job seeker.
//           </p>
//           <ul className="space-y-3 text-sm text-left text-purple-200 max-w-md">
//             <li>✅ AI-driven recommendations</li>
//             <li>✅ Verified recruiters & global listings</li>
//             <li>✅ Track applications in real-time</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AmazingAuthForm;









import React, { useState } from 'react';
import { 
  Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles, Shield, CheckCircle, 
  Building, Users, Crown, UserCheck, Briefcase, FileText 
} from 'lucide-react';

const EnhancedAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState('seeker'); // 'seeker', 'recruiter', 'admin'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Recruiter specific fields
    companyName: '',
    companyDescription: '',
    // Seeker specific fields
    skills: []
  });
  const [skillInput, setSkillInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const userTypes = [
    { 
      id: 'seeker', 
      label: 'Job Seeker', 
      icon: User, 
      description: 'Find your dream job',
      color: 'from-blue-500 to-purple-500'
    },
    { 
      id: 'recruiter', 
      label: 'Recruiter', 
      icon: Building, 
      description: 'Find the best talent',
      color: 'from-green-500 to-teal-500'
    },
    { 
      id: 'admin', 
      label: 'Admin', 
      icon: Crown, 
      description: 'Manage platform',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (isSignUp) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

      if (userType === 'recruiter') {
        if (!formData.companyName) {
          newErrors.companyName = 'Company name is required';
        }
        if (!formData.companyDescription) {
          newErrors.companyDescription = 'Company description is required';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Prepare payload based on user type and action
      const payload = {
        email: formData.email,
        password: formData.password,
        userType: userType
      };

      if (isSignUp) {
        payload.name = formData.name;
        
        if (userType === 'recruiter') {
          payload.companyName = formData.companyName;
          payload.companyDescription = formData.companyDescription;
        } else if (userType === 'seeker') {
          payload.skills = formData.skills;
        }
      }

      console.log('Submitting:', payload);
      
      // Simulate success
      alert(`${isSignUp ? 'Registration' : 'Login'} successful for ${userType}!`);
      
    } catch (error) {
      console.error('Auth error:', error);
      alert('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      companyDescription: '',
      skills: []
    });
    setErrors({});
    setSkillInput('');
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    resetForm();
  };

  const changeUserType = (newType) => {
    setUserType(newType);
    resetForm();
  };

  const getCurrentUserTypeData = () => {
    return userTypes.find(type => type.id === userType);
  };

  const currentUserType = getCurrentUserTypeData();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1f52] via-[#312e81] to-[#4c1d95] px-4 py-8">
      <div className="relative w-full max-w-6xl bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden flex flex-col lg:flex-row">
        
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-10">
          <div className="mb-8 text-center">
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${currentUserType.color} mb-4`}>
              <currentUserType.icon className="text-white h-6 w-6" />
            </div>
            <h2 className="text-white text-3xl font-bold mb-2">
              {isSignUp ? `Create ${currentUserType.label} Account` : `Welcome back, ${currentUserType.label}`}
            </h2>
            <p className="text-purple-200">
              {isSignUp ? currentUserType.description : 'Sign in to continue your journey'}
            </p>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <div className="grid grid-cols-3 gap-2 p-1 bg-white/5 rounded-xl">
              {userTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => changeUserType(type.id)}
                    className={`flex flex-col items-center p-3 rounded-lg transition-all duration-200 ${
                      userType === type.id 
                        ? `bg-gradient-to-br ${type.color} text-white shadow-lg transform scale-105` 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            {isSignUp && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full py-3 pl-12 pr-4 rounded-xl bg-white/10 text-white placeholder-gray-300 border ${
                    errors.name ? 'border-red-400' : 'border-white/20'
                  } focus:outline-none focus:ring-2 focus:ring-purple-400`}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full py-3 pl-12 pr-4 rounded-xl bg-white/10 text-white placeholder-gray-300 border ${
                  errors.email ? 'border-red-400' : 'border-white/20'
                } focus:outline-none focus:ring-2 focus:ring-purple-400`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full py-3 pl-12 pr-10 rounded-xl bg-white/10 text-white placeholder-gray-300 border ${
                  errors.password ? 'border-red-400' : 'border-white/20'
                } focus:outline-none focus:ring-2 focus:ring-purple-400`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>

            {isSignUp && (
              <div className="relative">
                <Shield className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full py-3 pl-12 pr-10 rounded-xl bg-white/10 text-white placeholder-gray-300 border ${
                    errors.confirmPassword ? 'border-red-400' : 'border-white/20'
                  } focus:outline-none focus:ring-2 focus:ring-purple-400`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            )}

            {/* Recruiter specific fields */}
            {isSignUp && userType === 'recruiter' && (
              <>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full py-3 pl-12 pr-4 rounded-xl bg-white/10 text-white placeholder-gray-300 border ${
                      errors.companyName ? 'border-red-400' : 'border-white/20'
                    } focus:outline-none focus:ring-2 focus:ring-purple-400`}
                  />
                  {errors.companyName && <p className="text-red-400 text-sm mt-1">{errors.companyName}</p>}
                </div>
                <div className="relative">
                  <FileText className="absolute left-4 top-3 text-gray-400" />
                  <textarea
                    name="companyDescription"
                    placeholder="Company Description"
                    value={formData.companyDescription}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full py-3 pl-12 pr-4 rounded-xl bg-white/10 text-white placeholder-gray-300 border ${
                      errors.companyDescription ? 'border-red-400' : 'border-white/20'
                    } focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none`}
                  />
                  {errors.companyDescription && <p className="text-red-400 text-sm mt-1">{errors.companyDescription}</p>}
                </div>
              </>
            )}

            {/* Seeker specific fields */}
            {isSignUp && userType === 'seeker' && (
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Add a skill"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                      className="w-full py-3 pl-12 pr-4 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={addSkill}
                    className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors"
                  >
                    Add
                  </button>
                </div>
                {formData.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-2 text-purple-300 hover:text-white"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {!isSignUp && (
              <div className="flex items-center justify-between text-sm text-gray-300">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-purple-500" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-purple-300 hover:text-purple-200">Forgot password?</a>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 bg-gradient-to-r ${currentUserType.color} hover:opacity-90 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>

          {/* <div className="flex items-center my-6">
            <hr className="flex-grow border-white/20" />
            <span className="mx-4 text-gray-300 text-sm">or</span>
            <hr className="flex-grow border-white/20" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center py-3 px-4 bg-white/10 rounded-xl text-white text-sm hover:bg-white/20 transition">
              <div className="w-5 h-5 bg-white rounded-full mr-2"></div>
              Google
            </button>
            <button className="flex items-center justify-center py-3 px-4 bg-white/10 rounded-xl text-white text-sm hover:bg-white/20 transition">
              <div className="w-5 h-5 bg-blue-600 rounded-full mr-2"></div>
              LinkedIn
            </button>
          </div> */}

          <div className="text-center mt-8 text-sm text-gray-300">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={toggleAuthMode}
              className="ml-2 text-purple-300 hover:text-purple-200 font-semibold"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>

        {/* Right Side Branding */}
        <div className="hidden lg:flex w-1/2 flex-col justify-center items-center text-white text-center bg-gradient-to-br from-[#7e22ce]/30 to-[#9333ea]/20 p-12 space-y-6">
          <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
            <currentUserType.icon className="w-32 h-32 text-white/80" />
          </div>
          <h3 className="text-3xl font-bold leading-snug">
            {userType === 'seeker' && 'Transform your career with SkillBridge'}
            {userType === 'recruiter' && 'Find top talent with SkillBridge'}
            {userType === 'admin' && 'Manage SkillBridge Platform'}
          </h3>
          <p className="text-purple-100 max-w-md">
            {userType === 'seeker' && 'Unlock opportunities with the most intelligent job-matching platform. Built for the modern job seeker.'}
            {userType === 'recruiter' && 'Connect with qualified candidates and streamline your hiring process with our advanced recruiting tools.'}
            {userType === 'admin' && 'Comprehensive platform management tools to oversee users, content, and system operations.'}
          </p>
          <ul className="space-y-3 text-sm text-left text-purple-200 max-w-md">
            {userType === 'seeker' && (
              <>
                <li>✅ AI-driven job recommendations</li>
                <li>✅ Skill-based matching system</li>
                <li>✅ Track applications in real-time</li>
                <li>✅ Career development resources</li>
              </>
            )}
            {userType === 'recruiter' && (
              <>
                <li>✅ Advanced candidate filtering</li>
                <li>✅ Company profile management</li>
                <li>✅ Application tracking system</li>
                <li>✅ Verified recruiter status</li>
              </>
            )}
            {userType === 'admin' && (
              <>
                <li>✅ User management dashboard</li>
                <li>✅ Content moderation tools</li>
                <li>✅ Analytics and reporting</li>
                <li>✅ System configuration</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAuthForm;
