import { Component } from "react"
import "./employees-add-form.css"

class EmployeesAddForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: ""
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    const { name, salary } = this.state
    const { onCreate } = this.props
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form
          className="add-form d-flex">
          <input type="text"
            className="form-control new-post-label"
            placeholder="Enter his name?"
            value={name}
            name='name'
            onChange={this.onValueChange} />
          <input type="number"
            className="form-control new-post-label"
            placeholder="salary in $?"
            name='salary'
            value={salary}
            onChange={this.onValueChange} />

          <button type="submit"
            className="btn btn-outline-light" onClick={onCreate}>Submit</button>
        </form>
      </div>
    )
  }

}

export default EmployeesAddForm