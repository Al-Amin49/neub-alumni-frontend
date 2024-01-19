
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { addAnnouncement } from "../../../../api/Announcement";



const AddAnnoucement = () => {
  const { register, handleSubmit, reset } = useForm();
  const [announcement, setAnnouncement]= useState([])

  const onSubmit = async (data) => {
    try {
      const response = await addAnnouncement(data);
      console.log("News feed post created successfully", response);
      setAnnouncement((prevAnnouncement) => [response.data, ...prevAnnouncement]);
      reset();
      toast.success("Announement added successfully");
    } catch (error) {
      console.error("Error creating announcement", error);
    }
  };

  return (
    <div className="pb-10">
      <h3 className="text-center py-4 font-medium text-primary">
        Add News Feed Post
      </h3>
      <div className="mx-auto w-1/2 bg-green-300 px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              {...register("title")}
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

          <div className="text-center">
            <button className="btn btn-primary my-10">Add Announcement</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAnnoucement;

