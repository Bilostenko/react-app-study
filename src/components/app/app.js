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
        store: store.filter(item => item.id !== id)
      }
    })
  }

  onCreate = () => {
    const newEmployee = {
      name: this.state.name,
      salary: this.state.salary,
      increase: false,
      id: this.state.store.length + 1 // Просто зробимо id на основі довжини масиву + 1
    };
    this.setState(prevState => ({
      store: [...prevState.store, newEmployee]
    }));
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
        <EmployeesAddForm onCreate={this.onCreate} />
      </div>
    )
  }
}

export default App