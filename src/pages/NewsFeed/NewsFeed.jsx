import React, { useEffect, useState } from "react";
import { FaRegThumbsUp, FaRegComment, FaEdit, FaTrash } from "react-icons/fa";
import {
  commentNewsFeedPost,
  deleteNewsFeed,
  editNewsFeed,
  getAllNewsfeed,
  likeNewsFeedPost,
} from "../../api/NewsFeed";
import { useAuth } from "../../context/AuthProvider";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const NewsFeed = () => {
  const { user } = useAuth();
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [newsfeed, setNewsfeed] = useState([]);
  const [editPost, setEditPost]=useState({})
  const [editImageUrl, setImageUrl] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const fetchAllNewsFeedData = async () => {
    try {
      const response = await getAllNewsfeed();
      setNewsfeed(response.data.map((post) => ({ ...post, commentText: "" })));
      console.log("news data ", response.data);
      setNewsfeed(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchAllNewsFeedData();
  }, []);

  const handleLike = async (postId, isLiked) => {
    try {
      await likeNewsFeedPost(postId);
      // Update the newsfeed state to reflect the like on the specific post
      setNewsfeed((prevNewsfeed) =>
        prevNewsfeed.map((post) =>
          post._id === postId
            ? {
                ...post,
                isLiked: !isLiked,
                likes: isLiked ? post.likes - 1 : post.likes + 1,
              }
            : post
        )
      );
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = async (postId, commentText) => {
    try {
      const response = await commentNewsFeedPost(postId, { text: commentText });
      // Update the newsfeed state to reflect the new comment on the specific post
      setNewsfeed((prevNewsfeed) =>
        prevNewsfeed.map((post) =>
          post._id === postId
            ? {
                ...post,
                comments: [...post.comments, response.data],
                commentText: "",
              }
            : post
        )
      );
    } catch (error) {
      console.error("Error commenting on post:", error);
    }
  };

  const handleEditFeed = async (id) => {
    try {
      const updatedPost = await editNewsFeed(id, {
        image: editImageUrl,
        content: editDescription,
      });
  
      console.log('updated post', updatedPost);
    // Find the post that is being edited
    const postToEdit = newsfeed.find((post) => post._id === id);

    // Set initial values for editImageUrl and editDescription
    setImageUrl(postToEdit.image || "");
    setEditDescription(postToEdit.content || "");
      if (updatedPost && updatedPost.data) {
        // Update the local state with the updated feature
        setEditPost((prevEditPost) => {
          const updatedEditPost = { ...prevEditPost };
          updatedEditPost[id] = { ...updatedEditPost[id], ...updatedPost.data };
          return updatedEditPost;
        });
  
        toast.success(`News feed updated successfully`);
        window.location.reload()
        // Close the modal
        document.getElementById("edit_modal").close();
      } else {
        console.error("Error editing feature:", updatedPost);
        toast.error("Error editing news feed post");
      }
    } catch (error) {
      console.error("Error editing feature:", error);
      toast.error("Error editing news feed post");
    }
  };
  
  
  
  
  const handleDeleteFeed = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "to deleted this feed ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
  
      if (result.isConfirmed) {
        await deleteNewsFeed(id);
        // Update the state to remove the deleted post from the UI
        setNewsfeed((prevNewsfeed) => prevNewsfeed.filter((post) => post._id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error deleting post:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while deleting the post.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      {newsfeed.map((post) => (
        <div
          key={post._id}
          className="px-24 py-2  bg-gray-50 dark:bg-gray-900 flex items-center justify-center"
        >
          <div className="px-24  bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
            <div className="flex mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src={post.user.profile}
                alt={`Profile of ${post.user.username}`}
              />
              <div className="ml-2 mt-0.5">
                <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                  {post.user.username}
                </span>
                <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                  {new Date(post.createdAt).toLocaleString()}
                </span>
              </div>
              {user && user._id === post.user._id && (
                <>
                < div className="flex items-center my-2">
            <div className="text-xl font-medium">
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("edit_modal").showModal()
                }
              >
                <FaEdit />
              </button>
              <dialog id="edit_modal" className="modal ">
                <div className="modal-box flex flex-col justify-center items-center">
                  <h3 className="font-bold text-lg">Edit Post</h3>
                  <label className="block border-2  text-sm font-medium text-blue-500">
                    Img Url
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={editImageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  <label className="block text-sm font-medium text-blue-500 mt-4">
                    Content
                  </label>
                  <textarea
                    className="textarea input-bordered"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  ></textarea>
                  <div className="mt-4 flex justify-end">
                    <button className="btn" onClick={()=>handleEditFeed(post._id)}>
                      Save
                    </button>
                    <button
                      className="btn ml-2"
                      onClick={() =>
                        document.getElementById("edit_modal").close()
                      }
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
            <div className="text-xl ml-2">
              <button className="btn" onClick={()=>handleDeleteFeed(post._id)}>
                <RiDeleteBinLine/>
              </button>
            </div>
          </div>
                </>
              )}
            </div>
            <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
              {post.content}
            </p>
            <img src={post.image} alt="" />
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center">
                <button
                  className="flex items-center focus:outline-none"
                  onClick={() => handleLike(post._id, post.isLiked)}
                >
                  <FaRegThumbsUp
                    className={`text-blue-500 ${
                      post.isLiked ? "text-primary" : ""
                    }`}
                  />
                  <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">
                    {post.likes}
                  </span>
                </button>
              </div>
              <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
                <FaRegComment className="mr-1" />
                {post.comments.length} comments
              </div>
            </div>
            <div>
              {post.comments.map((comment) => (
                <>
                  <div className="flex justify-center items-center" key={comment._id}>
                  <div className="avatar ">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                 <div>
                  <p className="font-medium">Jesmine</p>
                 <p>{comment.text}</p>
                 </div>
                  </div>
                </>
              ))}
            </div>
            {/* Comment input and button */}
            <div className="mt-3">
              <input
                type="text"
                placeholder="Add a comment..."
                value={post.commentText || ""}
                onChange={(e) =>
                  setNewsfeed((prevNewsfeed) =>
                    prevNewsfeed.map((prevPost) =>
                      prevPost._id === post._id
                        ? { ...prevPost, commentText: e.target.value }
                        : prevPost
                    )
                  )
                }
                className="border p-2 w-full"
              />
              <button
                onClick={() => handleComment(post._id, post.commentText)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
