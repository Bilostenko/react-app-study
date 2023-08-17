import "./app-info.css"

const AppInfo = (props) =>{
  return(
    <div className="app-info">
      <h1>List of employeуs of the company InterBilos</h1>
      <h2>Total number of employers: {props.totalNumEmployees}</h2>
      <h2>Welcome benefits for: {props.totalNumBenefitEmployees}</h2>
    </div>
  )
}

export default AppInfo