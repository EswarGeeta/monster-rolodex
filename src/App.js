import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users}));
  }

  componentDidUpdate() {
    console.log('component updated');
  }

  handleSearch(value){
    this.setState({searchValue: value}, () => console.log(this.state.searchValue));
  }

  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLocaleLowerCase()));
    return (
      <div className="App">
          <SearchBox placeholder='search monsters' handleChange={this.handleSearch} />
        <CardList monsters={filteredMonsters} />
      </div>
    );  
  }
}

export default App;
