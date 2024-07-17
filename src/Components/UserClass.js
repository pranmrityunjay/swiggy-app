import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
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
    // console.log("child Counstrutor is called");
  }

  async componentDidMount(prevProps, prevState) {
    // if(prevProps!=prevState)

    // console.log("componentDidMountain");

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
    // console.log("Disappear");
  }

  render() {
    // console.log("Child Rendered");
    //  const{name,location}=this.props;
    const { name, location } = this.state;
    const { name1, location1 } = this.state.userInfo;

    return (
      <div className="user-name">
        {/* <h7>{this.state.count}</h7> */}
        {/* <h1>count1= {count1}</h1>
                 <h1>count2= {count2}</h1> */}

        {/* <button onClick={()=>{
                    this.setState({
                        count1:this.state.count1+1,
                        

                 })
                 }}>Increase count</button> */}

        {/* <h7>{this.props.name}</h7> */}

        <div>{name}</div>
        <div>{name1}</div>
        <br />
        <div>MIS:112115091</div>
        <br />
        <div>{location}</div>
      </div>
    );
  }
}

export default UserClass;
