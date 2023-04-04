// Write your code here
import './index.css'

const Logout = props => {
  const {isToggleOf, id} = props

  const hasClick = () => {
    isToggleOf(id)
  }

  return (
    <div className="card-container">
      <h1 className="heading">Welcome User</h1>
      <button type="button" onClick={hasClick} className="button">
        Logout
      </button>
    </div>
  )
}

export default Logout
