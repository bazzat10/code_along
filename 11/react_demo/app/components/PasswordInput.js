import React from 'react'
require('./PasswordInput.css')
import passwordMeter from '../lib/passwordMeter'

export default class PasswordInput extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      password: ''
    }
  }

  calcStrength(password){
    if(password.length < 6) {
      return 'worst'
    } else {
      return 'good'
    }
  }

  handleChange(event){
    this.setState({password: event.target.value})
    // console.log('target value', event.target.value)
    // console.log('password', this.state.password)
    // this.setState({password: event.target})
  }

  render(){
    var strength = this.calcStrength(this.state.password)
    return (
      <div>
        <input type='password'
          onChange={this.handleChange}/>
        <span className={strength}> strength: {strength}</span>
      </div>
    )
  }
}
