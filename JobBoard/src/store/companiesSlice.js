import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  companies: [
    {
      id: 1,
      name: 'TechCorp Solutions',
      email: 'hr@techcorp.com',
      logo: 'https://via.placeholder.com/80x80?text=TC',
      description: 'Leading technology solutions provider specializing in AI and cloud services.',
      website: 'https://techcorp.com',
      phone: '+1 (555) 123-4567',
      address: 'San Francisco, CA',
      status: 'pending',
      submittedDate: '2025-01-15',
      isVerified: false
    },
    {
      id: 2,
      name: 'Green Energy Co',
      email: 'contact@greenenergy.com',
      logo: 'https://via.placeholder.com/80x80?text=GE',
      description: 'Sustainable energy solutions for a better tomorrow.',
      website: 'https://greenenergy.com',
      phone: '+1 (555) 987-6543',
      address: 'Austin, TX',
      status: 'approved',
      submittedDate: '2025-01-10',
      isVerified: true
    }
  ],
  loading: false,
  error: null,
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    // Add new company (recruiter registration)
    addCompany: (state, action) => {
      const newCompany = {
        ...action.payload,
        id: Date.now(),
        status: 'pending',
        submittedDate: new Date().toISOString().split('T')[0],
        isVerified: false
      };
      state.companies.push(newCompany);
    },
    
    // Update company profile
    updateCompany: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.companies.findIndex(company => company.id === id);
      if (index !== -1) {
        state.companies[index] = { ...state.companies[index], ...updates };
      }
    },
    
    // Admin actions
    approveCompany: (state, action) => {
      const company = state.companies.find(c => c.id === action.payload);
      if (company) {
        company.status = 'approved';
        company.isVerified = true;
      }
    },
    
    rejectCompany: (state, action) => {
      const company = state.companies.find(c => c.id === action.payload);
      if (company) {
        company.status = 'rejected';
        company.isVerified = false;
      }
    },
    
    // Get companies by status
    getCompaniesByStatus: (state, action) => {
      return state.companies.filter(company => company.status === action.payload);
    }
  },
});

export const { 
  addCompany, 
  updateCompany, 
  approveCompany, 
  rejectCompany, 
  getCompaniesByStatus 
} = companiesSlice.actions;

export default companiesSlice.reducer;