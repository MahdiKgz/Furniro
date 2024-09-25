import React, { useEffect, useState } from "react";
import api from "../helpers/funcs/config.js"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=> {
    checkUserLogin();
  },[])

  const userData = {
    email : userName , 
    password
  }
  const loginHanlder = () => {
    api.post("/login", userData)
    .then(response => {
     toast.success("با موفقیت وارد شدید");
     localStorage.setItem("accessToken" , JSON.stringify(response.accessToken))
     localStorage.setItem("userData" , JSON.stringify(response.user))

     setTimeout(() => {
      navigate("/")
     } , 2000)
    })
  };

  const checkUserLogin = () => {
    const userData = JSON.parse(localStorage.getItem("user-login-data"))
    if (userData) navigate("/")
  }
  return (
    <div className="container w-full flex items-center justify-center">
      <div className="shadow-md px-5 w-full lg:w-[800px] py-6 rounded-lg">
        <h1 className="font-MorabaBold text-primary-1 text-center text-3xl">
          ورود به حساب کاربری
        </h1>
        <div className="login-form flex flex-col items-start lg:gap-y-6 gap-y-5 mt-8 lg:mt-10 child:w-full">
          <div className="login-form__input flex flex-col gap-y-3.5">
            <label>نام کاربری</label>
            <input
              onInput={(e) => setUserName(e.target.value)}
              type="text"
              className="px-6 py-3.5 border-b-2 border-b-neutral-400 focus:border-b-primary-1 outline-none transition-all duration-200 rounded-lg"
              placeholder="نام کاربری"
            />
          </div>
          <div className="login-form__input flex flex-col gap-y-3.5">
            <label>رمز عبور</label>
            <input
              onInput={(e) => setPassword(e.target.value)}
              type="password"
              className="px-6 py-3.5 border-b-2 border-b-neutral-400 focus:border-b-primary-1 outline-none transition-all duration-200 rounded-lg"
              placeholder="رمز عبور"
            />
          </div>
          <div className="rememberMe flex items-center gap-x-2.5 mt-3">
            <input id="remember" type="checkbox" value="remember" checked />
            <label htmlFor="remember" className="text-sm">
              مرا به خاطر بسپار
            </label>
          </div>
          <button
            onClick={loginHanlder}
            disabled={!(userName.length > 8 && password.length > 8)}
            className="bg-primary-1 cursor-pointer disabled:cursor-not-allowed disabled:bg-primary-1/85 py-4 px-8 w-full rounded-lg font-DanaDemi text-white transition-all duration-200"
          >
            ورود
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
