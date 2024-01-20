import { useEffect, useState } from "react";
import { getAllAlumniProfiles } from "../../api/Alumni";
import { FcDepartment } from "react-icons/fc";
import { FaEdit, FaGraduationCap, FaTrash } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
const AlumniDirectory = () => {
  const {user}= useAuth()
  const [alumnis, setAlumnis] = useState([]);
  const fetchAllUsersData = async () => {
    try {
      const response = await getAllAlumniProfiles();
      console.log("alumni data ", response.data);
      setAlumnis(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchAllUsersData();
  }, []);
  return (
    <div className=" py-10">
      <div className="flex  justify-center items-center ">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered input-success w-full max-w-xs"
        />
        <Link to="/alumni-directory/addprofile"><button className="btn btn-primary mx-4">Add Your Profile</button></Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {alumnis.map((alumni) => (
          <>
            <div ley={alumni._id}>
              <div className="flex  px-4 py-4 my-4 bg-lime-300 shadow-lg border-2 rounded ">
                <div className="avatar my-4">
                  <div className="w-48 rounded-full">
                    <img src={alumni.imgUrl} />
                  </div>
                </div>
                <div className=" px-10 text-xl font-medium ">
               <div className="flex ">
               <h3 className="flex  items-center"> <MdDriveFileRenameOutline/>Name: {alumni.name}</h3>
              {user && user._id === alumni.user._id &&<>
            
              <FaEdit className="ml-32"/>
               <FaTrash className="ml-5"/>
            
               </>
               }
               </div>
                <p className="flex  items-center"> <FcDepartment/>Department: {alumni.department}</p>
                <p className="flex  items-center"> <FaGraduationCap/>Graduation Year :{alumni.graduationYear}</p>
                <h3 className="font-medium text-2xl text-secondary">Job Info</h3>
                <p>Job title: {alumni.jobTitle}</p>
                <p>Company Name: {alumni.company}</p>
                <p className="flex  items-center"><CiLocationOn/>Location: {alumni.location}</p>
              <div className="text-center m">
              <button className="btn btn-primary my-2 ">
              <FaRegMessage className="text-warning"/> Connect
                </button>
              <Link to={`/alumni-directory/${alumni._id}`}>
              <button className="btn btn-primary my-2 mx-4 ">
              <TbListDetails className="text-warning"/>  Details
                </button>
              </Link>
              </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className=" flex  justify-center items-center">
        
 <button className="btn btn-primary " disabled>Previous</button>
 <p>Page 1 of 4</p>
 <button className="btn btn-primary">Next</button>
  
</div>
    </div>
  );
};

export default AlumniDirectory;
