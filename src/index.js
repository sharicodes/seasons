import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//
//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //super is a reference to the parent's constructor function
  //   //this is the ONLY TIME we do direct assisnment
  //   //to this.state.
  //   this.state = { lat: null, errorMessage: " " };
  //   //we dont know what latitude is yet so default to null
  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  //we called setState!!

  //we did not directly assign state object- only done upon initialization

  // componentDidUpdate() {
  //   console.log("My component was just updated - it rerendered!");
  // }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }
  //React says we have to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
