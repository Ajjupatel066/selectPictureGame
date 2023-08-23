import './index.css'

const NavBar = props => {
  const {topScore, timeLeft} = props

  return (
    <nav className="nav-bar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="game-logo"
      />
      <ul className="score-time-details">
        <li className="score">
          <p>
            Score: <span className="span">{topScore}</span>
          </p>
        </li>
        <li className="score-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="timer-count">{timeLeft} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
