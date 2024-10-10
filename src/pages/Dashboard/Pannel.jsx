import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Pannel() {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    setUserName(
      () => JSON.parse(localStorage.getItem("userData")).email
    );
  }, []);
  return (
    <div className="container">
      <h1 className="font-MorabaMedium text-left text-3xl my-10 flex items-center gap-x-3.5">خوش آمدید 
        <span className="text-2xl">{userName}</span>
        </h1>
      <Link to="orders">orders</Link>
      <Outlet />
    </div>
  );
}

export default Pannel;
