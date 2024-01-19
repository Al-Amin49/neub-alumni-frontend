import { axiosOpen } from "../utils/axios";


export const getAllNewsfeed = async () => {
    try {
      const response = await axiosOpen.get("api/v1/newsfeed");
      return response.data;
    } catch (error) {
      console.log(error);
      throw new error();
    }
  };

export const AddNewsFeed=async(data)=>{
    try{
      const response= await axiosOpen.post('api/v1/newsfeed', data);
      return response.data;
    }catch (error) {
      console.log(error);
      throw new error();
    }
  }
  export const editNewsFeed = async (id, updatedData) => {
    try {
      const response = await axiosOpen.patch(`api/v1/newsfeed/${id}`, updatedData);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error to handle it in the calling function
    }
  };
  export const deleteNewsFeed= async(id)=>{
    try{
      const response= await axiosOpen.delete(`api/v1/newsfeed/${id}`);
      return response.data;
    }
    catch(error){
      console.log(error)
    }
  }
export const likeNewsFeedPost=async(id)=>{
    try{
        const response= await axiosOpen.post(`/api/v1/newsfeed/${id}/like`);
        return response.data;
      }catch (error) {
        console.log(error);
       
      }
}
export const commentNewsFeedPost = async (id, commentText) => {
    try {
        const trimmedCommentText = typeof commentText === 'string' ? commentText.trim() : '';
        const commentData = { text: trimmedCommentText }; // Assuming the server expects comment text under the key 'text'
      
      const response = await axiosOpen.post(`/api/v1/newsfeed/${id}/comment`, commentData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('comment', response);
      return response.data;
    } catch (error) {
        if (error.response) {
            // The request was made, but the server responded with a status code
            console.error('Server responded with status code:', error.response.status);
            console.error('Server response data:', error.response.data);
          } else if (error.request) {
            // The request was made, but no response was received
            console.error('No response received from the server');
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
          }
      
          throw error; // Rethrow the error to handle it elsewhere if needed
        }
    }
  
  

  