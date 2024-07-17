import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "./createContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>This is About section</div>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <User name={"mrityunjay"} />
      </div>
    );
  }
}

export default About;
