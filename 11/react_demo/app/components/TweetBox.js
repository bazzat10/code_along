import React from 'react'

export default class TweetBox extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      content: ''
    }
  }

  handleChange(event){
    this.setState({content: event.target.value})
  }

  render(){
    //destructing / patteron matching
    // let hotdog = {
    //     ingredients: 'sauce'
    // }
    //
    // // var a = hotdog.ingredients // the same as next line
    // var {ingredients: a} = hotdog // a = 'sauce'

    // var ingredients = hotdog.ingredients
    // var {ingredients} = hotdog // es6 feature.



    // var content = this.state.content
    var {content} = this.state// creating a variable called content and assigning the value of this.stage.content to content
    var isDisabled = content.length > this.props.maxLength || content.length === 0

    var spanStyle = (isDisabled ) ? {color:'red'} : {color: 'green'}

    return <div>
        <textarea onChange={this.handleChange}></textarea>
        <button disabled={isDisabled}>Post</button>
        <span style={spanStyle}>{this.props.maxLength - content.length}</span>
      </div>

  }
}
