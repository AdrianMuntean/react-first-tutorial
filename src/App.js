import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {

  adrian = {
    name: 'Adrian', age:33, id:"sf"
  }

  MAx = {
    name: 'Max', age:33, id:"vds"
  }

  state = {
    persons: [
      {name: 'Max', age: 28, id:"asd"},
      {name: 'Manu', age:29, id:"asdd"}
    ],
    showPersons: false
  }

  toggle = false;

switchNameHandler = () => {
  if (this.toggle) {
    this.setState({persons: [
      this.adrian, 
      {name: 'Manu', age:29}
    ]});
  } else {
    this.setState({persons: [
      this.MAx, 
      {name: 'Manu', age:29}
    ]});
  }
   this.toggle = !this.toggle;
 // console.log("was clicked'");
//  this.state.persons[0].name = "Florin";

}

nameChangedHandler = (event, id ) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {...this.state.persons[personIndex]};

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons: persons});
}

togglePersonsHandler = () => {
  console.log(this.state.showPersons);
  const newVar = !this.state.showPersons;
  this.setState({showPersons: newVar});
}

deletePersonHandler = personIndex => {
  const persons = [...this.state.persons]
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

  render() {

    const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    const toggleStyle = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {

      persons = (
        <div >
          {this.state.persons.map((e, index) => {
          return <Person name={e.name} age={e.age} key={e.id} click={this.deletePersonHandler} changed={(event) => this.nameChangedHandler(event, e.id)}/>})
         }
          <button onClick={this.switchNameHandler} style={style}> Swtich</button>
        </div> 
      );

      toggleStyle.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    if (this.state.persons.length === 0) {
      classes.push('cut');
    }

    const personCount = this.state.persons.length;

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <h2 className={classes.join(' ')}>There are {personCount} persons inside</h2>
        <button onClick={this.togglePersonsHandler} style={toggleStyle}>{persons === null ? "Show persons" : "Hide persons"}</button>
        {persons}
      </div>
    );
  }
}

export default App;
