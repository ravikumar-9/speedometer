// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    console.log('this')
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    } else {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  onApplyBrakes = () => {
    console.log('that')
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    } else {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="speedometer-heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer-image"
          alt="speedometer"
        />
        <h1 className="speed-description">
          Speed is <span className="speed">{speed}</span>mph
        </h1>
        <p className="limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="acce-button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="brake-button"
            onClick={this.onApplyBrakes}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
