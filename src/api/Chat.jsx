import { axiosSecure } from "../utils/axios";

export const createNewChat=async(data)=>{
    try{
        const response= await axiosSecure.post('api/v1/chats', data);
        return response.data;
      }catch (error) {
        console.log(error);
        throw new error();
      }
}
export const getAllChats=async(dta)=>{
    try{
        const response= await axiosSecure.get('api/v1/chats');
        return response.data;
      }catch (error) {
        console.log(error);
        throw new error();
      }
}