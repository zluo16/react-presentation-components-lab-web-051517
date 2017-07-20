import React, {Component} from 'react'

class SimpleComponent extends Component {
  constructor() {
    super()

    this.state = {
      mood: 'happy'
    }
  }

  clickHandler = () => {
    this.setState({
      mood: 'sad'
    })
  }

  render() {
    return <div onClick={this.clickHandler}>{this.state.mood}</div>
  }
}

export default SimpleComponent
