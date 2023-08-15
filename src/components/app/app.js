import "./app.css"

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import EmployeesList from "../employees-list/employees-list"
import EmployeesAddForm from "../employees-add-form/employees-add-form"

import { Component } from "react"

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      store: [
        { name: "Herrington Billy", salary: 500, increase: false, id: 1 },
        { name: "Danny Lee", salary: 1000, increase: false, id: 2 },
        { name: "Anthony Capriati", salary: 1500, increase: false, id: 3 }
      ]
    }
  }

  onDelete = (id) => {
    this.setState(({ store }) => {

      return {
        store: store.filter( item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList store={this.state.store} onDelete={this.onDelete} />
        <EmployeesAddForm />
      </div>
    )
  }
}

export default App