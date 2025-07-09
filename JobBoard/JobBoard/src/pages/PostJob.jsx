import React, { useState } from 'react';
import { 
  Upload, X, CheckCircle, AlertCircle, Briefcase, ArrowLeft, 
  Building, MapPin, DollarSign, Clock, Users, FileText, 
  Mail, Phone, User, Sparkles, Zap, Target, Award
} from 'lucide-react';

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    salaryRange: '',
    jobType: '',
    experienceLevel: '',
    jobDescription: '',
    requiredSkills: '',
    responsibilities: '',
    employerName: '',
    email: '',
    contactNumber: ''
  });

  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const jobTypes = ['Full-Time', 'Part-Time', 'Contract', 'Internship'];
  const experienceLevels = ['Fresher', 'Mid-Level', 'Senior'];

  const steps = [
    { id: 1, title: 'Job Details', icon: Briefcase },
    { id: 2, title: 'Company Info', icon: Building },
    { id: 3, title: 'Contact', icon: User }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors(prev => ({ ...prev, logo: 'File size should be less than 5MB' }));
        return;
      }
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, logo: 'Please upload an image file' }));
        return;
      }
      
      setLogo(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
      setErrors(prev => ({ ...prev, logo: '' }));
    }
  };

  const removeLogo = () => {
    setLogo(null);
    setLogoPreview(null);
    document.getElementById('logo-upload').value = '';
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      const step1Fields = ['jobTitle', 'location', 'salaryRange', 'jobType', 'experienceLevel', 'jobDescription', 'requiredSkills'];
      step1Fields.forEach(field => {
        if (!formData[field].trim()) {
          newErrors[field] = 'This field is required';
        }
      });
    } else if (step === 2) {
      if (!formData.companyName.trim()) {
        newErrors.companyName = 'Company name is required';
      }
    } else if (step === 3) {
      const step3Fields = ['employerName', 'email', 'contactNumber'];
      step3Fields.forEach(field => {
        if (!formData[field].trim()) {
          newErrors[field] = 'This field is required';
        }
      });

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.email && !emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }

      // Phone validation
      const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
      if (formData.contactNumber && !phoneRegex.test(formData.contactNumber)) {
        newErrors.contactNumber = 'Please enter a valid contact number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) {
      setSubmitStatus({ type: 'error', message: 'Please fix the errors below and try again.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful submission
      console.log('Job posting data:', { ...formData, logo });
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Job posted successfully! Your job listing is now live and visible to candidates.' 
      });
      
      setCompletedSteps(new Set([1, 2, 3]));
      
      // Auto-hide success message after 6 seconds
      setTimeout(() => setSubmitStatus(null), 6000);
      
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to post job. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      jobTitle: '',
      companyName: '',
      location: '',
      salaryRange: '',
      jobType: '',
      experienceLevel: '',
      jobDescription: '',
      requiredSkills: '',
      responsibilities: '',
      employerName: '',
      email: '',
      contactNumber: ''
    });
    setLogo(null);
    setLogoPreview(null);
    setErrors({});
    setSubmitStatus(null);
    setCurrentStep(1);
    setCompletedSteps(new Set());
    if (document.getElementById('logo-upload')) {
      document.getElementById('logo-upload').value = '';
    }
  };

  const goLandingPage = () => {
    // In a real app, this would use React Router
    window.location.href = '/landingpage';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Navigation Header */}
          <div className="mb-8">
            <button
              onClick={() => goLandingPage()}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white hover:text-gray-900 hover:shadow-md transition-all duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </button>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <div className="relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                <Sparkles className="h-10 w-10 text-white animate-spin-slow" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
              Post Your Dream Job
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Create an irresistible job listing that attracts top talent and transforms your hiring process
            </p>
            
            {/* Step Progress */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.id;
                  const isCompleted = completedSteps.has(step.id);
                  
                  return (
                    <div key={step.id} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div className={`relative p-3 rounded-full transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110' 
                            : isCompleted 
                              ? 'bg-green-500 text-white shadow-md' 
                              : 'bg-gray-200 text-gray-400'
                        }`}>
                          {isCompleted && !isActive ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <Icon className="w-5 h-5" />
                          )}
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
                          )}
                        </div>
                        <span className={`mt-2 text-sm font-medium transition-colors ${
                          isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-16 h-0.5 mx-4 transition-colors ${
                          completedSteps.has(step.id) ? 'bg-green-400' : 'bg-gray-300'
                        }`}></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Success/Error Message */}
          {submitStatus && (
            <div className={`mb-8 p-6 rounded-xl backdrop-blur-sm border transition-all duration-500 transform ${
              submitStatus.type === 'success' 
                ? 'bg-green-50/80 border-green-200 shadow-lg shadow-green-100' 
                : 'bg-red-50/80 border-red-200 shadow-lg shadow-red-100'
            }`}>
              <div className="flex items-start space-x-4">
                {submitStatus.type === 'success' ? (
                  <div className="p-2 bg-green-100 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                ) : (
                  <div className="p-2 bg-red-100 rounded-full">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className={`font-semibold ${
                    submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {submitStatus.type === 'success' ? 'Success!' : 'Error'}
                  </h3>
                  <p className={`mt-1 ${
                    submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {submitStatus.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form Container */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
            
            {/* Step 1: Job Details */}
            {currentStep === 1 && (
              <div className="p-8 animate-fadeIn">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Job Details</h2>
                    <p className="text-gray-600">Tell us about the role you're hiring for</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Job Title */}
                  <div className="lg:col-span-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <Target className="w-4 h-4 mr-2 text-blue-600" />
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-600 ${
                        errors.jobTitle ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="e.g., Senior Software Engineer, Product Manager, UX Designer"
                    />
                    {errors.jobTitle && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.jobTitle}</p>}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-600 ${
                        errors.location ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Mumbai, Remote, Hybrid, New York"
                    />
                    {errors.location && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.location}</p>}
                  </div>

                  {/* Salary Range */}
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <DollarSign className="w-4 h-4 mr-2 text-purple-600" />
                      Salary Range *
                    </label>
                    <input
                      type="text"
                      name="salaryRange"
                      value={formData.salaryRange}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-600 ${
                        errors.salaryRange ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="₹15-25 LPA, $80k-120k, Competitive"
                    />
                    {errors.salaryRange && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.salaryRange}</p>}
                  </div>

                  {/* Job Type */}
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <Clock className="w-4 h-4 mr-2 text-orange-600" />
                      Job Type *
                    </label>
                    <select
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-600 ${
                        errors.jobType ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <option value="">Select job type</option>
                      {jobTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.jobType && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.jobType}</p>}
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <Award className="w-4 h-4 mr-2 text-indigo-600" />
                      Experience Level *
                    </label>
                    <select
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-600 ${
                        errors.experienceLevel ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <option value="">Select experience level</option>
                      {experienceLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                    {errors.experienceLevel && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.experienceLevel}</p>}
                  </div>

                  {/* Job Description */}
                  <div className="lg:col-span-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <FileText className="w-4 h-4 mr-2 text-teal-600" />
                      Job Description *
                    </label>
                    <textarea
                      name="jobDescription"
                      value={formData.jobDescription}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none text-gray-600 ${
                        errors.jobDescription ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Paint a compelling picture of the role, your company culture, growth opportunities, and what makes this position exciting for candidates..."
                    />
                    {errors.jobDescription && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.jobDescription}</p>}
                  </div>

                  {/* Required Skills */}
                  <div className="lg:col-span-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <Zap className="w-4 h-4 mr-2 text-yellow-600" />
                      Required Skills & Technologies *
                    </label>
                    <textarea
                      name="requiredSkills"
                      value={formData.requiredSkills}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none text-gray-600 ${
                        errors.requiredSkills ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="List the essential skills, technologies, frameworks, and qualifications. Be specific but focus on must-haves rather than nice-to-haves..."
                    />
                    {errors.requiredSkills && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.requiredSkills}</p>}
                  </div>

                  {/* Responsibilities */}
                  <div className="lg:col-span-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <Users className="w-4 h-4 mr-2 text-pink-600" />
                      Key Responsibilities
                    </label>
                    <textarea
                      name="responsibilities"
                      value={formData.responsibilities}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 hover:border-gray-300 transition-all duration-200 resize-none text-gray-600 "
                      placeholder="Outline the key responsibilities, day-to-day tasks, and expectations. Help candidates understand what success looks like in this role..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Company Info */}
            {currentStep === 2 && (
              <div className="p-8 animate-fadeIn">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg mr-4">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Company Information</h2>
                    <p className="text-gray-600">Showcase your company and brand</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Company Name */}
                  <div className="lg:col-span-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <Building className="w-4 h-4 mr-2 text-blue-600" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-600 ${
                        errors.companyName ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Your company name"
                    />
                    {errors.companyName && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.companyName}</p>}
                  </div>

                  {/* Company Logo Upload */}
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Company Logo
                    </label>
                    
                    <div className="relative">
                      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50/50 hover:bg-gray-100/50 transition-all duration-200 group">
                        {logoPreview ? (
                          <div className="relative">
                            <img src={logoPreview} alt="Logo preview" className="h-24 w-24 object-contain rounded-lg shadow-md" />
                            <button
                              type="button"
                              onClick={removeLogo}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors shadow-md"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center">
                            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                              <Upload className="w-8 h-8 text-white" />
                            </div>
                            <p className="mb-2 text-lg font-semibold text-gray-700">
                              Upload Company Logo
                            </p>
                            <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
                          </div>
                        )}
                        <input
                          id="logo-upload"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleLogoUpload}
                        />
                      </label>
                      {errors.logo && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.logo}</p>}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="p-8 animate-fadeIn">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mr-4">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                    <p className="text-gray-600">How can candidates reach you?</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Employer Name */}
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <User className="w-4 h-4 mr-2 text-blue-600" />
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="employerName"
                      value={formData.employerName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-600 ${
                        errors.employerName ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Ujjwal Rai"
                    />
                    {errors.employerName && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.employerName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <Mail className="w-4 h-4 mr-2 text-green-600" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-600 ${
                        errors.email ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="ujjwal@company.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.email}</p>}
                  </div>

                  {/* Contact Number */}
                  <div className="lg:col-span-2">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <Phone className="w-4 h-4 mr-2 text-purple-600" />
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-600 ${
                        errors.contactNumber ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="+91 9876543210 or +1 (555) 123-4567"
                    />
                    {errors.contactNumber && <p className="mt-2 text-sm text-red-600 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.contactNumber}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-200/50">
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="flex gap-3">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl shadow-sm hover:bg-gray-200 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-500/20 transition-all duration-200 flex items-center"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous
                    </button>
                  )}
                  
                  <button
                    type="button"
                    onClick={handleReset}
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl shadow-sm hover:bg-gray-200 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Reset All
                  </button>
                </div>

                <div className="flex gap-3">
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 flex items-center"
                    >
                      Continue
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/20 transition-all duration-200 flex items-center disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                        isSubmitting ? 'animate-pulse' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                          Publishing Job...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Publish Job
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/60 transition-all duration-300">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Matching</h3>
              <p className="text-gray-600 text-sm">Our AI matches your job with the most qualified candidates automatically.</p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/60 transition-all duration-300">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">Access talent from around the world with our international job board network.</p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/60 transition-all duration-300">
              <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Results</h3>
              <p className="text-gray-600 text-sm">Get qualified applications within 24 hours of posting your job.</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Need help? <button className="text-blue-600 hover:text-blue-700 font-medium">Contact our support team</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add custom CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }
  
  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }
`;
document.head.appendChild(style);