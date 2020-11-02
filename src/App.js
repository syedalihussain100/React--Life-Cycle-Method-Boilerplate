import React, { Component } from "react";
import Children from "./Children";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps=>", props);
  //   return state;
  // }
  // SHOULD COMPONENT UPDATE CALLED WHEN CONDITION IS TRUE AND FALSE
  // shouldComponentUpdate() {
  //   if (this.state.count < 5) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  render() {
    return (
      <div>
        {this.state.count < 5 &&<Children count={this.state.count} />}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          INCREAMENT
        </button>
        <br /> <br />
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          DECREAMENT
        </button>
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import Children from './Children';

//  class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       data: [],
//     };
//     console.log("constructor");
//   }

//   // componentDidMount() {
//   //   console.log("componentDidMount");
//   //   fetch("https://jsonplaceholder.typicode.com/todos")
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       this.setState({
//   //         data: data,
//   //       });
//   //     })
//   //     .catch((error) => console.log(error));
//   // }
//   render() {
//     console.log("RENDER=====>");
//     return (
//       <div>
//         <h1>Life_Cycle Methods... Ⓜ</h1>
//         {/*COMPONENTDIDMOUNT */}

//         {/* {this.state.data.map((v, i) => {
//           return <h5 key={i}>{v.title}</h5>;
//         })} */}

//         {/* GETDERIVEDSTATEFROMPROPS */}
//         <button onClick={()=> this.setState({count:this.state.count + 1})}>INCREAMENT</button> <br/> <br/>
//         <button onClick={()=> this.setState({count:this.state.count - 1})}>DECREAMENT</button>
//         <Children count={this.state.count}/>
//       </div>
//     );
//   }
// }

// export default App;
