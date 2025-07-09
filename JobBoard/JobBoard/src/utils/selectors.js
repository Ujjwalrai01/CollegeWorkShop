import { createSelector } from '@reduxjs/toolkit';

// Company selectors
export const selectAllCompanies = (state) => state.companies.companies;
export const selectPendingCompanies = createSelector(
  [selectAllCompanies],
  (companies) => companies.filter(company => company.status === 'pending')
);
export const selectApprovedCompanies = createSelector(
  [selectAllCompanies],
  (companies) => companies.filter(company => company.status === 'approved')
);

// Job selectors
export const selectAllJobs = (state) => state.jobs.jobs;
export const selectPendingJobs = createSelector(
  [selectAllJobs],
  (jobs) => jobs.filter(job => job.status === 'pending')
);
export const selectApprovedJobs = createSelector(
  [selectAllJobs],
  (jobs) => jobs.filter(job => job.status === 'approved')
);
export const selectJobsByCompany = (companyId) => createSelector(
  [selectAllJobs],
  (jobs) => jobs.filter(job => job.companyId === companyId)
);

// User selectors
export const selectCurrentUser = (state) => state.user.user;
export const selectIsAdmin = createSelector(
  [selectCurrentUser],
  (user) => user?.role === 'admin'
);
export const selectIsRecruiter = createSelector(
  [selectCurrentUser],
  (user) => user?.role === 'recruiter'
);

// Combined selectors
export const selectRecruiterJobs = createSelector(
  [selectAllJobs, selectCurrentUser],
  (jobs, user) => {
    if (user?.role === 'recruiter') {
      return jobs.filter(job => job.companyId === user.companyId);
    }
    return [];
  }
);

export const selectDashboardStats = createSelector(
  [selectAllCompanies, selectAllJobs],
  (companies, jobs) => ({
    totalCompanies: companies.length,
    pendingCompanies: companies.filter(c => c.status === 'pending').length,
    approvedCompanies: companies.filter(c => c.status === 'approved').length,
    totalJobs: jobs.length,
    pendingJobs: jobs.filter(j => j.status === 'pending').length,
    approvedJobs: jobs.filter(j => j.status === 'approved').length,
    totalApplications: jobs.reduce((sum, job) => sum + job.applicants, 0)
  })
);