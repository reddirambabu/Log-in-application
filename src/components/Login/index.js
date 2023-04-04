// Write your code here
import './index.css'

const Login = props => {
  const {isToggleOf, id} = props

  const hasClick = () => {
    isToggleOf(id)
  }

  return (
    <div className="card-container">
      <h1 className="heading">Please Login</h1>
      <button type="button" className="button" onClick={hasClick}>
        Login
      </button>
    </div>
  )
}

export default Login
