import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Bookmark, Share2, ExternalLink, Star, Clock, Zap, Building2, Calendar, DollarSign, Upload, Plus, X, ChevronDown, Filter, Bell, User, MessageSquare, Heart, Eye, TrendingUp, Briefcase } from 'lucide-react';

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [savedJobs, setSavedJobs] = useState(new Set());
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    { term: 'Sales Coordinator', location: 'Mysuru', count: 15 },
    { term: 'Software Developer', location: 'Bangalore', count: 48 },
    { term: 'React Developer', location: 'Mumbai', count: 32 },
    { term: 'Digital Marketing', location: 'Delhi', count: 28 }
  ]);
  const [appliedJobs, setAppliedJobs] = useState(new Set());
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const searchRef = useRef(null);
  const locationRef = useRef(null);
  const userMenuRef = useRef(null);

  const jobSuggestions = [
    'Software Developer', 'Data Scientist', 'Product Manager', 'UI/UX Designer',
    'Sales Manager', 'Marketing Specialist', 'Business Analyst', 'DevOps Engineer',
    'Full Stack Developer', 'Content Writer', 'HR Manager', 'Accountant'
  ];

  const locationSuggestions = [
    'Bangalore, Karnataka', 'Mumbai, Maharashtra', 'Delhi, NCR', 'Hyderabad, Telangana',
    'Pune, Maharashtra', 'Chennai, Tamil Nadu', 'Gurgaon, Haryana', 'Mysuru, Karnataka',
    'Remote', 'Work from Home', 'Noida, Uttar Pradesh', 'Ahmedabad, Gujarat'
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Sales Coordinator',
      company: 'ECOSENSE GENERAL TRADING LLC',
      location: 'Mysuru, Karnataka',
      salary: '₹1,80,000 - ₹3,00,000 a year',
      type: 'Full-time',
      rating: 4.0,
      responseTime: 'Typically responds within 5 days',
      postedDays: 3,
      views: 245,
      applicants: 12,
      requirements: [
        '2-3 years of experience in sales, customer service, client support, or coordination roles.',
        'Bachelor\'s degree or higher preferred.',
        'Excellent communication and organizational skills.'
      ],
      benefits: ['Health Insurance', 'PF', 'Flexible Hours'],
      easyApply: true,
      responseRate: '51-74% of applications in the past 30 days',
      urgent: false,
      featured: true
    },
    {
      id: 2,
      title: 'Software Developer',
      company: 'TechCorp Solutions',
      location: 'Bangalore, Karnataka',
      salary: '₹8,00,000 - ₹15,00,000 a year',
      type: 'Full-time',
      rating: 4.5,
      responseTime: 'Typically responds within 3 days',
      postedDays: 1,
      views: 892,
      applicants: 34,
      requirements: [
        '3+ years of experience in React.js and Node.js',
        'Strong knowledge of JavaScript, HTML, CSS',
        'Experience with database management'
      ],
      benefits: ['Health Insurance', 'Stock Options', 'Remote Work', 'Learning Budget'],
      easyApply: true,
      responseRate: '75-90% of applications in the past 30 days',
      urgent: true,
      featured: false
    },
    {
      id: 3,
      title: 'Digital Marketing Manager',
      company: 'Creative Media Hub',
      location: 'Mumbai, Maharashtra',
      salary: '₹6,00,000 - ₹10,00,000 a year',
      type: 'Full-time',
      rating: 4.2,
      responseTime: 'Typically responds within 7 days',
      postedDays: 5,
      views: 456,
      applicants: 28,
      requirements: [
        '4+ years of digital marketing experience',
        'Expertise in SEO, SEM, and social media marketing',
        'Strong analytical and creative skills'
      ],
      benefits: ['Health Insurance', 'Performance Bonus', 'Flexible Hours'],
      easyApply: false,
      responseRate: '60-80% of applications in the past 30 days',
      urgent: false,
      featured: false
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      company: 'DesignWorks Studio',
      location: 'Pune, Maharashtra',
      salary: '₹5,00,000 - ₹9,00,000 a year',
      type: 'Full-time',
      rating: 4.3,
      responseTime: 'Typically responds within 4 days',
      postedDays: 2,
      views: 678,
      applicants: 19,
      requirements: [
        '2+ years of UX/UI design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio demonstrating design skills'
      ],
      benefits: ['Health Insurance', 'Creative Freedom', 'MacBook Pro', 'Gym Membership'],
      easyApply: true,
      responseRate: '70-85% of applications in the past 30 days',
      urgent: false,
      featured: true
    }
  ];

  const toggleSaveJob = (jobId) => {
    const newSavedJobs = new Set(savedJobs);
    if (newSavedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
    } else {
      newSavedJobs.add(jobId);
    }
    setSavedJobs(newSavedJobs);
  };

  const applyToJob = (jobId) => {
    const newAppliedJobs = new Set(appliedJobs);
    newAppliedJobs.add(jobId);
    setAppliedJobs(newAppliedJobs);
  };

  const handleSearch = () => {
    if (searchTerm.trim() || location.trim()) {
      const newSearch = { 
        term: searchTerm || 'All jobs', 
        location: location || 'All locations',
        count: Math.floor(Math.random() * 50) + 10
      };
      setRecentSearches(prev => [newSearch, ...prev.slice(0, 4)]);
    }
    console.log('Searching for:', searchTerm, 'in', location);
  };

  const selectSuggestion = (suggestion, type) => {
    if (type === 'search') {
      setSearchTerm(suggestion);
      setShowSearchSuggestions(false);
    } else {
      setLocation(suggestion);
      setShowLocationSuggestions(false);
    }
  };

  const selectRecentSearch = (search) => {
    setSearchTerm(search.term === 'All jobs' ? '' : search.term);
    setLocation(search.location === 'All locations' ? '' : search.location);
  };

  const removeRecentSearch = (index, e) => {
    e.stopPropagation();
    setRecentSearches(prev => prev.filter((_, i) => i !== index));
  };

  // Click outside handlers
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchSuggestions(false);
      }
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationSuggestions(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredJobs = jobListings.filter(job => {
    if (activeFilter === 'saved') return savedJobs.has(job.id);
    if (activeFilter === 'applied') return appliedJobs.has(job.id);
    if (activeFilter === 'recent') return job.postedDays <= 3;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-blue-600">indeed</div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 border-b-2 border-blue-600 pb-4 transition-colors">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 pb-4 transition-colors">Company reviews</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 pb-4 transition-colors">Salary guide</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                <Upload className="w-4 h-4" />
                <span>Upload Resume</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span className="hidden md:inline">Post Job</span>
                <span className="md:hidden">Post</span>
              </button>
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
              <MessageSquare className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
              <div className="relative" ref={userMenuRef}>
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Jobs</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Saved Jobs</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <hr className="my-1" />
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            {/* Job Search Input */}
            <div className="flex-1 relative text-gray-600" ref={searchRef}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10 " />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSearchSuggestions(true);
                }}
                onFocus={() => setShowSearchSuggestions(true)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {showSearchSuggestions && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto z-20">
                  {searchTerm && (
                    <div className="p-2 border-b border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">Suggestions</p>
                      {jobSuggestions
                        .filter(suggestion => suggestion.toLowerCase().includes(searchTerm.toLowerCase()))
                        .slice(0, 5)
                        .map(suggestion => (
                          <div
                            key={suggestion}
                            onClick={() => selectSuggestion(suggestion, 'search')}
                            className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer rounded"
                          >
                            <Search className="w-4 h-4 text-gray-400" />
                            <span className="text-sm">{suggestion}</span>
                          </div>
                        ))
                      }
                    </div>
                  )}
                  <div className="p-2">
                    <p className="text-xs text-gray-500 mb-2">Popular searches</p>
                    {jobSuggestions.slice(0, 4).map(suggestion => (
                      <div
                        key={suggestion}
                        onClick={() => selectSuggestion(suggestion, 'search')}
                        className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer rounded"
                      >
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Location Input */}
            <div className="flex-1 relative text-gray-600" ref={locationRef}>
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <input
                type="text"
                placeholder="City, state, zip code, or 'remote'"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setShowLocationSuggestions(true);
                }}
                onFocus={() => setShowLocationSuggestions(true)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {showLocationSuggestions && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto z-20">
                  {location && (
                    <div className="p-2 border-b border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">Matching locations</p>
                      {locationSuggestions
                        .filter(suggestion => suggestion.toLowerCase().includes(location.toLowerCase()))
                        .slice(0, 5)
                        .map(suggestion => (
                          <div
                            key={suggestion}
                            onClick={() => selectSuggestion(suggestion, 'location')}
                            className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer rounded"
                          >
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-sm">{suggestion}</span>
                          </div>
                        ))
                      }
                    </div>
                  )}
                  <div className="p-2">
                    <p className="text-xs text-gray-500 mb-2">Popular locations</p>
                    {locationSuggestions.slice(0, 4).map(suggestion => (
                      <div
                        key={suggestion}
                        onClick={() => selectSuggestion(suggestion, 'location')}
                        className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer rounded"
                      >
                        <Building2 className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Find jobs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Jobs Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Filter Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex flex-wrap">
                  {[
                    { key: 'all', label: 'All Jobs', icon: Briefcase },
                    { key: 'saved', label: 'Saved', icon: Bookmark },
                    { key: 'applied', label: 'Applied', icon: CheckCircle },
                    { key: 'recent', label: 'Recent', icon: Clock }
                  ].map(({ key, label, icon: Icon }) => (
                    <button
                      key={key}
                      onClick={() => setActiveFilter(key)}
                      className={`flex items-center space-x-2 px-6 py-4 font-medium border-b-2 transition-colors ${
                        activeFilter === key
                          ? 'text-blue-600 border-blue-600'
                          : 'text-gray-600 border-transparent hover:text-blue-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                      {key === 'saved' && savedJobs.size > 0 && (
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                          {savedJobs.size}
                        </span>
                      )}
                      {key === 'applied' && appliedJobs.size > 0 && (
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                          {appliedJobs.size}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-600">
                    {filteredJobs.length} jobs found
                    {activeFilter !== 'all' && ` in ${activeFilter} category`}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <select className="text-sm border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Relevance</option>
                      <option>Date</option>
                      <option>Salary</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {filteredJobs.map((job) => (
                    <div key={job.id} className={`border rounded-lg p-6 hover:shadow-md transition-all ${
                      job.featured ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200'
                    } ${job.urgent ? 'ring-2 ring-orange-200' : ''}`}>
                      
                      {/* Job Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                              {job.title}
                            </h3>
                            {job.featured && (
                              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                                Featured
                              </span>
                            )}
                            {job.urgent && (
                              <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
                                Urgent
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">{job.company}</span>
                            {job.rating && (
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-600">{job.rating}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-gray-600 mb-2">
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{job.views} views</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{job.applicants} applicants</span>
                            </span>
                          </div>
                          
                          {job.responseTime && (
                            <div className="flex items-center space-x-1 mb-2">
                              <Zap className="w-4 h-4 text-blue-500" />
                              <span className="text-sm text-gray-600">{job.responseTime}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => toggleSaveJob(job.id)}
                            className={`p-2 hover:bg-gray-100 rounded-full transition-colors ${
                              savedJobs.has(job.id) ? 'text-blue-600' : 'text-gray-400'
                            }`}
                          >
                            <Heart
                              className={`w-5 h-5 ${savedJobs.has(job.id) ? 'fill-current' : ''}`}
                            />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Share2 className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Salary and Type */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-900 font-semibold text-lg">{job.salary}</span>
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{job.type}</span>
                        </div>
                      </div>
                      
                      {/* Easy Apply Badge */}
                      {job.easyApply && (
                        <div className="flex items-center space-x-1 mb-4">
                          <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                            <Zap className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-blue-600 font-medium">Easy Apply</span>
                        </div>
                      )}
                      
                      {/* Requirements */}
                      <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Benefits */}
                      {job.benefits && job.benefits.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((benefit, index) => (
                              <span key={index} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Response Rate */}
                      {job.responseRate && (
                        <div className="flex items-center space-x-1 mb-4">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">
                            Responded to {job.responseRate}, typically within {job.responseTime?.split('within ')[1] || '5 days'}.
                          </span>
                        </div>
                      )}
                      
                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {appliedJobs.has(job.id) ? (
                            <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-md">
                              <CheckCircle className="w-4 h-4" />
                              <span className="font-medium">Applied</span>
                            </div>
                          ) : (
                            <button
                              onClick={() => applyToJob(job.id)}
                              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2"
                            >
                              <span>Apply now</span>
                              {job.easyApply && <Zap className="w-4 h-4" />}
                            </button>
                          )}
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <ExternalLink className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                        <span className="text-xs text-gray-500 flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{job.postedDays} days ago</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {filteredJobs.length === 0 && (
                  <div className="text-center py-12">
                    <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                    <p className="text-gray-600">Try adjusting your filters or search terms.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Searches */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <span>Recent searches</span>
              </h3>
              <div className="space-y-3">
                {recentSearches.map((search, index) => (
                  <div
                    key={index}
                    onClick={() => selectRecentSearch(search)}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer rounded-lg border border-gray-100 group"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{search.term}</div>
                      <div className="text-xs text-gray-500 flex items-center space-x-2">
                        <MapPin className="w-3 h-3" />
                        <span>{search.location}</span>
                        <span>•</span>
                        <span>{search.count} jobs</span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => removeRecentSearch(index, e)}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded-full transition-all"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium">
                Clear all searches
              </button>
            </div>

            {/* Job Alerts */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Bell className="w-5 h-5 text-gray-600" />
                <span>Job alerts</span>
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get new jobs matching your preferences delivered to your inbox
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div>
                    <div className="text-sm font-medium text-blue-900">Software Developer</div>
                    <div className="text-xs text-blue-600">Bangalore • Daily alerts</div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Bell className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Create new alert
              </button>
            </div>

            {/* Career Resources */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <span>Career resources</span>
              </h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                        Interview Preparation
                      </div>
                      <div className="text-xs text-gray-500">Tips and guides</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                        Salary Calculator
                      </div>
                      <div className="text-xs text-gray-500">Know your worth</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100 group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Upload className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                        Resume Builder
                      </div>
                      <div className="text-xs text-gray-500">Free templates</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Featured Companies */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-gray-600" />
                <span>Featured companies</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg border border-gray-100 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">TC</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm text-gray-900 group-hover:text-blue-600">TechCorp Solutions</div>
                    <div className="text-xs text-gray-600 flex items-center space-x-2">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>4.5</span>
                      <span>•</span>
                      <span>50+ jobs</span>
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-blue-100 rounded-full transition-all">
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg border border-gray-100 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">IL</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm text-gray-900 group-hover:text-blue-600">InnovateLabs</div>
                    <div className="text-xs text-gray-600 flex items-center space-x-2">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>4.3</span>
                      <span>•</span>
                      <span>25+ jobs</span>
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-blue-100 rounded-full transition-all">
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </button>
                </div>

                <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg border border-gray-100 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DW</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm text-gray-900 group-hover:text-blue-600">DesignWorks Studio</div>
                    <div className="text-xs text-gray-600 flex items-center space-x-2">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>4.2</span>
                      <span>•</span>
                      <span>18+ jobs</span>
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-blue-100 rounded-full transition-all">
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
              </div>
              <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium">
                View all companies
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <span>Job market insights</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-green-900">Software Jobs</div>
                    <div className="text-xs text-green-600">High demand</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-700">2.4K+</div>
                    <div className="text-xs text-green-600">↑ 15%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-blue-900">Remote Jobs</div>
                    <div className="text-xs text-blue-600">Growing trend</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-700">892</div>
                    <div className="text-xs text-blue-600">↑ 28%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-purple-900">Design Jobs</div>
                    <div className="text-xs text-purple-600">Steady growth</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-700">456</div>
                    <div className="text-xs text-purple-600">↑ 8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add missing CheckCircle component import
const CheckCircle = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default JobBoard;