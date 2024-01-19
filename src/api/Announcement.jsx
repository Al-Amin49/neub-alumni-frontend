import { axiosSecure } from "../utils/axios";

//add annoucement
export const addAnnouncement=async(data)=>{
    try{
        const response= await axiosSecure.post('api/v1/announcements', data);
        return response.data;
      }catch (error) {
        console.log(error);
        throw new error();
      }
}
//get all announcement
export const getAllAnnouncement=async()=>{
    try{
        const response= await axiosSecure.get('api/v1/announcements');
        return response.data;
      }catch (error) {
        console.log(error);
        throw new error();
      }
}
//get all announcement by id
export const getAllAnnouncementById=async(id)=>{
    try{
        const response= await axiosSecure.get(`api/v1/announcements/${id}`);
        return response.data;
      }catch (error) {
        console.log(error);
        throw new error();
      }
}
//update assignment

export const updateAnnounementById=async(id, data)=>{
    try{
        const response= await axiosSecure.get(`api/v1/announcements/${id}`, data);
        return response.data;
      }catch (error) {
        console.log(error);
        throw new error();
      }
}

//delete assignment

export const deleteAnnouncementById=async(id)=>{
    try{
        const response= await axiosSecure.get(`api/v1/announcements/${id}`);
        return response.data;
      }catch (error) {
        console.log(error);
        throw new error();
      }
}