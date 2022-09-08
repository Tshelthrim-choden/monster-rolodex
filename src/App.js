import React,{Component} from 'react';
import { CardList} from  './components/card-list/card-list.component';
import { SearchBox} from './components/card-list/search-box/search-box.component';
import './App.css';

class App extends Component {
  // loaded = false;
  constructor(){
  super();
  this.state={
    monsters:[],
    searchField:'',
    // title: ''
  };
  //  this.handleChange=this.handleChange.bind(this) /...if we dot add it as a arrow function

  }


 componentDidMount = () => {
  // if (!this.loaded) {
  //   this.loaded = true;
  //   fetch('https://jsonplaceholder.typicode.com/users').then (response =>
  //   response.json()).then (users=> this.setState({monsters:users}))
  //   .catch(() => this.loaded = false);
  // }
  fetch('https://jsonplaceholder.typicode.com/users').then (response =>
   response.json()).then (users=> this.setState({monsters:users}))
 }

   handleChange=(e)=>{
    this.setState({ searchField: e.target.value, title: e.target.value})
   }; 

  render(){
    // return( this.loaded ? 
    //   <div className='App'>
    //     <input  
    //     type='search' 
    //     placeholder='search monsters' 
    //     onChange={e=> 
    //       {this.setState({ searchField: e.target.value})
    //       console.log(this.State);
    //       }}/>
   // : null)
    
   const{ monsters, searchField }= this.state;
  //  const monsters =this.state.monsters;
  //  const searchField =this.state.searchField;
  const filteredMonsters= monsters.filter(monster=>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
        <div className='App'>
          <h1> Monsters Rolodex </h1>
          {/* <h2>{title}</h2> */}
        <SearchBox 
        placeholder='search monsters'
        handleChange={this.handleChange} />
     <CardList monsters={filteredMonsters}> 
     </CardList>
   </div>
  )
}
}
  
export default App;
