import React, { useEffect, useState } from "react";
import { FaRegThumbsUp, FaRegComment, FaEdit, FaTrash } from "react-icons/fa";
import {
  commentNewsFeedPost,
  getAllNewsfeed,
  likeNewsFeedPost,
} from "../../api/NewsFeed";
import { useAuth } from "../../context/AuthProvider";

const NewsFeed = () => {
  const { user } = useAuth();
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [newsfeed, setNewsfeed] = useState([]);

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

  return (
    <div>
      {newsfeed.map((post) => (
        <div
          key={post._id}
          className="px-24 py-8  bg-gray-50 dark:bg-gray-900 flex items-center justify-center"
        >
          <div className="px-24 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
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
                  <FaEdit  className="mx-4"/>
                  <FaTrash />
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
