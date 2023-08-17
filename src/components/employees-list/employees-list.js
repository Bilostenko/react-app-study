import EmployeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.css"


const EmployeesList = ({store, onDelete, onToggleProp}) => {

  const elements = store.map(item => {
    return (
    <EmployeesListItem 
    {...item}
    name={item.name} 
    salary={item.salary} 
    increase={item.increase} 
    key={item.id}
    onDelete={()=>onDelete(item.id)}
    onToggleProp={(e)=>onToggleProp(item.id, e.currentTarget.getAttribute('data-togle'))}
    />
    )
  })

  return(
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}



export default EmployeesList