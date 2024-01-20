import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addAnnouncement, getAllAnnouncement, } from "../../../../api/Announcement";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const AddAnnouncement = () => {
  const { register, handleSubmit, reset } = useForm();
  const [announcements, setAnnouncements] = useState([]);

  const onSubmit = async (data) => {
    try {
      const response = await addAnnouncement(data);
      console.log("Announcement created successfully", response);
      setAnnouncements((prevAnnouncements) => [response.data, ...prevAnnouncements]);
      reset();
      toast.success("Announcement added successfully");
    } catch (error) {
      console.error("Error creating announcement", error);
    }
  };

  const fetchAllAnnouncements = async () => {
    try {
      const response = await getAllAnnouncement();
      console.log("announcements ", response.data);
      setAnnouncements(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchAllAnnouncements();
  }, []);

  const handleUpdate = (id) => {
    // Handle update logic here
  };

  const handleDeleteAnnouncement = (id) => {
    // Handle delete logic here
  };

  return (
    <div className="pb-10">
      <h2 className="text-center text-2xl font-bold mt-8 flex ml-60 p-4">
        Add Announcements
      </h2>
      <div className="flex">
      <div className="mx-auto w-1/2 bg-green-300 px-10">
        {/* Form for adding announcements */}
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

      {/* Table for displaying announcements */}
      <div>
        <h3 className="text-center font-medium text-xl">
          Total Announcements: {announcements.length}
        </h3>
        <div className="">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announcement, index) => (
                <tr key={announcement._id}>
                  <th>{index + 1}</th>
                  <td>{announcement.title}</td>
                  <td>
                    <button
                      onClick={() => handleUpdate(announcement._id)}
                      className="btn btn-primary"
                    >
                      <FaEdit className="" />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteAnnouncement(announcement._id)}
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

export default AddAnnouncement;
