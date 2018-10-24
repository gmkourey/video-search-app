import React from "react";

class SearchBar extends React.Component {
    state = {
        searchValue: ""
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value})
    }

    render() {
        return(
            <div>
                <form>
                <input className="search-bar" type="text" onChange={(event) => this.handleChange(event)} val={this.state.searchValue}/>
                <button type="submit" onClick={(event) => this.props.onSearch(event, this.state.searchValue)}>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;