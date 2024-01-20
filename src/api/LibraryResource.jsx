import { axiosOpen, axiosSecure } from "../utils/axios";


export const getAllResource = async () => {
    try {
      const response = await axiosOpen.get("api/v1/resources");
      return response.data;
    } catch (error) {
      console.log(error);
      throw new error();
    }
  };

export const AddResources=async(data)=>{
    try{
      const response= await axiosSecure.post('api/v1/resources', data);
      return response.data;
    }catch (error) {
      console.log(error);
      throw new error();
    }
  }
export const updateResources=async(id, data)=>{
    try{
      const response= await axiosSecure.patch(`api/v1/resources/${id}`, data);
      return response.data;
    }catch (error) {
      console.log(error);
      throw new error();
    }
  }
export const deleteResources=async(id)=>{
    try{
      const response= await axiosSecure.delete(`api/v1/resources/${id}`);
      return response.data;
    }catch (error) {
      console.log(error);
      throw new error();
    }
  }