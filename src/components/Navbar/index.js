// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value

      const changeTheme = isDarkTheme ? 'light' : ''

      const gray = isDarkTheme ? 'gray' : ''

      const onBtnClick = () => {
        toggleTheme()
      }

      return (
        <div className={`navbar ${gray}`}>
          <Link to="/">
            {isDarkTheme ? (
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
              />
            ) : (
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
              />
            )}
          </Link>
          <ul>
            <Link to="/">
              <li className={`${changeTheme}`}>Home</li>
            </Link>
            <Link to="/about">
              <li className={`${changeTheme}`}>About</li>
            </Link>
          </ul>

          <button type="button" onClick={onBtnClick} data-testid="theme">
            {isDarkTheme ? (
              <img
                className="toggle"
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
              />
            ) : (
              <img
                className="toggle"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
