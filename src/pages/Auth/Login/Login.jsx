import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../../assets/Login/logo2.png";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { loginUser } from "../../../api/Users";
import { useAuth } from "../../../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, reset, register } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const {loading, setLoading, setUser} = useAuth();

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    try {
      setLoading(true);
      const response = await loginUser(userData);

      if (response && response.data) {
        setUser(response.data);
        reset();
        navigate("/");
        window.location.reload();
         toast.success("Login Successfully");
      } else if (response && response.message) {
        console.log("unexpected error from server", response);
        toast.error("User not found. Please check your email and password.");
      }
    } catch (error) {
      console.log("error during login", error);
      toast.error("User not found");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="hero mt-8 ">
        <div className="hero-content  flex-col lg:flex-row ">
          <div className=" ">
            <img src={logoImg} className=" lg:w-full" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full border-2 h-1/2 max-w-md shadow-xl ">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h1 className="text-3xl mt-2 text-center font-bold">Login</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email")}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password*</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered pr-12"
                    {...register("password")}
                    required
                  />
                  <button
                    type="button"
                    className="absolute top-[60%] right-16 transform -translate-y-1/2 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="form-control mt-2 ">
                  <button className="btn btn-primary text-white w-1/2 mx-auto">
                    Login
                  </button>
                </div>
              </form>
              <p className=" text-center">
                New to Neub Alumni{" "}
                <Link className="text-orange-600 font-bold" to="/signup">
                  Sign Up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
