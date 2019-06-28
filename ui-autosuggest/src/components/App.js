import React, { Component } from 'react';
import './App.scss';
import SearchBox from './SearchBox';
import Suggestions from './Suggestions';
import { debounce } from 'lodash';

import countries from '../mock/countries.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
  }

  state = {
    searchTerm: '',
    suggestions: []
  }

  componentWillUnmount() {
    this.changeHandler.cancel();
  }

  changeHandler = debounce((txt) => {
    const searchTerm = txt.toLowerCase().trim();

    if (searchTerm.length < 2) {
      
      //for 2 way binding
      this.setState({
        searchTerm,
        suggestions: []
      });

      return;
    }
    
    let suggestions = countries.filter(country => {
      return ((country.name && country.name.toLowerCase().indexOf(searchTerm) > -1) ||
        (country.code && country.code.toLowerCase().indexOf(searchTerm) > -1));
    });


    //for 2 way binding
    this.setState({
      searchTerm,
      suggestions
    });
  }, 250)
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Auto Suggest Component
        </header>
        <div className="content-box">
          <SearchBox 
            change = { this.changeHandler }
            value = {this.state.searchTerm } />
          { 
            this.state.suggestions.length > 0 ? 
              <Suggestions 
                suggestions={this.state.suggestions}  
                searchTerm={this.state.searchTerm}/> 
              : null
          }
        </div>
      </div>
    );
  }
}

export default App;
