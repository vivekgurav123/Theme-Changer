// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const changeTheme = isDarkTheme ? 'light' : ''
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const bgDark = isDarkTheme ? 'dark' : ''

      return (
        <>
          <Navbar />
          <div className={`center ${bgDark}`}>
            <img src={imgUrl} alt="about" />
            <h1 className={`${changeTheme}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
