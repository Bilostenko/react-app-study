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

  onAdd = (name, salary) => {
    if (name !== '' && salary !== '') {

      let newEmployee = { 
        name, 
        salary, 
        rise: false,
        increase: false, 
        id: this.state.store.length + 1 }
      
      this.setState(({ store }) => {
        let updatedStore = [...store, newEmployee]
        return {
          store: updatedStore
        }
      })
    }
  }

  onToggleIncrease = (id) =>{
    this.setState(({store})=>{
      const index  = store.findIndex(item=> item.id === id)

      const old = store[index]
      const newItem = {...old, increase:!old.increase}
      const newArr = [...store.slice(0, index), newItem, ...store.slice(index+1)]
    
      return{
        store: newArr
      }
    })
  }

  onToggleRise = (id) =>{
    console.log(`Rise this ${id}`)
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList store={this.state.store} onDelete={this.onDelete} onToggleIncrease={this.onToggleIncrease} onToggleRise={this.onToggleRise}/>
        <EmployeesAddForm onAdd={this.onAdd} />
      </div>
    )
  }
}

export default App