import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import Robots from './Robots';
import SearchBox from './SearchBox';
 
class App extends Component {

constructor(){
  super();
  this.state = {
    searchTerm :'',
    robots : Robots
  }
}

onSearch = (event) => {
  console.log('Inside ee');
this.setState({searchTerm:event.target.value});
console.log(this.state.searchTerm);
}

  render() {
    
const filterRobs = this.state.robots.filter(rob =>{
  return rob.name.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase());
});
    return (
      <div>
      <h1>Robot Market</h1>
      <SearchBox searchChange={this.onSearch}></SearchBox>
       <CardList robots={filterRobs}></CardList> 
      </div>
    );
  }
}
 
export default App;