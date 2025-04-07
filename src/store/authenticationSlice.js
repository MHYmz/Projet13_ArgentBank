import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../api/AuthService";

// Thunk pour la connexion de l'utilisateur
export const authenticateUser = createAsyncThunk(
  "authentication/authenticateUser",
  async ({ email, password }) => {
    const token = await AuthService.authenticateUser(email, password);
    return token;
  }
);

// Thunk pour récupérer le profil utilisateur
export const getUserProfile = createAsyncThunk(
  "authentication/getUserProfile",
  async () => {
    const userProfile = await AuthService.getUserProfile();
    return userProfile;
  }
);

// Thunk pour mettre à jour le profil utilisateur dans l'API
export const refreshUserProfile = createAsyncThunk( 
  "authentication/refreshUserProfile",
  async ({ token, updatedProfile}) => {
    const updateUser = await AuthService.refreshUserProfile(token, updatedProfile);
    return updateUser
  }
)

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    userProfile: null,
    loginError: null,
    isAuthenticated: false,
    isLoading : false,
  },

  reducers: {
    logoutUser: (state) => {
      state.userProfile = null;
      state.isAuthenticated = false;
    },
  },
    updateUserName: (state, action) => {
      if (state.userProfile) {
      state.userProfile.firstName = action.payload.firstName;
      state.userProfile.lastName = action.payload.lastName;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loginError = action.error.message;
        state.isLoading = false;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.loginError = action.error.message;
        state.isLoading = false;
      })
      .addCase(refreshUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
        state.isLoading = false;
      })
      .addCase(refreshUserProfile.rejected, (state, action) => {
        state.loginError = action.error.message;
        state.isLoading = false;
      });
  }

});

export const { logoutUser } = authenticationSlice.actions;
export default authenticationSlice.reducer;
