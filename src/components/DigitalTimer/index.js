// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: 0, isPaused: true, setMinutes: 25}

  render() {
    const {minutes, seconds, isPaused, setMinutes} = this.state
    const displayMinutes = minutes > 9 ? minutes : `0${minutes}`
    const displaySeconds = seconds > 9 ? seconds : `0${seconds}`
    const displayText = isPaused ? 'Paused' : 'Running'
    const startOrPauseText = isPaused ? 'Start' : 'Pause'
    const imgUrl = isPaused
      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    const altText = isPaused ? 'play icon' : 'pause icon'
    return (
      <div className="container">
        <h1>Digital Timer</h1>
        <div className="digital-timer">
          <div className="bg-image">
            <div className="bg-card">
              <p className="time-count">
                {displayMinutes}:{displaySeconds}
              </p>
              <p className="bg-card-text">{displayText}</p>
            </div>
          </div>
          <div className="manage-card">
            <div className="pauseAndReset">
              <div className="startAndPause">
                <button type="button" className="button">
                  <img src={imgUrl} alt={altText} className="button" />
                </button>
                <p>{startOrPauseText}</p>
              </div>
              <div className="reset">
                <button type="button" className="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="button"
                  />
                </button>
                <p>Reset</p>
              </div>
            </div>
            <p>Set Timer Limit</p>
            <div className="set-timer-limit">
              <button type="button" className="timer-button">
                -
              </button>
              <div className="timer-text">{setMinutes}</div>
              <button type="button" className="timer-button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
