import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //initializing the first counter
      counters: [
        {id: 0, value: 0, form_value: undefined}
      ],
      //variables that keeps track of the id:s used
      nr_ids: 0
    };
    // binding event handlers
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  // Method for handling the incrementation of a counter
  handleIncrement = (counter) => {
    // Use the spread operator to clone this.state.counters
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    // incrementing the value
    counters[index].value++;
    this.setState({counters});
  };

  // Method for handling the decrement of a counter
  handleDecrement = (counter) => {
    // Use the spread operator to clone this.state.counters
    const counters = [...this.state.counters];
    // finding the correct counter
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    // if-statement to make sure that the value can't go below zero
    if (counters[index].value-1<0) {
      counters[index].value = 0;
    } else {
      counters[index].value--;
    }
    this.setState({counters});
  };

  // Method for handeling the deletion of the buttons

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };

  // Method for handling the resetting of the counters

  handleReset = () => {
    //use the map method to get each counter
    // we get a new array of counters
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({counters});
  };

  // Method that adds a new row to the application
  handleAddingRow = () => {
    // Adding the ID to make sure that each row receives an unique ID
    const nr_ids = this.state.nr_ids+1
    const counters = this.state.counters.concat({id: nr_ids, value: 0})
    this.setState({counters, nr_ids});
  };

// method that handles the submition
// a message notifies the user of how many fruits the chose and what kind
// only displays the active carts
  handleSubmit = (event, counter) => {
    // Use the spread operator to clone this.state.counters
    const counters = [...this.state.counters];
    // finding the correct counter
    const index = counters.indexOf(counter);
    counters[index] = {...counter};

    // beginning of the message
    var message = "You've succefully added: ";

    // calculate the number of active carts
    const totalCounters = counters.filter(c => c.value > 0).length;
    // add the active carts to a new list
    const active_counters = counters.filter(c => c.value > 0);
    // a for loop that iterates through the active counters/carts
    for (let i=0; i < totalCounters; i++) {
      // string concatenation that adds the active carts to the message
        message += active_counters[i].value + " " + active_counters[i].form_value + " ";
    }
    //alert the user of their choice/choises
    alert(JSON.stringify(message));
    //prevent the page from resetting itself
    event.preventDefault();
  };

// method that makes sure that the dropdown list changes when the user has chosen something
  handleChange = (event, counter) => {
    // Use the spread operator to clone this.state.counters
    const counters = [...this.state.counters];
    // find the index of the counter in question
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    // change its value to the value from the form
    counters[index].form_value = event.target.value;
    //change the state
    this.setState({counters});
  };

  render() {
    return (
      <React.Fragment >
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters = {this.state.counters}
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement}
            onDelete = {this.handleDelete}
            onAddingRow = {this.handleAddingRow}
            onDecrement = {this.handleDecrement}
            onSubmit = {this.handleSubmit}
            onChange = {this.handleChange}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
