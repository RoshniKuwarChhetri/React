import React, { Component } from 'react'

export default class UseState extends Component {
    state={
        count:0
    }
    increase(){
        this.setState({count: this.state.count+1})
    }
    componentDidMount(){
      console.log("mounting")
    }
  render() {
    return (
      <div>
        <h1>life cycle ---Count is....{this.state.count}</h1>
        <button onClick={this.increase}></button>
      </div>
    )
  }
}
