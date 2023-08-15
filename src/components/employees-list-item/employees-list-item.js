import { Component } from "react";
import "./employees-list-item.css"


class EmployeesListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      increase: false
    }
  }
  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }))
  }

  onRise = () => {
    this.setState(({ rise }) => ({
      rise: !rise
    }))
  }

  render() {

    let { name, salary, onDelete } = this.props
    let { increase } = this.state
    let { rise } = this.state

    let classNames = "list-group-item d-flex justify-content-between ";
    if (increase) {
      classNames += ' increase';
    }
    if (rise) {
      classNames += ' like'
    }


    return (
      <li className={classNames}>
        <span className="list-group-item-label like" onClick={this.onRise}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
            className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"
              onClick={this.onIncrease}></i>
          </button>

          <button type="button"
            className="btn-trash btn-sm ">
            <i className="fas fa-trash" onClick={onDelete}></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
}

export default EmployeesListItem