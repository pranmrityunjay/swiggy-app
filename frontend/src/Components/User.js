import React, { useEffect } from "react";

const User = ({ Name }) => {
  useEffect(() => {
    const timer = setInterval(() => {
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-Name">
      <h1>{Name}</h1>
      <div>Name: Mrityunjay Kumar</div>
      <div>State: Bihar</div>
      <div>india</div>
    </div>
  );
};

export default User;
