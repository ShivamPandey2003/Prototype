import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ClosedEye, Eye } from "../assets/Icons/Icons";
import { useDispatch } from "react-redux";
import { login } from "../stores/reducers/authSlice";

export interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [isShow, setIsShow] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.email === "test@gmail.com" &&
      formData.password === "12345678"
    ) {
      dispatch(login(formData)); // Dispatch login action
      navigate("/"); // Redirect to home after login
    } else {
      alert("❌ Wrong credentials. Please try again!");
    }
  };

  return (
    <div className="flex items-start bg-gray-300/50">
      <div className="w-1/2 login_banner h-[100vh]" />
      <div className="w-1/2 flex flex-col items-center justify-center h-[100vh]">
        <div className="text-center mb-6">
          <div className="p-1 text-3xl font-bold text-center mb-1 bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent">
            Sign In
          </div>
          <p className="text-xl text-blue-800/60">
            Find your dream property with us
          </p>
        </div>
        {error && (
          <p className="text-center font-bold text-red-600 my-2">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-2 w-1/2">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 ring-1 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <div className="flex items-center w-full p-2 ring-1 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <input
                id="password"
                type={isShow ? "text" : "password"}
                name="password"
                placeholder="enter you password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none mr-1"
                required
              />
              <div onClick={() => setIsShow((prev) => !prev)}>
                {!isShow ? <ClosedEye /> : <Eye />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 mt-8 font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
