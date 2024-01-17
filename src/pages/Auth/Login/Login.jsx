import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/Login/logo2.png"



const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
      
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    return (
        <>
            <div className="hero mt-8 ">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className=" ">
                        <img src={logoImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full h-1/2 max-w-sm shadow-xl ">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                            <h1 className="text-3xl mt-2 text-center font-bold">Login</h1>
                            <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Email" value={formData.email}
                                    className='input input-bordered input-primary w-full'
                                    onChange={handleInputChange} />
                                 <label className="label">
                                    <span className="label-text font-bold">Passoword</span>
                                </label>
                                <input type="text" name="password" placeholder="Password" value={formData.password}
                                    className='input input-bordered input-primary w-full '
                                    onChange={handleInputChange} />
                                    
                            <div className="text-center">
                            <button className='w-full btn  btn-primary' type="submit">Login</button>
                            </div>
                            </form>
                            <p className=' text-center'>New to Neub Alumni <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;