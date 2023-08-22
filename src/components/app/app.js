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
        { name: "Herrington Billy", salary: 500, increase: false, rise: false, id: 1 },
        { name: "Danny Lee", salary: 1000, increase: false, rise: false, id: 2 },
        { name: "Anthony Capriati", salary: 1500, increase: false, rise: false, id: 3 }
      ],
      term: '',
      filter: 'all'
    }
  }

  onDelete = (id) => {
    this.setState(({ store }) => {

      return {
        store: store.filter(item => item.id !== id)
      }
    })
  }

  onAdd = (name, salary) => {
    if (name !== '' && salary !== '') {

      let newEmployee = {
        name,
        salary,
        rise: false,
        increase: false,
        id: this.state.store.length + 1
      }

      this.setState(({ store }) => {
        let updatedStore = [...store, newEmployee]
        return {
          store: updatedStore
        }
      })
    }
  }

  onToggleProp = (id, prop) => {
    this.setState(({ store }) => {
      const index = store.findIndex(item => item.id === id)

      const old = store[index]
      const newItem = { ...old, [prop]: !old[prop] }
      const newArr = [...store.slice(0, index), newItem, ...store.slice(index + 1)]

      return {
        store: newArr
      }
    })
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({
      term: term
    })
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise': return items.filter(item => item.rise);
      case 'moreThan1000': return items.filter(item=>item.salary > 1000);
      default: return items
    }
  }

  render() {
    const { store, term, filter } = this.state
    let totalNumEmployees = this.state.store.length
    let totalNumBenefitEmployees = this.state.store.reduce((count, item) => item.increase ? count + 1 : count, 0);
     const visibleData = this.filterPost(this.searchEmp(store, term), filter);

    return (
      <div className="app">
        <AppInfo totalNumEmployees={totalNumEmployees} totalNumBenefitEmployees={totalNumBenefitEmployees} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter}/>
        </div>
        <EmployeesList store={visibleData} onDelete={this.onDelete} onToggleProp={this.onToggleProp} />
        <EmployeesAddForm onAdd={this.onAdd} />
      </div>
    )
  }
}

export default App