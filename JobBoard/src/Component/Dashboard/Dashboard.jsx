// import React from 'react'
// import { Link } from 'react-router-dom';


// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//     <header className="bg-blue-600 text-white p-6 text-2xl font-semibold">Dashboard</header>
//     <main className="flex-grow p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-bold mb-2">Posted Jobs</h3>
//           <p>Manage and view all your posted jobs here.</p>
//         </div>
//         <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-bold mb-2">Applications</h3>
//           <p>Track who applied to your jobs.</p>
//         </div>
//         <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-bold mb-2">Profile</h3>
//           <p>Edit your profile, change settings, and more.</p>
//         </div>
//       </div>
//     </main>
//   </div>
//   )
// }

// export default Dashboard









import React, { useState } from 'react';
import Navbar from "./Navbar"; // Adjust the path if needed
import JobFilter from "./JobFilter"; // Adjust the path if needed
import Footer from "./Footer"; // Adjust the path if needed
import { Search, MapPin, Briefcase, DollarSign, Clock, Calendar, Filter, ChevronDown, Star, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, User, Lock, Menu, X } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Briefcase className="text-blue-600 mr-2" size={28} />
            <span className="text-xl font-bold text-gray-800">JobBoard</span>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:block w-1/3">
            <SearchBar />
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 font-medium">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Register
            </button>
            <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition">
              Post a Job
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="mb-4">
              <SearchBar />
            </div>
            <div className="flex flex-col space-y-3">
              <button className="text-gray-600 hover:text-blue-600 font-medium py-2">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Register
              </button>
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition">
                Post a Job
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// SearchBar Component
const SearchBar = () => {
  return (
    <div className="flex w-full">
      <div className="relative flex-grow mr-1">
        <input 
          type="text" 
          placeholder="Job title or keyword" 
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Briefcase 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
      <div className="relative flex-grow ml-1">
        <input 
          type="text" 
          placeholder="Location" 
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <MapPin 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
      <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        <Search size={20} />
      </button>
    </div>
  );
};

// JobFilter Component
const JobFilter = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Filter size={18} className="mr-2" />
        Filter Jobs
      </h3>
      
      <div className="space-y-4">
        {/* Job Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
          <div className="flex flex-wrap gap-2">
            {['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'].map((type) => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="mr-1 h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">{type}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Salary Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
          <div className="relative">
            <select className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Any Salary</option>
              <option value="0-30000">$0 - $30,000</option>
              <option value="30000-60000">$30,000 - $60,000</option>
              <option value="60000-90000">$60,000 - $90,000</option>
              <option value="90000-120000">$90,000 - $120,000</option>
              <option value="120000+">$120,000+</option>
            </select>
            <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* Experience Level Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
          <div className="relative">
            <select className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Any Experience</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
              <option value="executive">Executive</option>
            </select>
            <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* Date Posted Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date Posted</label>
          <div className="relative">
            <select className="w-full p-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Any Time</option>
              <option value="today">Today</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
            </select>
            <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-2">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

// JobCard Component
const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition">
      <div className="flex justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">{job.title}</h3>
          <p className="text-gray-600">{job.company}</p>
          
          <div className="flex flex-wrap mt-3 text-sm text-gray-500">
            <div className="flex items-center mr-4 mb-2">
              <MapPin size={16} className="mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <DollarSign size={16} className="mr-1" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Briefcase size={16} className="mr-1" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock size={16} className="mr-1" />
              <span>{job.posted}</span>
            </div>
          </div>
        </div>
        
        {job.featured && (
          <div className="hidden md:block">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium flex items-center">
              <Star size={14} className="mr-1" />
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-2">
          {job.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">JobBoard</h3>
            <p className="text-gray-400 mb-4">
              Find your dream job or the perfect candidate with our comprehensive job board platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Post a Job</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Browse Resumes</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Pricing Plans</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Recruitment Services</a>
              </li>
            </ul>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Find Jobs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Create Resume</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Job Alerts</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Career Advice</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-gray-400" />
                <span className="text-gray-400">123 Job Street, Employment City</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-gray-400" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-gray-400" />
                <a href="mailto:contact@jobboard.com" className="text-gray-400 hover:text-white">contact@jobboard.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} JobBoard. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// MainLayout Component
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Home Page Component
const Home = () => {
  // Sample featured jobs
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      posted: "2 days ago",
      featured: true,
      tags: ["React", "TypeScript", "Tailwind"]
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Remote",
      salary: "$90,000 - $110,000",
      type: "Full-time",
      posted: "1 week ago",
      featured: true,
      tags: ["Product", "Agile", "SaaS"]
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Creative Solutions",
      location: "New York, NY",
      salary: "$80,000 - $100,000",
      type: "Full-time",
      posted: "3 days ago",
      featured: false,
      tags: ["Figma", "UI/UX", "Prototyping"]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudSys",
      location: "Seattle, WA",
      salary: "$130,000 - $160,000",
      type: "Full-time",
      posted: "Just now",
      featured: true,
      tags: ["AWS", "Kubernetes", "CI/CD"]
    },
    {
      id: 5,
      title: "Marketing Specialist",
      company: "GrowthHackers",
      location: "Chicago, IL",
      salary: "$70,000 - $85,000",
      type: "Full-time",
      posted: "1 day ago",
      featured: false,
      tags: ["Digital Marketing", "SEO", "Analytics"]
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "DataInsights",
      location: "Boston, MA",
      salary: "$110,000 - $140,000",
      type: "Full-time",
      posted: "2 weeks ago",
      featured: false,
      tags: ["Python", "Machine Learning", "SQL"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job Today</h1>
            <p className="text-xl mb-8">Browse thousands of job listings and find the perfect match for your skills and experience.</p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <SearchBar />
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition flex items-center">
                <User size={18} className="mr-2" />
                For Job Seekers
              </button>
              <button className="bg-blue-600 text-white hover:bg-blue-700 border border-white px-6 py-3 rounded-md font-medium transition flex items-center">
                <Briefcase size={18} className="mr-2" />
                For Employers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Job Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Briefcase size={24} />, name: "Technology", count: 1203 },
              { icon: <DollarSign size={24} />, name: "Finance", count: 873 },
              { icon: <Calendar size={24} />, name: "Marketing", count: 645 },
              { icon: <User size={24} />, name: "Healthcare", count: 923 }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition cursor-pointer">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-gray-500">{category.count} jobs</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Job Listings</h2>
            <a href="#" className="text-blue-600 hover:underline">View All Jobs →</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Search size={32} className="text-blue-600" />,
                title: "Search Jobs", 
                description: "Browse through thousands of full-time or part-time jobs near you." 
              },
              { 
                icon: <User size={32} className="text-blue-600" />,
                title: "Create Profile", 
                description: "Create your profile to showcase your skills and experience to employers." 
              },
              { 
                icon: <Briefcase size={32} className="text-blue-600" />,
                title: "Apply & Get Hired", 
                description: "Apply to jobs that match your skills and get hired by top companies." 
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Job Details Page Component
const JobDetails = () => {
  const job = {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    posted: "2 days ago",
    deadline: "June 15, 2025",
    experience: "3-5 years",
    featured: true,
    tags: ["React", "TypeScript", "Tailwind", "Next.js", "Redux"],
    companyLogo: "/api/placeholder/80/80",
    companyWebsite: "https://techcorp.example.com",
    companySize: "50-100 employees",
    description: "TechCorp is looking for a Senior Frontend Developer to join our growing team. You will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Hooks, and Context API. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.",
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable components and front-end libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Optimize components for maximum performance across a vast array of web-capable devices and browsers",
      "Implement responsive design and ensure cross-browser compatibility",
      "Participate in code reviews and help maintain code quality"
    ],
    requirements: [
      "3+ years experience with React.js and TypeScript",
      "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
      "Experience with React hooks and Redux",
      "Experience with common front-end development tools such as Babel, Webpack, NPM, etc.",
      "Familiarity with newer specifications of ECMAScript",
      "Experience with data structure libraries (e.g., Immutable.js)",
      "Knowledge of modern authorization mechanisms, such as JSON Web Token",
      "Familiarity with modern front-end build pipelines and tools"
    ],
    benefits: [
      "Competitive salary package",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Flexible working hours",
      "Remote work options",
      "Continuous learning and development opportunities",
      "Regular team events and activities"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Job Header */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-start">
              <img 
                src={job.companyLogo} 
                alt={job.company} 
                className="w-16 h-16 rounded mr-4 object-cover"
              />
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
                <div className="flex items-center mt-1">
                  <a href="#" className="text-blue-600 hover:underline">{job.company}</a>
                  {job.featured && (
                    <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium flex items-center">
                      <Star size={14} className="mr-1" />
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap mt-4 text-sm text-gray-600">
                  <div className="flex items-center mr-4 mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center mr-4 mb-2">
                    <DollarSign size={16} className="mr-1" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center mr-4 mb-2">
                    <Briefcase size={16} className="mr-1" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center mr-4 mb-2">
                    <Clock size={16} className="mr-1" />
                    <span>Posted {job.posted}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span>Deadline: {job.deadline}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {job.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium">
                Apply Now
              </button>
              <button className="ml-4 border border-gray-300 text-gray-600 px-6 py-3 rounded-md hover:bg-gray-50 transition font-medium">
                Save Job
              </button>
            </div>
          </div>
          
          {/* Job Description */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <p className="text-gray-700 mb-6">{job.description}</p>
            
            <h3 className="text-lg font-medium mb-3">Responsibilities:</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h3 className="text-lg font-medium mb-3">Requirements:</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h3 className="text-lg font-medium mb-3">Benefits:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {job.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Application Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Apply for this Position</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Company</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                <textarea 
                  rows="4" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Resume/CV</label>
                <div className="flex items-center justify-center w-full">
                  <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide border border-blue-500 border-dashed cursor-pointer hover:bg-blue-50">
                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">Upload your resume</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:block">
          <JobFilter />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;            