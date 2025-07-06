import React, { useState } from 'react';
import { 
  Building2, 
  Briefcase, 
  CheckCircle, 
  Settings, 
  X, 
  Check, 
  Calendar,
  Mail,
  MapPin,
  Eye,
  Users,
  Clock
} from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('companies');
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: 'TechCorp Solutions',
      email: 'hr@techcorp.com',
      logo: '🏢',
      description: 'Leading technology solutions provider specializing in cloud infrastructure and AI-driven applications.',
      status: 'pending',
      submittedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Green Energy Co',
      email: 'contact@greenenergy.com',
      logo: '🌱',
      description: 'Sustainable energy solutions for a better tomorrow. Focus on solar and wind power installations.',
      status: 'pending',
      submittedDate: '2024-01-14'
    },
    {
      id: 3,
      name: 'DataFlow Analytics',
      email: 'info@dataflow.com',
      logo: '📊',
      description: 'Big data analytics and business intelligence platform helping companies make data-driven decisions.',
      status: 'pending',
      submittedDate: '2024-01-13'
    }
  ]);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      postedDate: '2024-01-15',
      status: 'pending',
      salary: '$120k - $160k',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Green Energy Co',
      location: 'Remote',
      postedDate: '2024-01-14',
      status: 'pending',
      salary: '$80k - $110k',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'DataFlow Analytics',
      location: 'New York, NY',
      postedDate: '2024-01-13',
      status: 'pending',
      salary: '$100k - $140k',
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'TechCorp Solutions',
      location: 'Austin, TX',
      postedDate: '2024-01-12',
      status: 'pending',
      salary: '$90k - $130k',
      type: 'Contract'
    }
  ]);

  const handleCompanyAction = (id, action) => {
    setCompanies(companies.map(company => 
      company.id === id ? { ...company, status: action } : company
    ));
  };

  const handleJobAction = (id, action) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, status: action } : job
    ));
  };

  const sidebarItems = [
    { id: 'companies', label: 'Pending Companies', icon: Building2, count: companies.filter(c => c.status === 'pending').length },
    { id: 'jobs', label: 'Pending Jobs', icon: Briefcase, count: jobs.filter(j => j.status === 'pending').length },
    { id: 'approved', label: 'Approved', icon: CheckCircle },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const StatusBadge = ({ status }) => {
    const statusStyles = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      approved: 'bg-green-100 text-green-800 border-green-200',
      rejected: 'bg-red-100 text-red-800 border-red-200'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const ActionButtons = ({ onApprove, onReject, status }) => (
    <div className="flex gap-2">
      {status === 'pending' && (
        <>
          <button
            onClick={onApprove}
            className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
          >
            <Check className="w-4 h-4" />
            Approve
          </button>
          <button
            onClick={onReject}
            className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
          >
            <X className="w-4 h-4" />
            Reject
          </button>
        </>
      )}
      {status !== 'pending' && (
        <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium">
          <Eye className="w-4 h-4" />
          View
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Job Board Admin</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your platform</p>
        </div>
        
        <nav className="mt-6">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-6 py-3 text-left transition-colors duration-200 ${
                activeTab === item.id 
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.count !== undefined && (
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  item.count > 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {activeTab === 'companies' && 'Pending Company Profiles'}
            {activeTab === 'jobs' && 'Pending Job Postings'}
            {activeTab === 'approved' && 'Approved Content'}
            {activeTab === 'settings' && 'Settings'}
          </h2>
          <p className="text-gray-600 mt-2">
            {activeTab === 'companies' && 'Review and approve company registrations'}
            {activeTab === 'jobs' && 'Review and approve job postings'}
            {activeTab === 'approved' && 'View all approved companies and jobs'}
            {activeTab === 'settings' && 'Configure your admin preferences'}
          </p>
        </div>

        {/* Companies Tab */}
        {activeTab === 'companies' && (
          <div className="space-y-6">
            {companies.filter(c => c.status === 'pending').map((company) => (
              <div key={company.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{company.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                        <StatusBadge status={company.status} />
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{company.email}</span>
                        <span className="text-gray-400">•</span>
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Submitted {company.submittedDate}</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{company.description}</p>
                    </div>
                  </div>
                  <ActionButtons
                    onApprove={() => handleCompanyAction(company.id, 'approved')}
                    onReject={() => handleCompanyAction(company.id, 'rejected')}
                    status={company.status}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Jobs Tab */}
        {activeTab === 'jobs' && (
          <div className="space-y-6">
            {jobs.filter(j => j.status === 'pending').map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <StatusBadge status={job.status} />
                    </div>
                    <div className="flex items-center gap-4 text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm font-medium">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Posted {job.postedDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{job.type}</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">{job.salary}</span>
                    </div>
                  </div>
                  <ActionButtons
                    onApprove={() => handleJobAction(job.id, 'approved')}
                    onReject={() => handleJobAction(job.id, 'rejected')}
                    status={job.status}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Approved Tab */}
        {activeTab === 'approved' && (
          <div className="space-y-8">
            {/* Approved Companies */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Approved Companies ({companies.filter(c => c.status === 'approved').length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companies.filter(c => c.status === 'approved').map((company) => (
                  <div key={company.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{company.logo}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{company.name}</h4>
                        <p className="text-sm text-gray-600">{company.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Approved Jobs */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Approved Jobs ({jobs.filter(j => j.status === 'approved').length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.filter(j => j.status === 'approved').map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{job.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Admin Settings</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Auto-approve companies with verified emails
                </label>
                <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email notifications for new submissions
                </label>
                <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" defaultChecked />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum job postings per company
                </label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue="10" />
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;





























// import React, { useState } from 'react';
// import { 
//   Building2, 
//   Briefcase, 
//   CheckCircle, 
//   Settings, 
//   X, 
//   Check, 
//   Calendar,
//   Mail,
//   MapPin,
//   Eye,
//   Users,
//   Clock,
//   TrendingUp,
//   DollarSign,
//   Star,
//   Edit,
//   Trash2,
//   Plus,
//   Search,
//   Filter,
//   MoreHorizontal
// } from 'lucide-react';

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [companies, setCompanies] = useState([
//     {
//       id: 1,
//       name: 'TechCorp Solutions',
//       email: 'hr@techcorp.com',
//       logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=40&h=40&fit=crop&crop=center',
//       description: 'Leading technology solutions provider',
//       status: 'pending',
//       submittedDate: '08/25/2023',
//       location: 'Lahore, PK'
//     },
//     {
//       id: 2,
//       name: 'Green Energy Co',
//       email: 'contact@greenenergy.com',
//       logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=40&h=40&fit=crop&crop=center',
//       description: 'Sustainable energy solutions',
//       status: 'approved',
//       submittedDate: '08/24/2023',
//       location: 'Karachi, PK'
//     },
//     {
//       id: 3,
//       name: 'DataFlow Analytics',
//       email: 'info@dataflow.com',
//       logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=40&h=40&fit=crop&crop=center',
//       description: 'Big data analytics platform',
//       status: 'pending',
//       submittedDate: '08/23/2023',
//       location: 'Islamabad, PK'
//     }
//   ]);

//   const [jobs, setJobs] = useState([
//     {
//       id: 1,
//       title: 'Senior Full Stack Developer',
//       company: 'TechCorp Solutions',
//       location: 'Lahore, PK',
//       postedDate: '08/25/2023',
//       status: 'active',
//       applications: '12+ Applied',
//       salary: '$120k - $160k',
//       type: 'Full-time'
//     },
//     {
//       id: 2,
//       title: 'UX/UI Designer',
//       company: 'Green Energy Co',
//       location: 'Remote',
//       postedDate: '08/24/2023',
//       status: 'active',
//       applications: '8+ Applied',
//       salary: '$80k - $110k',
//       type: 'Full-time'
//     },
//     {
//       id: 3,
//       title: 'Data Scientist',
//       company: 'DataFlow Analytics',
//       location: 'Islamabad, PK',
//       postedDate: '08/23/2023',
//       status: 'pending',
//       applications: '15+ Applied',
//       salary: '$100k - $140k',
//       type: 'Full-time'
//     }
//   ]);

//   const [applicants] = useState([
//     {
//       id: 1,
//       name: 'Jane Cooper',
//       position: 'UI Designer',
//       experience: '5 Yrs Exp',
//       appliedDate: '08/25/2023',
//       status: 'approved',
//       avatar: 'https://images.unsplash.com/photo-1494790108755-2616b04cd25b?w=40&h=40&fit=crop&crop=center',
//       location: 'Lahore, PK'
//     },
//     {
//       id: 2,
//       name: 'Esther Howard',
//       position: 'UI Designer',
//       experience: '8 Yrs Exp',
//       appliedDate: '08/25/2023',
//       status: 'pending',
//       avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=center',
//       location: 'Lahore, PK'
//     },
//     {
//       id: 3,
//       name: 'Cameron',
//       position: 'UI Designer',
//       experience: '6 Yrs Exp',
//       appliedDate: '08/25/2023',
//       status: 'pending',
//       avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=center',
//       location: 'Lahore, PK'
//     },
//     {
//       id: 4,
//       name: 'Brooklyn',
//       position: 'UI Designer',
//       experience: '4 Yrs Exp',
//       appliedDate: '08/25/2023',
//       status: 'approved',
//       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=center',
//       location: 'Lahore, PK'
//     }
//   ]);

//   const handleCompanyAction = (id, action) => {
//     setCompanies(companies.map(company => 
//       company.id === id ? { ...company, status: action } : company
//     ));
//   };

//   const handleJobAction = (id, action) => {
//     setJobs(jobs.map(job => 
//       job.id === id ? { ...job, status: action } : job
//     ));
//   };

//   const sidebarItems = [
//     { id: 'overview', label: 'Overview', icon: TrendingUp },
//     { id: 'companies', label: 'Company Profile', icon: Building2 },
//     { id: 'jobs', label: 'Post A Jobs', icon: Briefcase },
//     { id: 'candidates', label: 'All Candidates', icon: Users },
//     { id: 'shortlist', label: 'Shortlist Candidates', icon: CheckCircle },
//     { id: 'joblists', label: 'Job Lists', icon: Eye },
//     { id: 'invoices', label: 'Invoices', icon: DollarSign },
//     { id: 'subscription', label: 'Subscription', icon: Settings }
//   ];

//   const StatusBadge = ({ status }) => {
//     const statusStyles = {
//       pending: 'bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm',
//       approved: 'bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm',
//       active: 'bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm',
//       rejected: 'bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm'
//     };

//     return (
//       <span className={statusStyles[status]}>
//         {status.charAt(0).toUpperCase() + status.slice(1)}
//       </span>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-sm border-r border-gray-200">
//         <div className="p-6">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-sm">R</span>
//             </div>
//             <span className="text-xl font-bold text-gray-800">ReelMySkill</span>
//           </div>
//         </div>
        
//         <nav className="mt-2">
//           {sidebarItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors duration-200 ${
//                 activeTab === item.id 
//                   ? 'bg-teal-50 text-teal-700 border-r-2 border-teal-500' 
//                   : 'text-gray-600 hover:bg-gray-50'
//               }`}
//             >
//               <item.icon className="w-5 h-5" />
//               <span className="font-medium">{item.label}</span>
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200 px-8 py-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">
//                 {activeTab === 'overview' && 'Welcome, Admin Panel'}
//                 {activeTab === 'companies' && 'Company Management'}
//                 {activeTab === 'jobs' && 'Job Management'}
//                 {activeTab === 'candidates' && 'All Candidates'}
//               </h1>
//               <p className="text-gray-600 mt-1">Thursday, 17 May 2023</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                 See Recent Jobs Ads
//               </button>
//               <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
//                 Add New Ad Jobs
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="p-8">
//           {/* Overview Tab */}
//           {activeTab === 'overview' && (
//             <div className="space-y-8">
//               {/* Stats Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-600 text-sm">Total Jobs</p>
//                       <p className="text-2xl font-bold text-purple-600 mt-1">40,55K</p>
//                     </div>
//                     <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//                       <Briefcase className="w-6 h-6 text-purple-600" />
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-600 text-sm">Applied Candidates</p>
//                       <p className="text-2xl font-bold text-blue-600 mt-1">1,256</p>
//                     </div>
//                     <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                       <Users className="w-6 h-6 text-blue-600" />
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-600 text-sm">Total Credit Left</p>
//                       <p className="text-2xl font-bold text-pink-600 mt-1">$39.99</p>
//                     </div>
//                     <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
//                       <DollarSign className="w-6 h-6 text-pink-600" />
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-gray-600 text-sm">Shortlist Candidates</p>
//                       <p className="text-2xl font-bold text-teal-600 mt-1">1,450</p>
//                     </div>
//                     <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
//                       <CheckCircle className="w-6 h-6 text-teal-600" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Recent Applicants & Applicant Review */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Recent Applicants */}
//                 <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//                   <div className="p-6 border-b border-gray-200">
//                     <h3 className="text-lg font-semibold text-gray-900">Recent Applicants</h3>
//                   </div>
//                   <div className="overflow-x-auto">
//                     <table className="w-full">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidates</th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {applicants.slice(0, 3).map((applicant) => (
//                           <tr key={applicant.id} className="hover:bg-gray-50">
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div className="flex items-center">
//                                 <div className="flex-shrink-0 h-10 w-10 relative">
//                                   <img className="h-10 w-10 rounded-full" src={applicant.avatar} alt="" />
//                                   {applicant.status === 'approved' && (
//                                     <Star className="absolute -top-1 -left-1 w-4 h-4 text-yellow-400 fill-current" />
//                                   )}
//                                 </div>
//                                 <div className="ml-4">
//                                   <div className="text-sm font-medium text-gray-900">{applicant.name}</div>
//                                   <div className="text-sm text-gray-500">{applicant.location}</div>
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <StatusBadge status={applicant.status} />
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                               {applicant.appliedDate}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                               <div className="flex items-center gap-2">
//                                 <button className="text-green-600 hover:text-green-900">
//                                   <Check className="w-4 h-4" />
//                                 </button>
//                                 <button className="text-blue-600 hover:text-blue-900">
//                                   <Eye className="w-4 h-4" />
//                                 </button>
//                                 <button className="text-red-600 hover:text-red-900">
//                                   <Trash2 className="w-4 h-4" />
//                                 </button>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>

//                 {/* Applicant Review */}
//                 <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//                   <div className="p-6 border-b border-gray-200">
//                     <h3 className="text-lg font-semibold text-gray-900">Applicant Review</h3>
//                   </div>
//                   <div className="p-6">
//                     <div className="space-y-4">
//                       {applicants.map((applicant) => (
//                         <div key={applicant.id} className="flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             <img className="h-10 w-10 rounded-full" src={applicant.avatar} alt="" />
//                             <div>
//                               <div className="font-medium text-gray-900">{applicant.name}</div>
//                               <div className="text-sm text-gray-500">{applicant.position} • {applicant.experience}</div>
//                             </div>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             {applicant.status === 'approved' ? (
//                               <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">ACCEPT</span>
//                             ) : (
//                               <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">REJECT</span>
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Recent Job Listing */}
//               <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//                 <div className="p-6 border-b border-gray-200">
//                   <h3 className="text-lg font-semibold text-gray-900">Recent Job Listing</h3>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applications</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {jobs.slice(0, 3).map((job) => (
//                         <tr key={job.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div>
//                               <div className="text-sm font-medium text-gray-900">{job.title}</div>
//                               <div className="text-sm text-gray-500">{job.company}</div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="text-sm text-gray-900">{job.applications}</span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <StatusBadge status={job.status} />
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                             <div className="flex items-center gap-2">
//                               <button className="text-blue-600 hover:text-blue-900">
//                                 <Eye className="w-4 h-4" />
//                               </button>
//                               <button className="text-gray-600 hover:text-gray-900">
//                                 <Edit className="w-4 h-4" />
//                               </button>
//                               <button className="text-red-600 hover:text-red-900">
//                                 <Trash2 className="w-4 h-4" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Companies Tab */}
//           {activeTab === 'companies' && (
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//               <div className="p-6 border-b border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-semibold text-gray-900">Pending Company Profiles</h3>
//                   <div className="flex items-center gap-3">
//                     <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                       <Filter className="w-4 h-4" />
//                     </button>
//                     <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
//                       <Plus className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted Date</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {companies.map((company) => (
//                       <tr key={company.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="flex-shrink-0 h-10 w-10 relative">
//                               <img className="h-10 w-10 rounded-full" src={company.logo} alt="" />
//                               {company.status === 'approved' && (
//                                 <Star className="absolute -top-1 -left-1 w-4 h-4 text-yellow-400 fill-current" />
//                               )}
//                             </div>
//                             <div className="ml-4">
//                               <div className="text-sm font-medium text-gray-900">{company.name}</div>
//                               <div className="text-sm text-gray-500">{company.location}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <StatusBadge status={company.status} />
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {company.submittedDate}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                           <div className="flex items-center gap-2">
//                             {company.status === 'pending' && (
//                               <>
//                                 <button 
//                                   onClick={() => handleCompanyAction(company.id, 'approved')}
//                                   className="text-green-600 hover:text-green-900"
//                                 >
//                                   <Check className="w-4 h-4" />
//                                 </button>
//                                 <button 
//                                   onClick={() => handleCompanyAction(company.id, 'rejected')}
//                                   className="text-red-600 hover:text-red-900"
//                                 >
//                                   <X className="w-4 h-4" />
//                                 </button>
//                               </>
//                             )}
//                             <button className="text-blue-600 hover:text-blue-900">
//                               <Eye className="w-4 h-4" />
//                             </button>
//                             <button className="text-red-600 hover:text-red-900">
//                               <Trash2 className="w-4 h-4" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {/* Jobs Tab */}
//           {activeTab === 'jobs' && (
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//               <div className="p-6 border-b border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-semibold text-gray-900">Job Listings Management</h3>
//                   <div className="flex items-center gap-3">
//                     <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                       <Filter className="w-4 h-4" />
//                     </button>
//                     <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
//                       <Plus className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applications</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {jobs.map((job) => (
//                       <tr key={job.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div>
//                             <div className="text-sm font-medium text-gray-900">{job.title}</div>
//                             <div className="text-sm text-gray-500">{job.company}</div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className="text-sm text-gray-900">{job.applications}</span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <StatusBadge status={job.status} />
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                           <div className="flex items-center gap-2">
//                             {job.status === 'pending' && (
//                               <>
//                                 <button 
//                                   onClick={() => handleJobAction(job.id, 'active')}
//                                   className="text-green-600 hover:text-green-900"
//                                 >
//                                   <Check className="w-4 h-4" />
//                                 </button>
//                                 <button 
//                                   onClick={() => handleJobAction(job.id, 'rejected')}
//                                   className="text-red-600 hover:text-red-900"
//                                 >
//                                   <X className="w-4 h-4" />
//                                 </button>
//                               </>
//                             )}
//                             <button className="text-blue-600 hover:text-blue-900">
//                               <Eye className="w-4 h-4" />
//                             </button>
//                             <button className="text-gray-600 hover:text-gray-900">
//                               <Edit className="w-4 h-4" />
//                             </button>
//                             <button className="text-red-600 hover:text-red-900">
//                               <Trash2 className="w-4 h-4" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {/* Candidates Tab */}
//           {activeTab === 'candidates' && (
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//               <div className="p-6 border-b border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-lg font-semibold text-gray-900">All Candidates</h3>
//                   <div className="flex items-center gap-3">
//                     <div className="relative">
//                       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                       <input
//                         type="text"
//                         placeholder="Search candidates..."
//                         className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                       />
//                     </div>
//                     <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                       <Filter className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {applicants.map((applicant) => (
//                       <tr key={applicant.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="flex-shrink-0 h-10 w-10 relative">
//                               <img className="h-10 w-10 rounded-full" src={applicant.avatar} alt="" />
//                               {applicant.status === 'approved' && (
//                                 <Star className="absolute -top-1 -left-1 w-4 h-4 text-yellow-400 fill-current" />
//                               )}
//                             </div>
//                             <div className="ml-4">
//                               <div className="text-sm font-medium text-gray-900">{applicant.name}</div>
//                               <div className="text-sm text-gray-500">{applicant.location}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">{applicant.position}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">{applicant.experience}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <StatusBadge status={applicant.status} />
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                           <div className="flex items-center gap-2">
//                             <button className="text-blue-600 hover:text-blue-900">
//                               <Eye className="w-4 h-4" />
//                             </button>
//                             <button className="text-green-600 hover:text-green-900">
//                               <Check className="w-4 h-4" />
//                             </button>
//                             <button className="text-red-600 hover:text-red-900">
//                               <X className="w-4 h-4" />
//                             </button>
//                             <button className="text-gray-600 hover:text-gray-900">
//                               <MoreHorizontal className="w-4 h-4" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {/* Other tabs placeholder */}
//           {(activeTab === 'shortlist' || activeTab === 'joblists' || activeTab === 'invoices' || activeTab === 'subscription') && (
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
//               <div className="text-gray-400 mb-4">
//                 <Settings className="w-16 h-16 mx-auto" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
//               </h3>
//               <p className="text-gray-600">
//                 This section is under development. More features coming soon.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;