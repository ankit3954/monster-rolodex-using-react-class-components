import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component{

  constructor(){
    super();

    this.state = {
       monster: [],
       searchString: ""
  }
}

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      return (
        this.setState({
          monster:users
        })
      );
    });
  }

   onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
           
    this.setState({
      searchString : searchString
    })
  };

  render(){

    const {monster, searchString} = this.state; // destructuring array of objects i.e this.state
    const {onSearchChange} = this;              // here 'this' refers to array of all components,methods etc of class app   

    const newMonster = monster.filter((monsters) => {
      if(monsters.name.toLowerCase().includes(searchString))
       return monsters;  
    });

    return (
      <div className="App">

        <h1 className='title'>MONSTER ROLODEX</h1>

       <SearchBox 
       className="monster-search-box"
       placeHolder="search-monsters"
       onSearchHandler={onSearchChange}/>

       <CardList monster={newMonster}/>
      </div>
    );
  }
}


export default App;
