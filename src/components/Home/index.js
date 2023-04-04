// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  isToggleOf = () => {
    this.setState(previous => ({isLoggedIn: !previous.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    const cardBody = isLoggedIn ? (
      <Logout isToggleOf={this.isToggleOf} id="logout" />
    ) : (
      <Login isToggleOf={this.isToggleOf} id="login" />
    )

    return <div className="app-container">{cardBody}</div>
  }
}

export default Home
