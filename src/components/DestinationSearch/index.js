import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearchedResult = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchedList = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput),
    )

    return (
      <ul className="bg-container">
        <h1 className="title">Destination Search</h1>
        <div className="search-container">
          <input
            value={searchInput}
            type="search"
            className="searchInput"
            placeholder="Search"
            onChange={this.onSearchedResult}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-img"
          />
        </div>
        <div className="cards-container">
          {searchedList.map(eachUser => (
            <DestinationItem destinationItem={eachUser} key={eachUser.id} />
          ))}
        </div>
      </ul>
    )
  }
}

export default DestinationSearch
