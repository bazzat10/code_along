// const React = require('react')
import React from 'react'

class Slider extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {value: this.props.startValue}
  }

  handleChange(event){
    this.setState({value: event.target.value}) //2nd value variable is from components
  }

  render(){
    return (
      <div>
        <input type="range"
        onChange={this.handleChange}
        value={this.state.value}
        min={this.props.min}
        max={this.props.max}/>
        <input type="number"
        onChange={this.handleChange}
        value={this.state.value}
        min={this.props.min}
        max={this.props.max}/>
      </div>
    )
  }
}

module.exports = Slider
