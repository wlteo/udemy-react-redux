import React from 'react'
class SearchBar extends React.Component {
  state = { term: 'type something here bro' }
  onInputChange(event) {
    console.log(event.target.value)
  } 

  render() {
    return <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type='text' value={this.state.term} 
              onClick={() => this.setState({term: ''})} 
              onChange={(e) => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    }
  }

export default SearchBar