// Write your code here
import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const changeTheme = isDarkTheme ? 'light' : ''
      const bgDark = isDarkTheme ? 'dark' : ''

      return (
        <>
          <Navbar />
          <div className={`center ${bgDark}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`${changeTheme}`}>Lost Your Way?</h1>
            <p className={`${changeTheme}`}>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
