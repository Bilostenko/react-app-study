import "./employees-list-item.css"


const EmployeesListItem = (props) => {

  let { name, salary, onDelete, onToggleProp, increase, rise, onUpdateInputPrice } = props
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += ' increase';
  }
  if (rise) {
    classNames += ' like';
  }

  const salaryInputUpdate = (e) => {
    const newSalary = e.target.value;
    onUpdateInputPrice(name, newSalary);
  }

  return (
    <li className={classNames}>
    <span className="list-group-item-label like" onClick={onToggleProp} data-togle='rise'>{name}</span>

    <input 
      type="text" 
      className="list-group-item-input" 
      value={salary} 
      onChange={salaryInputUpdate} />
      
    <div className='d-flex justify-content-center align-items-center'>
      <button type="button"
        className="btn-cookie btn-sm ">
        <i className="fas fa-cookie"
          onClick={onToggleProp}
          data-togle='increase'></i>
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

export default EmployeesListItem