import React, { Component } from "react";
import "./App.css";

class Children extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("getDerivedStateFromProps==CHILDREN=>", props);
  //     return state;
  //   }
  //   shouldComponentUpdate() {
  //     if (this.props.count < 10) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  // getSnapshotBeforeUpdate then props is camera shott
  // getSnapshotBeforeUpdate(preProps, preState) {
  //   console.log("getSnapshotBeforeUpdate===>", preProps);
  //   return 10;
  // }
  // componentDidUpdate(preProps, preState, snapShot) {
  //   console.log("componentDidUpdate===>",snapShot);
  // }

 componentWillUnmount(){
   console.log("Component Remove!!")
 }

  render() {
    return (
      <div>
        <h1>Life_Cycle Methods... Ⓜ</h1>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}

export default Children;
