import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addAlumni } from "../../api/Alumni";
import { toast } from "react-toastify";

const AddProfile = () => {
    const [alumni, setAlumni]= useState([])
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await addAlumni(data);
      console.log("Alumni profile created successfully", response.data);
     setAlumni(response.data);
     reset();
     toast.success("Add profile successfully")
    } catch (error) {
      console.error("Error creating alumni profile", error);
    }
  };

  return (
    <div className="pb-10">
      <h3 className="text-center py-4 font-medium text-primary ">
        Add Profile
      </h3>
      <div className=" mx-auto w-1/2 bg-green-300 px-10 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text"> Name*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Department*</span>
              </label>
              <input
                type="text"
                placeholder="Department"
                {...register("department", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Graduation Year*</span>
              </label>
              <input
                type="number"
                placeholder="Graduation Year"
                {...register("graduationYear", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Job Title*</span>
              </label>
              <input
                type="text"
                placeholder="Job Title "
                {...register("jobTitle", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Company Name*</span>
              </label>
              <input
                type="text"
                placeholder="Company"
                {...register("company", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Location*</span>
              </label>
              <input
                type="text"
                placeholder="Location "
                {...register("location", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Img URL*</span>
              </label>
              <input
                type="text"
                placeholder="Img URL "
                {...register("imgUrl", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary my-10">Add profile</button>
          </div>
        </form>
      </div>

  
    </div>
  );
};

export default AddProfile;
