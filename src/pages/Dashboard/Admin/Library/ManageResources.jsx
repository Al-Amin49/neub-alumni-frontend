import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { AddResources, getAllResource } from "../../../../api/LibraryResource";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageResources = () => {
  const { register, handleSubmit, reset } = useForm();
  const [resources, setResources] = useState([]);

  const onSubmit = async (data) => {
    try {
      const response = await AddResources(data);
      console.log("News feed post created successfully", response);
      setResources((prevResources) => [response.data, ...prevResources]);
      reset();
      toast.success("Resources added successfully");
    } catch (error) {
      console.error("Error creating Resources", error);
    }
  };

  const fetchAllResources = async () => {
    try {
      const response = await getAllResource();
      console.log("resources ", response.data);
      setResources(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchAllResources();
  }, []);

  const handleUpdate=()=>{

  }
  const handleDeleteResource=()=>{

  }

  return (
    <div>
          <h3 className="ml-60  font-medium text-primary">
        Add Resources
      </h3>
    <div className="flex justify-evenly ">
    
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
              <span className="label-text">Category*</span>
            </label>
            <select
              {...register("category", { required: true })}
              required
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Career Development">Career Development</option>
              <option value="Entrepreneurship">Entrepreneurship</option>
              <option value="Algorithm Design">Algorithm Design</option>
              <option value="System Design">System Design</option>
            </select>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Description*</span>
            </label>
            <textarea
              placeholder="What's on your mind?"
              {...register("description", { required: true })}
              required
              className="textarea textarea-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">File Url*</span>
            </label>
            <textarea
              placeholder="What's on your mind?"
              {...register("fileUrl", { required: true })}
              required
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div className="text-center">
            <button className="btn btn-primary my-10">Add Resources</button>
          </div>
        </form>
      </div>

      <div>
       <h3 className="text-center font-medium text-xl "> Total Resources: {resources.length}</h3>
       <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
                <th></th>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
              
            </tr>
          </thead>
          <tbody>
            {resources.map((resource, index) => (
              <tr key={resource._id}>
                <th>{index + 1}</th>
                <td>{resource.title}</td>
               
                <td>
                  <button
                    onClick={() => handleUpdate(resource._id)}
                    className="btn btn-primary"
                  >
                   <FaEdit className=""/>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteResource(resource._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ManageResources;
