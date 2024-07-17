import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      location: this.props.location,
    };
    this.state = {
      userInfo: {
        name: this.props.name,
        location: this.props.location,
      },
    };
  }

  async componentDidMount(prevProps, prevState) {
    const responce = await fetch("https://api.github.com/users/pranmrityunjay");
    const data = await responce.json();
    const { name, location } = this.state;
    this.setState({
      name: data.name,
      location: data.location,
    });

    this.setState({
      userInfo: data,
    });
  }

  componentWillUnmount() {
  }

  render() {
    const { name, location } = this.state;
    const { name1, location1 } = this.state.userInfo;

    return (
      <div className="user-name">
        <div>{name}</div>
        <div>{name1}</div>
        <br />
        <div>j</div>
        <br />
        <div>{location}</div>
      </div>
    );
  }
}

export default UserClass;
