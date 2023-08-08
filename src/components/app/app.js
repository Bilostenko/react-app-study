import "./app.css"
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import EmployeesList from "../employees-list/employees-list"
import EmployeesAddForm from "../employees-add-form/employees-add-form"

const store = [
  {name: "Herrington Billy", salary: 500, increase: false, id: 1},
  {name: "Danny Lee", salary: 1000, increase: false, id: 2},
  {name: "Anthony Capriati", salary: 1500, increase: false, id: 3}
]

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList store={store}/>
      <EmployeesAddForm />
    </div>
  )
}

export default App