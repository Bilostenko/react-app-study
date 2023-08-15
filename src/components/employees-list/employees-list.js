import EmployeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.css"


// this.myUniqueId = generateId();


const EmployeesList = ({store, onDelete}) => {

  const elements = store.map(item => {
    return (
    <EmployeesListItem 
    name={item.name} 
    salary={item.salary} 
    increase={item.increase} 
    key={item.id}
    onDelete={()=>onDelete(item.id)}/>
    )
  })

  return(
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}



export default EmployeesList