import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "./createContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    //  console.log("parent constructur is called")
  }

  componentDidMount() {
    //  console.log("parent component")
  }

  render() {
    // console.log("parent render is called");
    return (
      <div>
        <div>This is About section</div>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <User Name={"mrityunjay"}/> */}
        <User name={"mrityunjay"} />

        {/* <UserClass name={"This is Mrityunjay"} location={"Bihar"}/> */}
      </div>
    );
  }
}

export default About;

// const About = () =>{
//   return (
//     <div>
//   <div>This is About section</div>

//   <User Name={"mrityunjay"}/>
//   {/* <User name={"mrityunjay"}/> */}
//   <UserClass name={"This is Mrityunjay"} location={"Bihar"}/>

//   </div>

//   )
// }

// export default About
