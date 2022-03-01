import React from "react";

class Overview extends React.Component {
    constructor(props) {
        super(props)

    } 
    render() {
        return (
            <div className="arrayList"> {this.props.dataFromParent.map((item) => (
                <li key={ Math.random().toString(36) }>{item}</li>
              ))}
             </div> 
        )       
    }   
  }
export default Overview

