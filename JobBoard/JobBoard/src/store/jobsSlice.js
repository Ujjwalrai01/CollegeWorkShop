import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [
    {
      id: 1,
      title: 'Senior React Developer',
      companyId: 1,
      companyName: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $150,000',
      description: 'Looking for an experienced React developer to join our team...',
      skills: ['React', 'JavaScript', 'Node.js', 'TypeScript'],
      deadline: '2025-08-15',
      status: 'pending',
      applicants: 0,
      postedDate: '2025-07-01',
      postedBy: 1 // recruiter/company ID
    },
    {
      id: 2,
      title: 'UX Designer',
      companyId: 2,
      companyName: 'Green Energy Co',
      location: 'Remote',
      type: 'Contract',
      salary: '$80,000 - $100,000',
      description: 'We need a creative UX designer for our mobile app redesign...',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      deadline: '2025-07-20',
      status: 'approved',
      applicants: 12,
      postedDate: '2025-07-05',
      postedBy: 2
    }
  ],
  loading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    // Recruiter actions
    addJob: (state, action) => {
      const newJob = {
        ...action.payload,
        id: Date.now(),
        status: 'pending',
        applicants: 0,
        postedDate: new Date().toISOString().split('T')[0]
      };
      state.jobs.push(newJob);
    },
    
    updateJob: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.jobs.findIndex(job => job.id === id);
      if (index !== -1) {
        state.jobs[index] = { ...state.jobs[index], ...updates };
      }
    },
    
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter(job => job.id !== action.payload);
    },
    
    // Admin actions
    approveJob: (state, action) => {
      const job = state.jobs.find(j => j.id === action.payload);
      if (job) {
        job.status = 'approved';
      }
    },
    
    rejectJob: (state, action) => {
      const job = state.jobs.find(j => j.id === action.payload);
      if (job) {
        job.status = 'rejected';
      }
    },
    
    // Get jobs by various filters
    getJobsByStatus: (state, action) => {
      return state.jobs.filter(job => job.status === action.payload);
    },
    
    getJobsByCompany: (state, action) => {
      return state.jobs.filter(job => job.companyId === action.payload);
    },
    
    // Update application count
    updateApplicationCount: (state, action) => {
      const { jobId, count } = action.payload;
      const job = state.jobs.find(j => j.id === jobId);
      if (job) {
        job.applicants = count;
      }
    }
  },
});

export const { 
  addJob, 
  updateJob, 
  deleteJob, 
  approveJob, 
  rejectJob, 
  getJobsByStatus, 
  getJobsByCompany,
  updateApplicationCount
} = jobsSlice.actions;

export default jobsSlice.reducer;