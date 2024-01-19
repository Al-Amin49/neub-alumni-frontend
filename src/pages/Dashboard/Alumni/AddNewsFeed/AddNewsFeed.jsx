import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { AddNewsFeed } from "../../../../api/NewsFeed";
import { useAuth } from "../../../../context/AuthProvider";

const AddNewsFeedPost = () => {
  const { register, handleSubmit, reset } = useForm();
  const [newsfeed, setNewsfeed]= useState([])

  const onSubmit = async (data) => {
    try {
      const response = await AddNewsFeed(data);
      console.log("News feed post created successfully", response);
      setNewsfeed((prevNewsfeed) => [response.data, ...prevNewsfeed]);
      reset();
      toast.success("News feed post added successfully");
    } catch (error) {
      console.error("Error creating news feed post", error);
    }
  };
const {user}=useAuth()
  return (
    <div className="pb-10">
      <h3 className="text-center py-4 font-medium text-primary">
        Add News Feed Post
      </h3>
      <div className="mx-auto w-1/2 bg-green-300 px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("user")}
              value={user._id}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Content*</span>
            </label>
            <textarea
              placeholder="What's on your mind?"
              {...register("content", { required: true })}
              required
              className="textarea textarea-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              {...register("image")}
              className="input input-bordered w-full"
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary my-10">Add Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewsFeedPost;
