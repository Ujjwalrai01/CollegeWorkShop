import { useState, useEffect } from "react";
import videos from "../assets/videos/video.mp4";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Briefcase,
  MapPin,
  Filter,
  ChevronDown,
  Star,
  Clock,
  Calendar,
  Users,
  Bookmark,
  ChevronRight,
  Menu,
  X,
  Bell,
  User,
  LogOut,
  ArrowUpDown,
  Sliders,
  List,
  Grid,
  Heart,
  CheckCircle,
  CircleDollarSign,
  GraduationCap,
  Building,
} from "lucide-react";

export default function LandingPage() {
  // State management
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [salaryRange, setSalaryRange] = useState([0, 100000]);
  const [experienceLevel, setExperienceLevel] = useState("all");
  const [jobType, setJobType] = useState("all");
  const [industries, setIndustries] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeJobModal, setActiveJobModal] = useState(null);

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "New York, NY",
      salary: 90000,
      salaryDisplay: "$80,000 - $100,000",
      type: "Full-time",
      posted: "2 days ago",
      logo: "T",
      logoColor: "bg-blue-500",
      description:
        "TechCorp is looking for a talented Frontend Developer to join our growing team. You will be responsible for building responsive user interfaces using React.",
      requirements: [
        "2+ years of React experience",
        "Strong CSS skills",
        "Experience with state management",
      ],
      industry: "Tech",
      experience: "Mid-level",
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "BrandWave",
      location: "Remote",
      salary: 20,
      salaryDisplay: "$20/hr",
      type: "Internship",
      posted: "1 day ago",
      logo: "B",
      logoColor: "bg-green-500",
      description:
        "Join our marketing team as an intern and gain hands-on experience in digital marketing campaigns.",
      requirements: [
        "Marketing major",
        "Social media skills",
        "Basic analytics knowledge",
      ],
      industry: "Marketing",
      experience: "Entry-level",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Analytics Pro",
      location: "Boston, MA",
      salary: 75000,
      salaryDisplay: "$70,000 - $85,000",
      type: "Full-time",
      posted: "5 days ago",
      logo: "A",
      logoColor: "bg-purple-500",
      description:
        "Analytics Pro is seeking a detail-oriented Data Analyst to help derive insights from our growing datasets.",
      requirements: [
        "SQL proficiency",
        "Data visualization skills",
        "Statistics background",
      ],
      industry: "Tech",
      experience: "Mid-level",
    },
    {
      id: 4,
      title: "Barista",
      company: "Campus Coffee",
      location: "On Campus",
      salary: 18,
      salaryDisplay: "$18/hr",
      type: "Part-time",
      posted: "3 days ago",
      logo: "C",
      logoColor: "bg-amber-500",
      description:
        "Campus Coffee is hiring baristas for our new location. Perfect for students with flexible schedules.",
      requirements: [
        "No experience needed",
        "Customer service skills",
        "Available weekends",
      ],
      industry: "Food Service",
      experience: "Entry-level",
    },
    {
      id: 5,
      title: "Research Assistant",
      company: "University Lab",
      location: "On Campus",
      salary: 22,
      salaryDisplay: "$22/hr",
      type: "Part-time",
      posted: "1 week ago",
      logo: "U",
      logoColor: "bg-red-500",
      description:
        "Assist professors with ongoing research projects in the biology department.",
      requirements: ["Biology major", "Lab experience", "Detail-oriented"],
      industry: "Education",
      experience: "Entry-level",
    },
    {
      id: 6,
      title: "Web Design Intern",
      company: "Creative Studios",
      location: "Hybrid",
      salary: 25,
      salaryDisplay: "$25/hr",
      type: "Internship",
      posted: "4 days ago",
      logo: "C",
      logoColor: "bg-indigo-500",
      description:
        "Join our creative team and help design beautiful websites for our clients.",
      requirements: [
        "Design portfolio",
        "HTML/CSS knowledge",
        "Adobe Creative Suite",
      ],
      industry: "Design",
      experience: "Entry-level",
    },
  ];

  // Job categories
  const categories = [
    { name: "Tech & IT", icon: <Briefcase size={18} />, count: 438 },
    { name: "Business", icon: <Building size={18} />, count: 327 },
    { name: "Marketing", icon: <Star size={18} />, count: 212 },
    { name: "Engineering", icon: <GraduationCap size={18} />, count: 184 },
    { name: "Healthcare", icon: <CheckCircle size={18} />, count: 156 },
    { name: "Education", icon: <Users size={18} />, count: 94 },
  ];

  // Sample industry options
  const industryOptions = [
    "Tech",
    "Marketing",
    "Design",
    "Education",
    "Food Service",
    "Retail",
  ];

  // Sample notifications
  const notifications = [
    { id: 1, text: "New job matches for your profile", time: "2h ago" },
    {
      id: 2,
      text: "Application for Frontend Developer was viewed",
      time: "1d ago",
    },
    { id: 3, text: "TechCorp posted 5 new positions", time: "2d ago" },
  ];

  // Toggle job saved status
  const toggleSaveJob = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  // Filter jobs based on selected filters
  useEffect(() => {
    let results = jobs;

    // Search term filter
    if (searchTerm) {
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Location filter
    if (location) {
      results = results.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Job type filter
    if (jobType !== "all") {
      results = results.filter((job) => job.type === jobType);
    }

    // Experience level filter
    if (experienceLevel !== "all") {
      results = results.filter((job) => job.experience === experienceLevel);
    }

    // Salary range filter
    results = results.filter((job) => {
      // Handle hourly wages (multiply by 2080 for annual equivalent)
      const annualSalary = job.salary < 1000 ? job.salary * 2080 : job.salary;
      return annualSalary >= salaryRange[0] && annualSalary <= salaryRange[1];
    });

    // Industry filter
    if (industries.length > 0) {
      results = results.filter((job) => industries.includes(job.industry));
    }

    // Tab filters
    if (activeTab === "fullTime") {
      results = results.filter((job) => job.type === "Full-time");
    } else if (activeTab === "partTime") {
      results = results.filter((job) => job.type === "Part-time");
    } else if (activeTab === "internship") {
      results = results.filter((job) => job.type === "Internship");
    } else if (activeTab === "saved") {
      results = results.filter((job) => savedJobs.includes(job.id));
    }

    setFilteredJobs(results);
  }, [
    searchTerm,
    location,
    jobType,
    experienceLevel,
    salaryRange,
    industries,
    activeTab,
    savedJobs,
  ]);

  // Handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Industry checkbox handler
  const handleIndustryChange = (industry) => {
    setIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className={`bg-white shadow z-50 ${
          isSticky ? "sticky top-0 animate-slideDown" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white font-bold p-2 rounded">
              JB
            </div>
            <h1 className="text-xl font-bold text-blue-600">JobBoard</h1>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="font-medium text-blue-600 border-b-2 border-blue-600 pb-1"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="font-medium text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all"
            >
              Companies
            </a>
            <a
              href="#"
              className="font-medium text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all"
            >
              Career Resources
            </a>
            <a
              href="#"
              className="font-medium text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-all"
            >
              For Employers
            </a>
          </nav> */}



          {/* Desktop User Controls */}
          <div className="hidden md:flex items-center gap-4">

             {/* Resume Upload Button */}
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
              onClick={() => navigate("/resume")}
            >
              <Briefcase size={18} />
              Upload Resume
            </button>

            {/* Chat Button */}
            <button
              className="bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
              onClick={() => {/* TODO: handle chat navigation */}}
            >
              <Users size={18} />
              Chat
            </button>



            {/* Notifications dropdown */}
            <div className="relative text-gray-600">
              <button
                className="text-gray-600 hover:text-blue-600 relative "
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10">
                  <h3 className="px-4 py-2 font-medium border-b">
                    Notifications
                  </h3>
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="px-4 py-2 hover:bg-gray-50 border-b border-gray-100"
                    >
                      <p className="text-sm">{notif.text}</p>
                      <span className="text-xs text-gray-500">
                        {notif.time}
                      </span>
                    </div>
                  ))}
                  <div className="px-4 py-2 text-center">
                    <button className="text-sm text-blue-600 font-medium">
                      See all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User size={16} />
                </div>
                <span className="font-medium">Profile</span>
                <ChevronDown size={16} />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Applications
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Saved Jobs
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Account Settings
                  </a>
                  <div className="border-t border-gray-100 mt-1"></div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex items-center"
                      onClick={() => navigate('/home')}
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </div>
                  </a>
                </div>
              )}
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors">
              Post a Job
            </button>
          
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-2">
            <nav className="space-y-3 py-3">
              <a href="#" className="block font-medium text-blue-600">
                Find Jobs
              </a>
              <a href="#" className="block font-medium text-gray-600">
                Companies
              </a>
              <a href="#" className="block font-medium text-gray-600">
                Career Resources
              </a>
              <a href="#" className="block font-medium text-gray-600">
                For Employers
              </a>
            </nav>
            <div className="py-3 border-t border-gray-100">
              <a href="#" className="block font-medium text-gray-600 py-2">
                Notifications
              </a>
              <a href="#" className="block font-medium text-gray-600 py-2">
                Profile
              </a>
              <a href="#" className="block font-medium text-gray-600 py-2">
                Saved Jobs
              </a>
            </div>
            <div className="flex gap-2 py-3 border-t border-gray-100">
              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded font-medium flex-1">
                Sign In
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium flex-1">
                Post a Job
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Enhanced Search */}
      <section className=" h-145 relative bg-blue-600 text-white py-16 overflow-hidden ">
        <video
          src={videos}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/60 z-10"></div>

        <div className="relative z-20 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Find Your Perfect College Job
          </h2>
          <p className="text-lg md:text-xl mb-8 text-center max-w-3xl mx-auto">
            Connecting students with opportunities that fit their schedule,
            skills, and career goals
          </p>

          {/* Enhanced Search Box */}
          <div className="bg-blue-900 rounded-lg shadow-lg p-4 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-7 gap-2">
              <div className="md:col-span-3 flex items-center bg-gray-50 rounded px-3 py-2">
                <Search size={20} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="bg-transparent w-full focus:outline-none text-gray-900"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="md:col-span-3 flex items-center bg-gray-50 rounded px-3 py-2">
                <MapPin size={20} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="City, state, or 'Remote'"
                  className="bg-transparent w-full focus:outline-none text-gray-800"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button className="md:col-span-1 bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>

            {/* Expandable advanced search options */}
            <div className="mt-3 ">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="text-white-600 text-sm flex items-center gap-1 hover:underline "
              >
                <Sliders size={16} />
                Advanced Filters
                <ChevronDown
                  size={16}
                  className={`transform transition-transform ${
                    filtersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {filtersOpen && (
                <div className="grid md:grid-cols-4 gap-4 mt-3 pt-3 border-t border-gray-200">
                  {/* Job Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-1 ">
                      Job Type
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-800 bg-gray-600 text-sm "
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    >
                      <option value="all">All Job Types</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  {/* Experience Level Filter */}
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-1">
                      Experience Level
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-800 bg-gray-600 text-sm"
                      value={experienceLevel}
                      onChange={(e) => setExperienceLevel(e.target.value)}
                    >
                      <option value="all">All Levels</option>
                      <option value="Entry-level">Entry-level</option>
                      <option value="Mid-level">Mid-level</option>
                      <option value="Senior">Senior</option>
                    </select>
                  </div>

                  {/* Salary Range Filter */}
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-1">
                      Salary Range: ${salaryRange[0].toLocaleString()} - $
                      {salaryRange[1].toLocaleString()}
                    </label>
                    <div className="px-2">
                      <input
                        type="range"
                        min="0"
                        max="100000"
                        step="5000"
                        className="w-full"
                        value={salaryRange[1]}
                        onChange={(e) =>
                          setSalaryRange([
                            salaryRange[0],
                            parseInt(e.target.value),
                          ])
                        }
                      />
                    </div>
                  </div>

                  {/* Industry Filter (dropdown) */}
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-1">
                      Industry
                    </label>
                    <div className="border border-gray-300 rounded-md px-3 py-2 text-white-800 bg-gray-600 text-sm h-20 overflow-y-auto">
                      {industryOptions.map((industry) => (
                        <div key={industry} className="flex items-center mb-1">
                          <input
                            type="checkbox"
                            id={`industry-${industry}`}
                            checked={industries.includes(industry)}
                            onChange={() => handleIndustryChange(industry)}
                            className="mr-2"
                          />
                          <label
                            htmlFor={`industry-${industry}`}
                            className="text-sm"
                          >
                            {industry}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quote Section */}

        <div className="relative z-20 container mx-auto px-4 py-25  rounded-xl  text-center">
          <p className="text-1xl md:text-2xl font-semibold font-serif text-white-900 italic leading-relaxed">
            “Choose a job you love, and you will never have to work a day in
            your life.”
          </p>
          <p className="mt-4 text-Blue-600 font-medium tracking-wide">
            — Confucius
          </p>
        </div>
      </section>

      {/* Enhanced Job Listings */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-blue-500">Browse Jobs</h2>

          {/* Job Listing Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            {/* Filter Tabs */}
            <div className="flex overflow-x-auto pb-1 gap-1 md:gap-0">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === "all"
                    ? "bg-blue-100 text-blue-800 border-b-2 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("all")}
              >
                All Jobs
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === "fullTime"
                    ? "bg-blue-100 text-blue-800 border-b-2 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("fullTime")}
              >
                Full-time
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === "partTime"
                    ? "bg-blue-100 text-blue-800 border-b-2 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("partTime")}
              >
                Part-time
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === "internship"
                    ? "bg-blue-100 text-blue-800 border-b-2 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("internship")}
              >
                Internship
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === "saved"
                    ? "bg-blue-100 text-blue-800 border-b-2 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("saved")}
              >
                Saved{" "}
                <span className="bg-gray-200 text-gray-800 text-xs rounded-full px-2 ml-1">
                  {savedJobs.length}
                </span>
              </button>
            </div>

            <div className="flex items-center gap-4 text-gray-600">
              {/* View Toggle */}
              <div className="hidden md:flex bg-gray-100 rounded-md p-1">
                <button
                  className={`p-1 rounded ${
                    viewMode === "grid" ? "bg-white shadow" : ""
                  }`}
                  onClick={() => setViewMode("grid")}
                  title="Grid View"
                >
                  <Grid size={18} />
                </button>
                <button
                  className={`p-1 rounded ${
                    viewMode === "list" ? "bg-white shadow" : ""
                  }`}
                  onClick={() => setViewMode("list")}
                  title="List View"
                >
                  <List size={18} />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                <div className="relative">
                  <button className="flex items-center text-sm font-medium bg-white border border-gray-200 rounded-md px-3 py-1.5">
                    <ArrowUpDown size={14} className="mr-1 text-gray-500" />
                    Relevance
                    <ChevronDown size={14} className="ml-1 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Showing {filteredJobs.length} job
              {filteredJobs.length !== 1 ? "s" : ""}
              {searchTerm ? ` matching "${searchTerm}"` : ""}
              {location ? ` in "${location}"` : ""}
            </p>
          </div>

          {/* Job Listings */}
          {filteredJobs.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div
                            className={`w-10 h-10 ${job.logoColor} text-white rounded-md flex items-center justify-center font-bold mr-3`}
                          >
                            {job.logo}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">
                              {job.title}
                            </h3>
                            <p className="text-gray-600">{job.company}</p>
                          </div>
                        </div>
                        <button
                          className={`${
                            savedJobs.includes(job.id)
                              ? "text-red-500"
                              : "text-gray-400"
                          } hover:text-red-500 transition-colors`}
                          onClick={() => toggleSaveJob(job.id)}
                          title={
                            savedJobs.includes(job.id)
                              ? "Remove from saved"
                              : "Save job"
                          }
                        >
                          <Heart
                            size={20}
                            fill={
                              savedJobs.includes(job.id)
                                ? "currentColor"
                                : "none"
                            }
                          />
                        </button>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs rounded-full px-2 py-1">
                          {job.type}
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs rounded-full px-2 py-1 flex items-center">
                          <MapPin size={12} className="mr-1" /> {job.location}
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs rounded-full px-2 py-1 flex items-center">
                          <CircleDollarSign size={12} className="mr-1" />{" "}
                          {job.salaryDisplay}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {job.description}
                      </p>

                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock size={14} className="mr-1" /> {job.posted}
                        </span>
                        <div className="flex gap-2">
                          <button
                            className="text-blue-600 text-sm font-medium hover:underline"
                            onClick={() => setActiveJobModal(job.id)}
                          >
                            View Details
                          </button>
                          <button className="text-white bg-blue-600 hover:bg-blue-700 text-sm font-medium px-3 py-1 rounded transition-colors">
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white p-4"
                  >
                    <div className="flex items-start md:items-center gap-4">
                      {/* Logo */}
                      <div
                        className={`w-12 h-12 ${job.logoColor} text-white rounded-md flex items-center justify-center font-bold shrink-0`}
                      >
                        {job.logo}
                      </div>

                      {/* Job details */}
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {job.title}
                            </h3>
                            <p className="text-gray-600">
                              {job.company} · {job.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 mt-2 md:mt-0">
                            <span className="text-xs text-gray-500 flex items-center">
                              <Clock size={14} className="mr-1" /> {job.posted}
                            </span>
                            <button
                              className={`${
                                savedJobs.includes(job.id)
                                  ? "text-red-500"
                                  : "text-gray-400"
                              } hover:text-red-500 transition-colors`}
                              onClick={() => toggleSaveJob(job.id)}
                            >
                              <Heart
                                size={18}
                                fill={
                                  savedJobs.includes(job.id)
                                    ? "currentColor"
                                    : "none"
                                }
                              />
                            </button>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-blue-100 text-blue-800 text-xs rounded-full px-2 py-1">
                            {job.type}
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs rounded-full px-2 py-1 flex items-center">
                            <CircleDollarSign size={12} className="mr-1" />{" "}
                            {job.salaryDisplay}
                          </span>
                          <span className="bg-purple-100 text-purple-800 text-xs rounded-full px-2 py-1">
                            {job.industry}
                          </span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="md:flex items-center gap-2 hidden">
                        <button
                          className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                          onClick={() => setActiveJobModal(job.id)}
                        >
                          View Details
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>

                    {/* Mobile action buttons */}
                    <div className="flex items-center gap-2 mt-3 md:hidden">
                      <button
                        className="flex-1 text-blue-600 border border-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                        onClick={() => setActiveJobModal(job.id)}
                      >
                        View Details
                      </button>
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border">
              <div className="mb-4 text-gray-400">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-medium mb-2">No jobs found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We couldn't find any jobs matching your current filters. Try
                broadening your search or clearing some filters.
              </p>
              <button
                className="mt-4 text-blue-600 font-medium hover:underline"
                onClick={() => {
                  setSearchTerm("");
                  setLocation("");
                  setJobType("all");
                  setExperienceLevel("all");
                  setSalaryRange([0, 100000]);
                  setIndustries([]);
                  setActiveTab("all");
                }}
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Job Detail Modal */}
          {activeJobModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto">
                <div className="p-6">
                  {/* Modal header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 ${
                          jobs.find((j) => j.id === activeJobModal).logoColor
                        } text-white rounded-md flex items-center justify-center font-bold mr-4`}
                      >
                        {jobs.find((j) => j.id === activeJobModal).logo}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">
                          {jobs.find((j) => j.id === activeJobModal).title}
                        </h2>
                        <p className="text-gray-600">
                          {jobs.find((j) => j.id === activeJobModal).company}
                        </p>
                      </div>
                    </div>
                    <button
                      className="text-gray-400 hover:text-gray-600"
                      onClick={() => setActiveJobModal(null)}
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Job details */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm rounded-full px-3 py-1">
                        {jobs.find((j) => j.id === activeJobModal).type}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-sm rounded-full px-3 py-1 flex items-center">
                        <MapPin size={14} className="mr-1" />{" "}
                        {jobs.find((j) => j.id === activeJobModal).location}
                      </span>
                      <span className="bg-green-100 text-green-800 text-sm rounded-full px-3 py-1 flex items-center">
                        <CircleDollarSign size={14} className="mr-1" />{" "}
                        {
                          jobs.find((j) => j.id === activeJobModal)
                            .salaryDisplay
                        }
                      </span>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium text-lg mb-2">Description</h3>
                      <p className="text-gray-700">
                        {jobs.find((j) => j.id === activeJobModal).description}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium text-lg mb-2">Requirements</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {jobs
                          .find((j) => j.id === activeJobModal)
                          .requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" /> Posted{" "}
                        {jobs.find((j) => j.id === activeJobModal).posted}
                      </span>
                      <button
                        className={`flex items-center ${
                          savedJobs.includes(activeJobModal)
                            ? "text-red-500"
                            : "text-gray-500"
                        } hover:text-red-500`}
                        onClick={() => toggleSaveJob(activeJobModal)}
                      >
                        <Heart
                          size={14}
                          className="mr-1"
                          fill={
                            savedJobs.includes(activeJobModal)
                              ? "currentColor"
                              : "none"
                          }
                        />
                        {savedJobs.includes(activeJobModal)
                          ? "Saved"
                          : "Save job"}
                      </button>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 flex-1">
                      Apply Now
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                &lt;
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-blue-600 bg-blue-50 text-blue-600 font-medium">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-500">
                ...
              </span>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                12
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                &gt;
              </button>
            </nav>
          </div>
        </div>
      </section>
      
      

      {/* Categories with Enhanced Design */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-blue-500">
            Browse Job Categories
          </h2>
          <p className="text-gray-600 mb-8">
            Explore opportunities across various industries and disciplines
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-5 transition-all hover:shadow-md hover:translate-y-[-2px] group cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{category.name}</h3>
                      <span className="text-gray-500 text-sm">
                        {category.count} jobs available
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    size={20}
                    className="text-gray-400 group-hover:text-blue-600 transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="text-blue-600 font-medium hover:underline flex items-center mx-auto">
              View all categories <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>
      

      {/* Interactive Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-center text-blue-500">
            Why Students Choose JobBoard
          </h2>
          <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Find jobs that work with your class schedule and career goals
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Schedules</h3>
              <p className="text-gray-600 mb-4">
                Find jobs that work around your class schedule with part-time
                and flexible hour options.
              </p>
              <button className="text-blue-600 text-sm font-medium hover:underline">
                Find flexible jobs
              </button>
            </div>

            <div className="text-center bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Career-Focused Opportunities
              </h3>
              <p className="text-gray-600 mb-4">
                Gain experience relevant to your major with internships and
                entry-level positions.
              </p>
              <button className="text-blue-600 text-sm font-medium hover:underline">
                Browse internships
              </button>
            </div>

            <div className="text-center bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Campus Connections</h3>
              <p className="text-gray-600 mb-4">
                Connect with alumni and companies specifically looking to hire
                from your school.
              </p>
              <button className="text-blue-600 text-sm font-medium hover:underline">
                View campus partners
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to launch your career?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Create a free account to apply for jobs, save your favorite
            listings, and get personalized job recommendations.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Create Account
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              For Employers
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-500 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <CheckCircle size={20} className="mr-2" />
              <span>Join 50,000+ students</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={20} className="mr-2" />
              <span>500+ campus partners</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={20} className="mr-2" />
              <span>Trusted by 2,000+ employers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white font-bold p-2 rounded">
                  JB
                </div>
                <h3 className="text-white font-bold">JobBoard</h3>
              </div>
              <p className="text-sm">
                Connecting college students with meaningful job opportunities
                since 2023.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-400 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Create Resume
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Job Alerts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Career Advice
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Salary Calculator
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">For Employers</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Post a Job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Browse Resumes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Recruiting Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Campus Recruiting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; 2025 JobBoard. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm hover:text-white hover:underline transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm hover:text-white hover:underline transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm hover:text-white hover:underline transition-colors"
              >
                Cookies
              </a>
              <a
                href="#"
                className="text-sm hover:text-white hover:underline transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
