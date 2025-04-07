import axios from "axios";

const AuthService = {
  authenticateUser: async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      );


      // Vérifie si la réponse contient les données attendues
      if (response.data && response.data.body && response.data.body.token) {
        const authToken = response.data.body.token;
        localStorage.setItem("jwtToken", authToken);
        console.log("Auth Token:", authToken);
        return authToken;
      } else {
        throw new Error("Token not found in response.");
      }
      
    } catch (error) {
      console.error("Error during authentication:", error);
      throw error;
    }
  },


  getUserProfile: async () => {
    try {

      const authToken = localStorage.getItem("jwtToken");
      if (!authToken) {
        throw new Error("No auth token found.");
      }

      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.data && response.data.body) {
        console.log(response);
        return response.data.body;
      } else {
        throw new Error("Profile data not found in response.");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  },

  refreshUserProfile: async (token, updateProfile) => {
    try {
      const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      updateProfile,
      {
        headers: { Authorization: `Bearer ${token}`},
      }
      );

    if (response.data && response.data.body) {
      return response.data.body;
    } else {
      throw new Error("Profile update failed.");
    }
  } catch (error) {
    console.error ("Error updating profile:", error);
    throw error;
    }
  },
};

export default AuthService;
