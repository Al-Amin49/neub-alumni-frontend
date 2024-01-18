import { axiosOpen, axiosSecure } from "../utils/axios";


export const getAllAlumniProfiles = async () => {
    try {
      const response = await axiosOpen.get("api/v1/alumni/");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  export const addAlumni = async (data) => {
    try {
      const response = await axiosSecure.post("api/v1/alumni/", data);
      console.log('add alumni', response);
      return response.data;
    } catch (error) {
      console.error('Error adding alumni:', error);
  
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received. Request details:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error during request setup:', error.message);
      }
  
      throw error; // Re-throw the error to propagate it to the calling function
    }
  };
  