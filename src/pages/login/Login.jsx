import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const Login = () => {
  // scroll to top on load
  const onLoad = () => {
    window.scrollTo(0, 0);
  };
  onLoad();

  const navigate = useNavigate();
  const location = useLocation();

  // handle show password button
  const [showPassword, setShowPassword] = useState(false);
  const handleViewPassword = () => {
    setShowPassword(!showPassword);
  };

  // accessing auth context
  console.log(location?.state);
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // social login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Success");
        navigate(location?.state ? location.state : "/");
        console.log(location?.state);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Login Success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  // handle form submit
  const onSubmit = (data, e) => {
    e.preventDefault();
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then(() => {
        toast.success("Login Success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMsg = error.message.split("(")[1].split(")")[0];
        if (errorMsg === "auth/invalid-credential") {
          toast.error("Your email or password is incorrect");
        } else {
          toast.error(errorMsg);
        }
      });
  };

  return (
    <section className=" lg:pt-6 flex py-[60px] items-center bg-cool">
      <Helmet>
          <title>Travellors | Login</title>
        </Helmet>
      <div className="flex justify-center w-5/6  md:w-fit  mx-auto bg-base-100 items-center mt-6  rounded-xl">
        <div className="flex flex-col justify-center text-center rounded-sm w-full  md:w-[400px]  lg:text-left p-0 flex-1">
          <div className="m-0 p-4 md:p-8 space-y-3 rounded-sm mx-auto lg:w-full lg:max-w-[400px] w-[90%]">
            <h1 className="text-3xl font-bold text-center pb-4">Login Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}className="space-y-4">
              <div className="flex flex-col">
                <div className="relative w-full min-w-[200px] h-10 mb-2">
                  <input
                    type="email"
                    autoComplete="current-email"
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-teal-500"
                    placeholder=" "
                    {...register("email", { required: "Email is required" })}
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-teal-500 before:border-blue-gray-200 peer-focus:before:!border-teal-500 after:border-blue-gray-200 peer-focus:after:!border-teal-500">
                    Email
                  </label>
                </div>
                <p className="pb-2 text-left text-red-500">
                  {errors.password?.message}
                </p>
                <div className="mt-1 relative w-full min-w-[200px] h-10">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-teal-500"
                    placeholder=" "
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />

                  <p
                    onClick={handleViewPassword}
                    className="cursor-pointer absolute right-4 top-3 text-xl"
                  >
                    {showPassword ? <VscEyeClosed /> : <VscEye />}
                  </p>

                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-teal-500 before:border-blue-gray-200 peer-focus:before:!border-teal-500 after:border-blue-gray-200 peer-focus:after:!border-teal-500">
                    Password
                  </label>
                </div>
              </div>

              <input
                type="submit"
                
                className="btn bg-c-primary  w-full text-white hover:bg-c-hover"
                value="Login"
              />
            </form>
            <div className="flex items-center space-x-1 py-3">
              <div className="flex-1 h-px sm:w-16 bg-gray-400 dark:bg-gray-300"></div>
              <p className="px-3 text-sm text-gray-600">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-gray-400 dark:bg-gray-300"></div>
            </div>
            <div className="space-y-4 text-sm">
              <button
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-c-primary text-c-primary"
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="text-lg"></FaGoogle>
                <p>Login with Google</p>
              </button>
              <button
                aria-label="Login with GitHub"
                role="button"
                className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-c-primary text-c-primary"
                onClick={handleGithubLogin}
              >
                <FaGithub className="text-lg"></FaGithub>
                <p>Login with GitHub</p>
              </button>
            </div>

            <p className="text-sm text-center ">
              Dont have an account? &nbsp;
              <Link
                to="/register"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
