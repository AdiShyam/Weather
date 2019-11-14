import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    _handleSubmit = e => {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ""})
    }

    _handleSearchChange = e => {
        this.setState( {term: e.target.value })
    }

    render() {
        return (
            <form className= "search-bar-wrapper" onSubmit= {this._handleSubmit}>
                <input 
                    placeholder = "Get 5 day forcast for the entered Indian City"
                    className="search-bar" 
                    value={this.state.term} 
                    onChange = {this._handleSearchChange}  />
                <button className ="search-button" onClick = {this._handleSubmit}> Submit</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchWeather}, dispatch);
}

// const mapStateToProps = state = {
//     // return { cityName: state.reducer}
// }

export default connect(null, mapDispatchToProps)(SearchBar)