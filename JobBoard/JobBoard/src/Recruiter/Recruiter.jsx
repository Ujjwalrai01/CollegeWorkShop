// import React, { useState } from 'react';
// import { 
//   Building2, 
//   Plus, 
//   Edit3, 
//   Globe, 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Calendar, 
//   DollarSign, 
//   Clock, 
//   CheckCircle, 
//   AlertCircle, 
//   Eye,
//   Users,
//   Briefcase,
//   X
// } from 'lucide-react';

// const RecruiterPanel = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [showJobModal, setShowJobModal] = useState(false);
//   const [showProfileModal, setShowProfileModal] = useState(false);
//   const [editingJob, setEditingJob] = useState(null);

//   // Mock company data
//   const [companyProfile, setCompanyProfile] = useState({
//     name: 'TechCorp Solutions',
//     logo: 'https://via.placeholder.com/80x80?text=TC',
//     website: 'https://techcorp.com',
//     description: 'Leading technology solutions provider specializing in AI and cloud services.',
//     email: 'hr@techcorp.com',
//     phone: '+1 (555) 123-4567',
//     address: 'San Francisco, CA',
//     isVerified: false
//   });

//   // Mock job posts data
//   const [jobPosts, setJobPosts] = useState([
//     {
//       id: 1,
//       title: 'Senior React Developer',
//       location: 'San Francisco, CA',
//       type: 'Full-time',
//       salary: '$120,000 - $150,000',
//       description: 'Looking for an experienced React developer to join our team...',
//       skills: ['React', 'JavaScript', 'Node.js', 'TypeScript'],
//       deadline: '2025-08-15',
//       status: 'approved',
//       applicants: 24,
//       postedDate: '2025-07-01'
//     },
//     {
//       id: 2,
//       title: 'UX Designer',
//       location: 'Remote',
//       type: 'Contract',
//       salary: '$80,000 - $100,000',
//       description: 'We need a creative UX designer for our mobile app redesign...',
//       skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
//       deadline: '2025-07-20',
//       status: 'pending',
//       applicants: 12,
//       postedDate: '2025-07-05'
//     },
//     {
//       id: 3,
//       title: 'DevOps Engineer',
//       location: 'New York, NY',
//       type: 'Full-time',
//       salary: '$110,000 - $140,000',
//       description: 'Join our infrastructure team to help scale our cloud platform...',
//       skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
//       deadline: '2025-08-01',
//       status: 'rejected',
//       applicants: 8,
//       postedDate: '2025-06-28'
//     }
//   ]);

//   const [newJob, setNewJob] = useState({
//     title: '',
//     location: '',
//     type: 'Full-time',
//     salary: '',
//     description: '',
//     skills: [],
//     deadline: ''
//   });

//   const [newSkill, setNewSkill] = useState('');

//   const handleJobSubmit = (e) => {
//     e.preventDefault();
//     const jobData = {
//       ...newJob,
//       id: Date.now(),
//       status: 'pending',
//       applicants: 0,
//       postedDate: new Date().toISOString().split('T')[0]
//     };
    
//     if (editingJob) {
//       setJobPosts(prev => prev.map(job => 
//         job.id === editingJob.id ? { ...jobData, id: editingJob.id } : job
//       ));
//       setEditingJob(null);
//     } else {
//       setJobPosts(prev => [...prev, jobData]);
//     }
    
//     setNewJob({
//       title: '',
//       location: '',
//       type: 'Full-time',
//       salary: '',
//       description: '',
//       skills: [],
//       deadline: ''
//     });
//     setShowJobModal(false);
//   };

//   const handleEditJob = (job) => {
//     setNewJob({ ...job });
//     setEditingJob(job);
//     setShowJobModal(true);
//   };

//   const addSkill = () => {
//     if (newSkill.trim() && !newJob.skills.includes(newSkill.trim())) {
//       setNewJob(prev => ({
//         ...prev,
//         skills: [...prev.skills, newSkill.trim()]
//       }));
//       setNewSkill('');
//     }
//   };

//   const removeSkill = (skillToRemove) => {
//     setNewJob(prev => ({
//       ...prev,
//       skills: prev.skills.filter(skill => skill !== skillToRemove)
//     }));
//   };

//   const getStatusBadge = (status) => {
//     const statusConfig = {
//       approved: { color: 'bg-green-100 text-green-800', icon: CheckCircle, text: 'Approved' },
//       pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock, text: 'Pending Review' },
//       rejected: { color: 'bg-red-100 text-red-800', icon: AlertCircle, text: 'Rejected' }
//     };
    
//     const config = statusConfig[status];
//     const Icon = config.icon;
    
//     return (
//       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
//         <Icon className="w-3 h-3 mr-1" />
//         {config.text}
//       </span>
//     );
//   };

//   const JobModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold text-gray-900">
//               {editingJob ? 'Edit Job Post' : 'Post New Job'}
//             </h2>
//             <button
//               onClick={() => {
//                 setShowJobModal(false);
//                 setEditingJob(null);
//                 setNewJob({
//                   title: '',
//                   location: '',
//                   type: 'Full-time',
//                   salary: '',
//                   description: '',
//                   skills: [],
//                   deadline: ''
//                 });
//               }}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           <form onSubmit={handleJobSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Job Title *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={newJob.title}
//                   onChange={(e) => setNewJob(prev => ({ ...prev, title: e.target.value }))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
//                   placeholder="e.g., Senior Software Engineer"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Location *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={newJob.location}
//                   onChange={(e) => setNewJob(prev => ({ ...prev, location: e.target.value }))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
//                   placeholder="e.g., San Francisco, CA or Remote"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Job Type *
//                 </label>
//                 <select
//                   value={newJob.type}
//                   onChange={(e) => setNewJob(prev => ({ ...prev, type: e.target.value }))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
//                 >
//                   <option value="Full-time">Full-time</option>
//                   <option value="Part-time">Part-time</option>
//                   <option value="Contract">Contract</option>
//                   <option value="Internship">Internship</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Salary Range
//                 </label>
//                 <input
//                   type="text"
//                   value={newJob.salary}
//                   onChange={(e) => setNewJob(prev => ({ ...prev, salary: e.target.value }))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
//                   placeholder="e.g., $80,000 - $120,000"
//                 />
//               </div>

//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Application Deadline *
//                 </label>
//                 <input
//                   type="date"
//                   required
//                   value={newJob.deadline}
//                   onChange={(e) => setNewJob(prev => ({ ...prev, deadline: e.target.value }))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Job Description *
//               </label>
//               <textarea
//                 required
//                 rows={4}
//                 value={newJob.description}
//                 onChange={(e) => setNewJob(prev => ({ ...prev, description: e.target.value }))}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
//                 placeholder="Describe the role, responsibilities, and requirements..."
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Required Skills
//               </label>
//               <div className="flex gap-2 mb-2">
//                 <input
//                   type="text"
//                   value={newSkill}
//                   onChange={(e) => setNewSkill(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
//                   placeholder="Add a skill and press Enter"
//                 />
//                 <button
//                   type="button"
//                   onClick={addSkill}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                   Add
//                 </button>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {newJob.skills.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
//                   >
//                     {skill}
//                     <button
//                       type="button"
//                       onClick={() => removeSkill(skill)}
//                       className="ml-2 text-blue-600 hover:text-blue-800"
//                     >
//                       <X className="w-3 h-3" />
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="flex justify-end space-x-3">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowJobModal(false);
//                   setEditingJob(null);
//                 }}
//                 className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//               >
//                 {editingJob ? 'Update Job' : 'Post Job'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );

//   const ProfileModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold text-gray-900">Edit Company Profile</h2>
//             <button
//               onClick={() => setShowProfileModal(false)}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           <form className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Company Name *
//                 </label>
//                 <input
//                   type="text"
//                   value={companyProfile.name}
//                   onChange={(e) => setCompanyProfile(prev => ({ ...prev, name: e.target.value }))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Website
//                 </label>
//                 <input
//                   type="url"
//                   value={companyProfile.website}
//                   onChange={(e) => setCompanyProfile(prev => ({ ...prev, website: e.target.value }))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   value={companyProfile.email}
//                   onChange={(e) => setCompanyProfile(prev => ({ ...prev, email: e.target.value }))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   value={companyProfile.phone}
//                   onChange={(e) => setCompanyProfile(prev => ({ ...prev, phone: e.target.value }))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   value={companyProfile.address}
//                   onChange={(e) => setCompanyProfile(prev => ({ ...prev, address: e.target.value }))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Company Description
//               </label>
//               <textarea
//                 rows={4}
//                 value={companyProfile.description}
//                 onChange={(e) => setCompanyProfile(prev => ({ ...prev, description: e.target.value }))}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Tell us about your company..."
//               />
//             </div>

//             <div className="flex justify-end space-x-3">
//               <button
//                 type="button"
//                 onClick={() => setShowProfileModal(false)}
//                 className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//               <Building2 className="h-8 w-8 text-blue-600 mr-3" />
//               <h1 className="text-2xl font-bold text-gray-900">Recruiter Dashboard</h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-600">Welcome back, {companyProfile.name}</span>
//               <img 
//                 src={companyProfile.logo} 
//                 alt="Company Logo" 
//                 className="h-8 w-8 rounded-full"
//               />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Navigation Tabs */}
//       <nav className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex space-x-8">
//             {[
//               { id: 'dashboard', label: 'Dashboard', icon: Briefcase },
//               { id: 'jobs', label: 'My Jobs', icon: Users },
//               { id: 'profile', label: 'Company Profile', icon: Building2 }
//             ].map((tab) => {
//               const Icon = tab.icon;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center px-1 py-4 text-sm font-medium border-b-2 ${
//                     activeTab === tab.id
//                       ? 'border-blue-500 text-blue-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   <Icon className="w-4 h-4 mr-2" />
//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {activeTab === 'dashboard' && (
//           <div className="space-y-6">
//             {/* Company Status Card */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <img 
//                     src={companyProfile.logo} 
//                     alt="Company Logo" 
//                     className="h-16 w-16 rounded-lg mr-4"
//                   />
//                   <div>
//                     <h2 className="text-xl font-semibold text-gray-900">{companyProfile.name}</h2>
//                     <p className="text-gray-600">{companyProfile.description}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   {!companyProfile.isVerified && (
//                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
//                       <AlertCircle className="w-4 h-4 mr-1" />
//                       Waiting for admin approval
//                     </span>
//                   )}
//                   <button
//                     onClick={() => setShowProfileModal(true)}
//                     className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                   >
//                     <Edit3 className="w-4 h-4 mr-2" />
//                     Edit Profile
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center">
//                   <div className="p-3 bg-blue-100 rounded-full">
//                     <Briefcase className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div className="ml-4">
//                     <p className="text-sm font-medium text-gray-600">Active Jobs</p>
//                     <p className="text-2xl font-semibold text-gray-900">
//                       {jobPosts.filter(job => job.status === 'approved').length}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center">
//                   <div className="p-3 bg-green-100 rounded-full">
//                     <Users className="h-6 w-6 text-green-600" />
//                   </div>
//                   <div className="ml-4">
//                     <p className="text-sm font-medium text-gray-600">Total Applications</p>
//                     <p className="text-2xl font-semibold text-gray-900">
//                       {jobPosts.reduce((sum, job) => sum + job.applicants, 0)}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg shadow p-6">
//                 <div className="flex items-center">
//                   <div className="p-3 bg-yellow-100 rounded-full">
//                     <Clock className="h-6 w-6 text-yellow-600" />
//                   </div>
//                   <div className="ml-4">
//                     <p className="text-sm font-medium text-gray-600">Pending Review</p>
//                     <p className="text-2xl font-semibold text-gray-900">
//                       {jobPosts.filter(job => job.status === 'pending').length}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
//               <div className="flex flex-wrap gap-4">
//                 <button
//                   onClick={() => setShowJobModal(true)}
//                   className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                   <Plus className="w-5 h-5 mr-2" />
//                   Post New Job
//                 </button>
//                 <button
//                   onClick={() => setShowProfileModal(true)}
//                   className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700"
//                 >
//                   <Edit3 className="w-5 h-5 mr-2" />
//                   Update Profile
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'jobs' && (
//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <h2 className="text-2xl font-bold text-gray-900">My Job Posts</h2>
//               <button
//                 onClick={() => setShowJobModal(true)}
//                 className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//               >
//                 <Plus className="w-4 h-4 mr-2" />
//                 Post New Job
//               </button>
//             </div>

//             <div className="grid gap-6">
//               {jobPosts.map((job) => (
//                 <div key={job.id} className="bg-white rounded-lg shadow p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <div className="flex-1">
//                       <div className="flex items-center mb-2">
//                         <h3 className="text-lg font-semibold text-gray-900 mr-3">{job.title}</h3>
//                         {getStatusBadge(job.status)}
//                       </div>
//                       <div className="flex items-center text-sm text-gray-600 space-x-4 mb-2">
//                         <span className="flex items-center">
//                           <MapPin className="w-4 h-4 mr-1" />
//                           {job.location}
//                         </span>
//                         <span className="flex items-center">
//                           <Briefcase className="w-4 h-4 mr-1" />
//                           {job.type}
//                         </span>
//                         {job.salary && (
//                           <span className="flex items-center">
//                             <DollarSign className="w-4 h-4 mr-1" />
//                             {job.salary}
//                           </span>
//                         )}
//                         <span className="flex items-center">
//                           <Calendar className="w-4 h-4 mr-1" />
//                           Due: {new Date(job.deadline).toLocaleDateString()}
//                         </span>
//                       </div>
//                       <p className="text-gray-700 mb-3">{job.description}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {job.skills.map((skill, index) => (
//                           <span
//                             key={index}
//                             className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-2 ml-4">
//                       <div className="text-right">
//                         <p className="text-sm font-medium text-gray-900">{job.applicants} applicants</p>
//                         <p className="text-xs text-gray-500">Posted {new Date(job.postedDate).toLocaleDateString()}</p>
//                       </div>
//                       <button
//                         onClick={() => handleEditJob(job)}
//                         className="p-2 text-gray-400 hover:text-blue-600"
//                       >
//                         <Edit3 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'profile' && (
//           <div className="space-y-6">
//             <div className="bg-white rounded-lg shadow p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Company Profile</h2>
//                 <button
//                   onClick={() => setShowProfileModal(true)}
//                   className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                   <Edit3 className="w-4 h-4 mr-2" />
//                   Edit Profile
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <div className="flex items-center mb-4">
//                     <img 
//                       src={companyProfile.logo} 
//                       alt="Company Logo" 
//                       className="h-20 w-20 rounded-lg mr-4"
//                     />
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-900">{companyProfile.name}</h3>
//                       {!companyProfile.isVerified && (
//                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
//                           <AlertCircle className="w-3 h-3 mr-1" />
//                           Waiting for admin approval
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                   <p className="text-gray-700 mb-4">{companyProfile.description}</p>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="flex items-center">
//                     <Globe className="w-5 h-5 text-gray-400 mr-3" />
//                     <a 
//                       href={companyProfile.website} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:text-blue-800"
//                     >
//                       {companyProfile.website}
//                     </a>
//                   </div>
//                   <div className="flex items-center">
//                     <Mail className="w-5 h-5 text-gray-400 mr-3" />
//                     <span className="text-gray-700">{companyProfile.email}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Phone className="w-5 h-5 text-gray-400 mr-3" />
//                     <span className="text-gray-700">{companyProfile.phone}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <MapPin className="w-5 h-5 text-gray-400 mr-3" />
//                     <span className="text-gray-700">{companyProfile.address}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Verification Requirements */}
//             {!companyProfile.isVerified && (
//               <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
//                 <div className="flex items-center mb-3">
//                   <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
//                   <h3 className="text-lg font-semibold text-yellow-800">Profile Verification Required</h3>
//                 </div>
//                 <p className="text-yellow-700 mb-3">
//                   Your company profile is currently under review. Please ensure all information is accurate and complete.
//                 </p>
//                 <div className="space-y-2 text-sm text-yellow-700">
//                   <p>• Complete company information including logo, description, and contact details</p>
//                   <p>• Valid business email address</p>
//                   <p>• Professional company website (if available)</p>
//                   <p>• Accurate business address</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </main>

//       {/* Modals */}
//       {showJobModal && <JobModal />}
//       {showProfileModal && <ProfileModal />}
//     </div>
//   );
// };

// export default RecruiterPanel;

















import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Building2, 
  Plus, 
  Edit3, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Eye,
  Users,
  Briefcase,
  X
} from 'lucide-react';
import { 
  addJob, 
  updateJob, 
  deleteJob 
} from '../store/jobsSlice';
import { 
  updateCompany 
} from '../store/companiesSlice';
import { 
  selectCurrentUser,
  selectRecruiterJobs,
  selectAllCompanies 
} from '../utils/selectors';

const RecruiterPanel = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showJobModal, setShowJobModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  // Redux state
  const currentUser = useSelector(selectCurrentUser);
  const jobPosts = useSelector(selectRecruiterJobs);
  const companies = useSelector(selectAllCompanies);
  const companyProfile = companies.find(c => c.id === currentUser?.companyId) || {};

  const [newJob, setNewJob] = useState({
    title: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    skills: [],
    deadline: ''
  });

  const [newSkill, setNewSkill] = useState('');

  const handleJobSubmit = (e) => {
    e.preventDefault();
    const jobData = {
      ...newJob,
      companyId: currentUser.companyId,
      companyName: companyProfile.name,
      postedBy: currentUser.id
    };
    
    if (editingJob) {
      dispatch(updateJob({ id: editingJob.id, ...jobData }));
      setEditingJob(null);
    } else {
      dispatch(addJob(jobData));
    }
    
    setNewJob({
      title: '',
      location: '',
      type: 'Full-time',
      salary: '',
      description: '',
      skills: [],
      deadline: ''
    });
    setShowJobModal(false);
  };

  const handleEditJob = (job) => {
    setNewJob({ ...job });
    setEditingJob(job);
    setShowJobModal(true);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Get form data
    const formData = new FormData(e.target);
    const profileData = {
      id: companyProfile.id,
      name: formData.get('name'),
      website: formData.get('website'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      description: formData.get('description')
    };
    
    dispatch(updateCompany(profileData));
    setShowProfileModal(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !newJob.skills.includes(newSkill.trim())) {
      setNewJob(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setNewJob(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      approved: { color: 'bg-green-100 text-green-800', icon: CheckCircle, text: 'Approved' },
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock, text: 'Pending Review' },
      rejected: { color: 'bg-red-100 text-red-800', icon: AlertCircle, text: 'Rejected' }
    };
    
    const config = statusConfig[status];
    const Icon = config.icon;
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
        <Icon className="w-3 h-3 mr-1" />
        {config.text}
      </span>
    );
  };

  const JobModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {editingJob ? 'Edit Job Post' : 'Post New Job'}
            </h2>
            <button
              onClick={() => {
                setShowJobModal(false);
                setEditingJob(null);
                setNewJob({
                  title: '',
                  location: '',
                  type: 'Full-time',
                  salary: '',
                  description: '',
                  skills: [],
                  deadline: ''
                });
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleJobSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  required
                  value={newJob.title}
                  onChange={(e) => setNewJob(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  placeholder="e.g., Senior Software Engineer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  required
                  value={newJob.location}
                  onChange={(e) => setNewJob(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  placeholder="e.g., San Francisco, CA or Remote"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Type *
                </label>
                <select
                  value={newJob.type}
                  onChange={(e) => setNewJob(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salary Range
                </label>
                <input
                  type="text"
                  value={newJob.salary}
                  onChange={(e) => setNewJob(prev => ({ ...prev, salary: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  placeholder="e.g., $80,000 - $120,000"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Application Deadline *
                </label>
                <input
                  type="date"
                  required
                  value={newJob.deadline}
                  onChange={(e) => setNewJob(prev => ({ ...prev, deadline: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Description *
              </label>
              <textarea
                required
                rows={4}
                value={newJob.description}
                onChange={(e) => setNewJob(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                placeholder="Describe the role, responsibilities, and requirements..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Required Skills
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  placeholder="Add a skill and press Enter"
                />
                <button
                  type="button"
                  onClick={addSkill}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {newJob.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowJobModal(false);
                  setEditingJob(null);
                }}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {editingJob ? 'Update Job' : 'Post Job'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const ProfileModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Edit Company Profile</h2>
            <button
              onClick={() => setShowProfileModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleProfileSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={companyProfile.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  defaultValue={companyProfile.website}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={companyProfile.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  defaultValue={companyProfile.phone}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  defaultValue={companyProfile.address}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Description
              </label>
              <textarea
                rows={4}
                name="description"
                defaultValue={companyProfile.description}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                placeholder="Tell us about your company..."
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowProfileModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Recruiter Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back, {companyProfile.name}</span>
              <img 
                src={companyProfile.logo} 
                alt="Company Logo" 
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: Briefcase },
              { id: 'jobs', label: 'My Jobs', icon: Users },
              { id: 'profile', label: 'Company Profile', icon: Building2 }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-1 py-4 text-sm font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Company Status Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={companyProfile.logo} 
                    alt="Company Logo" 
                    className="h-16 w-16 rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{companyProfile.name}</h2>
                    <p className="text-gray-600">{companyProfile.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {!companyProfile.isVerified && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Waiting for admin approval
                    </span>
                  )}
                  <button
                    onClick={() => setShowProfileModal(true)}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {jobPosts.filter(job => job.status === 'approved').length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Applications</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {jobPosts.reduce((sum, job) => sum + job.applicants, 0)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Pending Review</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {jobPosts.filter(job => job.status === 'pending').length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowJobModal(true)}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Post New Job
                </button>
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  <Edit3 className="w-5 h-5 mr-2" />
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">My Job Posts</h2>
              <button
                onClick={() => setShowJobModal(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Post New Job
              </button>
            </div>

            <div className="grid gap-6">
              {jobPosts.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 mr-3">{job.title}</h3>
                        {getStatusBadge(job.status)}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 space-x-4 mb-2">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        {job.salary && (
                          <span className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </span>
                        )}
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Due: {new Date(job.deadline).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{job.applicants} applicants</p>
                        <p className="text-xs text-gray-500">Posted {new Date(job.postedDate).toLocaleDateString()}</p>
                      </div>
                      <button
                        onClick={() => handleEditJob(job)}
                        className="p-2 text-gray-400 hover:text-blue-600"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Company Profile</h2>
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-4">
                    <img 
                      src={companyProfile.logo} 
                      alt="Company Logo" 
                      className="h-20 w-20 rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{companyProfile.name}</h3>
                      {!companyProfile.isVerified && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Waiting for admin approval
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{companyProfile.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-gray-400 mr-3" />
                    <a 
                      href={companyProfile.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {companyProfile.website}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-700">{companyProfile.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-700">{companyProfile.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-700">{companyProfile.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Requirements */}
            {!companyProfile.isVerified && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                  <h3 className="text-lg font-semibold text-yellow-800">Profile Verification Required</h3>
                </div>
                <p className="text-yellow-700 mb-3">
                  Your company profile is currently under review. Please ensure all information is accurate and complete.
                </p>
                <div className="space-y-2 text-sm text-yellow-700">
                  <p>• Complete company information including logo, description, and contact details</p>
                  <p>• Valid business email address</p>
                  <p>• Professional company website (if available)</p>
                  <p>• Accurate business address</p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Modals */}
      {showJobModal && <JobModal />}
      {showProfileModal && <ProfileModal />}
    </div>
  );
};

export default RecruiterPanel;