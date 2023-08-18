import "./search-panel.css"
import { Component } from "react"

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }

  onUpdateSearchLocal = (e) => {
    const term = e.target.value
    this.setState({
      term: term
    })

    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search employee"
        onChange={this.onUpdateSearchLocal}
        value={this.term} />
    )
  }
}

export default SearchPanel