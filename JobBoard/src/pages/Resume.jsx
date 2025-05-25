
import React, { useState, useRef, useCallback } from 'react';
import { Upload, FileText, Shield, Brain, Target, Users, TrendingUp, CheckCircle, X, Eye, Trash2, ArrowRight, Star, Briefcase, Award, Search, Globe, Clock } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const ResumeUploadApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();


  // File upload functionality
  const handleFiles = useCallback((files) => {
    const validFiles = Array.from(files).filter(file => {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      return validTypes.includes(file.type);
    });

    validFiles.forEach(file => {
      const fileId = Date.now() + Math.random();
      const fileObj = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: new Date()
      };

      setUploadedFiles(prev => [...prev, fileObj]);
      
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
        }
        setUploadProgress(prev => ({ ...prev, [fileId]: progress }));
      }, 200);
    });
  }, []);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-600">
              JobBoard
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 'home'
                  ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('upload')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentPage === 'upload'
                  ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Upload Resume
            </button>

            <button className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            onClick={() => navigate("/")}
            >
              Back to HomePage
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  // Home Page Component
  const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Find your next
                    <span className="text-blue-600 block">career opportunity</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                    Upload your resume and get matched with thousands of job opportunities from top companies. Let our AI-powered platform accelerate your career growth.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => setCurrentPage('upload')}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Upload className="w-5 h-5" />
                    <span>Upload Resume</span>
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Search className="w-5 h-5" />
                    <span>Browse Jobs</span>
                  </button>
                </div>
                <div className="flex items-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Free to use</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>AI-powered matching</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Secure & private</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Resume Analysis</h3>
                        <p className="text-sm text-gray-500">AI-powered insights</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Match Score</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full w-20"></div>
                          </div>
                          <span className="text-sm font-semibold text-green-600">85%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Skills Rating</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full w-16"></div>
                          </div>
                          <span className="text-sm font-semibold text-blue-600">78%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Experience</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full w-20"></div>
                          </div>
                          <span className="text-sm font-semibold text-purple-600">92%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-blue-600 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              {[
                { number: "2.5M+", label: "Active Job Seekers" },
                { number: "150K+", label: "Company Partners" },
                { number: "95%", label: "Success Rate" },
                { number: "24/7", label: "Platform Uptime" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold">{stat.number}</div>
                  <div className="text-lg text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why professionals choose CareerPro
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join millions who have accelerated their careers with our advanced job matching platform
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Matching",
                  description: "Our advanced algorithms analyze your skills, experience, and preferences to find the perfect job matches tailored specifically for you.",
                  features: ["Smart skill analysis", "Preference learning", "Personalized recommendations"]
                },
                {
                  icon: Shield,
                  title: "Privacy & Security",
                  description: "Your personal information is protected with enterprise-grade security. Control who sees your profile and when you're contacted.",
                  features: ["End-to-end encryption", "Privacy controls", "Secure data handling"]
                },
                {
                  icon: Globe,
                  title: "Global Opportunities",
                  description: "Access job opportunities from companies worldwide. From startups to Fortune 500 companies, find your next role anywhere.",
                  features: ["Remote work options", "International companies", "Local and global roles"]
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to advance your career?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Upload your resume today and start receiving job matches from top companies in your field.
            </p>
            <button
              onClick={() => setCurrentPage('upload')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>Get Started Now</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );

  // Upload Page Component
  const UploadPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Upload Your Resume
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload your resume to get personalized job recommendations and insights from our AI-powered career platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Upload Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div
                  className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                    dragActive
                      ? 'border-blue-400 bg-blue-50 scale-[1.02]'
                      : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Upload className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Drag & drop your resume here
                  </h3>
                  <p className="text-gray-600 mb-6">
                    or click to browse and select files
                  </p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Choose File
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFiles(e.target.files)}
                    className="hidden"
                  />
                  <p className="text-sm text-gray-500 mt-4">
                    Supported formats: PDF, DOC, DOCX (Max 10MB)
                  </p>
                </div>

                {/* Upload Progress & Files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Uploaded Files</h3>
                    <div className="space-y-4">
                      {uploadedFiles.map((file) => (
                        <div key={file.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FileText className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 truncate max-w-sm">{file.name}</p>
                                <p className="text-sm text-gray-500">{formatFileSize(file.size)} • {file.uploadedAt.toLocaleDateString()}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Eye className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => removeFile(file.id)}
                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                          {uploadProgress[file.id] !== undefined && uploadProgress[file.id] < 100 && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Uploading...</span>
                                <span className="text-gray-600">{Math.round(uploadProgress[file.id])}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${uploadProgress[file.id]}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                          {uploadProgress[file.id] === 100 && (
                            <div className="flex items-center text-green-600 text-sm font-medium">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Upload Complete - Analyzing resume...
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Resume Tips */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  Resume Tips
                </h3>
                <div className="space-y-4">
                  {[
                    "Use strong action verbs to describe achievements",
                    "Include quantifiable results and metrics",
                    "Tailor keywords to match job descriptions",
                    "Keep formatting clean and professional",
                    "Highlight relevant skills and certifications",
                    "Proofread for errors and typos"
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Info */}
              <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Your Privacy Matters
                </h3>
                <div className="space-y-3 text-sm text-blue-800">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>End-to-end encryption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>No data sharing without consent</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Delete anytime</span>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-blue-600">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">AI Analysis</p>
                      <p className="text-xs text-gray-600 mt-1">Our AI analyzes your resume for skills, experience, and optimization opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-blue-600">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Job Matching</p>
                      <p className="text-xs text-gray-600 mt-1">Get matched with relevant job opportunities from our partner companies.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-blue-600">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Get Hired</p>
                      <p className="text-xs text-gray-600 mt-1">Apply to jobs with one click and track your application progress.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      <Navigation />
      {currentPage === 'home' ? <HomePage /> : <UploadPage />}
    </div>
  );
};

export default ResumeUploadApp;