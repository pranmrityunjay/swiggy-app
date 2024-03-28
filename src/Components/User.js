import React, { useEffect } from "react";

const User = ({ Name }) => {
  // const User=(props)=>{

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("This is setInverval");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-Name">
      <h1>{Name}</h1>
      {/* <h1>{props.name}</h1> */}
      <div>Name: Mrityunjay Kumar</div>
      <div>State: Bihar</div>
      <div>Mis: 112115091</div>
    </div>
  );
};

export default User;
