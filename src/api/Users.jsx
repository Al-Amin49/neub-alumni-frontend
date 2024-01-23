import { axiosOpen, axiosSecure } from "../utils/axios";

//registered user
export const signUpUser = async (userData) => {
    try {
      const response = await axiosOpen.post("api/v1/users/register", userData);
      const { token } = response.data;
      console.log('token register',token)
      localStorage.setItem("token", token);
      return response;
    } catch (error) {
      console.log(error);
      throw new error();
    }
  };
  
  //loginuser
  export const loginUser = async (userData) => {
    try {
      const response = await axiosOpen.post("api/v1/users/login", userData);
      const { token } = response.data;
      console.log('token login',token)
      localStorage.setItem("token", token);
      return response;
    } catch (error) {
      console.log(error);
      throw new error();
    }
  };

  //user details

export const userDetails=async()=>{
    try{

      const response= await axiosSecure.get('api/v1/users/user-details');
      console.log('Response from userDetails API:', response);
      return response;
    }catch (error) {
      console.log(error);
      throw new error();
    }
  }

  export const SearhAllUsers = async (search) => {
    try {
      const response = await axiosSecure.get(`/api/v1/users?search=${search}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new error();
    }
  };