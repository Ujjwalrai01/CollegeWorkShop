import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: 1,
    role: 'recruiter', // 'admin' | 'recruiter'
    companyId: 1,
    name: 'John Doe',
    email: 'john@techcorp.com'
  },
  isAuthenticated: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    
    updateProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    
    switchRole: (state, action) => {
      if (state.user) {
        state.user.role = action.payload;
      }
    }
  },
});

export const { login, logout, updateProfile, switchRole } = userSlice.actions;
export default userSlice.reducer;