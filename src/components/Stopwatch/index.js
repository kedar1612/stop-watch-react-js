// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    timeElapsed: 0,
  }

  componentWillUnmount = () => {
    clearInterval(this.timeIntervel)
  }

  onResetTimer = () => {
    clearInterval(this.timeIntervel)
    this.setState({isTimeRunning: false, timeElapsed: 0})
  }

  onTimeStop = () => {
    clearInterval(this.timeIntervel)
    this.setState({isTimeRunning: false})
  }

  onUpdateTime = () => {
    this.setState(prevState => ({
      timeElapsed: prevState.timeElapsed + 1,
    }))
  }

  onStartTime = () => {
    this.timeIntervel = setInterval(this.onUpdateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsed} = this.state
    const second = Math.floor(timeElapsed % 60)

    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  renderMinutes = () => {
    const {timeElapsed} = this.state
    const minute = Math.floor(timeElapsed / 60)

    if (minute < 10) {
      return `0${minute}`
    }
    return minute
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-button">
              <button
                className="start-button button"
                onClick={this.onStartTime}
                type="button"
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                className="stop-button button"
                onClick={this.onTimeStop}
                type="button"
              >
                Stop
              </button>
              <button
                className="reset-button button"
                onClick={this.onResetTimer}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
