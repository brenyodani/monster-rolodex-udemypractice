import { Component } from 'react';
import './App.css';
import CardList from './components/cards-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState , useEffect } from 'react';

const App  = () => {

  const [searchField, setSeachField] = useState('');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>setMonsters(users));
  }, []);


  useEffect(() => {
    const newfFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfFilteredMonsters);
    }, [monsters, searchField]);

  const onSearchChange = (event) => {
        
          const searchFieldString = event.target.value.toLocaleLowerCase();
          setSeachField(searchFieldString);
          
        };

    const onTitleChange = (event) => {

      const searchFieldString = event.target.value.toLocaleLowerCase();
      setTitle(searchFieldString);
      
    };



  return (
    <div className='App'>
      <h1 className='app-title'> {title}</h1>

      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />

      <br />

      <SearchBox 
        className='title-search-box'
        onChangeHandler={onTitleChange}
        placeholder='set title'
      />
   
      <CardList  monsters={filteredMonsters}/>
    </div>
  );
};



// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };

//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users}
//       }));
//     }



//     onSearchChange = (event) => {
        
//       const searchField = event.target.value.toLocaleLowerCase();

//       this.setState(() => {
//         return { searchField };
//       }
//       );
//     }



//   render(){
//     // const search = event.target.value.toLocaleLowerCase();
//      const {monsters, searchField } = this.state;
//      const { onSearchChange } = this;


//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });


//   return (
//     <div className="App">
//       <h1 className='app-title'>Monster kereso</h1>
//       <SearchBox 
//       className="search-box"
//       onChangeHandler={onSearchChange} 
//       placeholder='search monsters' />
//       <CardList monsters={filteredMonsters} />
//     </div>
//   );
// }
//  }

export default App;
