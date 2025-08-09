import React, { useRef } from "react";
import { useDataContext } from "../../context/DataContext";
import toast from "react-hot-toast";

const Login = () => {
  const { axios, setToken } = useDataContext();

  const formData = {
    email: useRef(""),
    password: useRef(""),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.email.current.value === "" ||
      formData.password.current.value === ""
    ) {
      return toast.error("Email and password required");
    }

    try {
      const { data } = await axios.post("/admin/login", {
        email: formData.email.current.value,
        password: formData.password.current.value,
      });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = data.token;
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:m6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-primary">Admin</span> Login
            </h1>
            <p className="font-ligt">
              Fill in your credentials to access the admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                ref={formData.email}
                type="email"
                required
                placeholder="Email address"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
              />
            </div>

            <div className="flex flex-col">
              <label>Password</label>
              <input
                ref={formData.password}
                type="password"
                required
                placeholder="Password"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
