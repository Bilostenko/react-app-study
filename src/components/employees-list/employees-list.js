import EmployeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.css"


const EmployeesList = ({store, onDelete, onToggleIncrease, onToggleRise}) => {

  const elements = store.map(item => {
    return (
    <EmployeesListItem 
    name={item.name} 
    salary={item.salary} 
    increase={item.increase} 
    key={item.id}
    onDelete={()=>onDelete(item.id)}
    onToggleRise={()=>onToggleRise(item.id)}
    onToggleIncrease={()=>onToggleIncrease(item.id)}/>
    )
  })

  return(
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}



export default EmployeesList