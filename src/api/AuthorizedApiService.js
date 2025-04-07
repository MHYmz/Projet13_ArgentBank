import axios from "axios";

async function retrieveProtectedData() {
  try {
    const authToken = localStorage.getItem("jwtToken");
    if (!authToken) {
      throw new Error ("No auth token found.");
    }

    const response = await axios.get("http://localhost:3001/api/v1/protected", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error retrieving protected data:", error);
  }
}

export default retrieveProtectedData;
