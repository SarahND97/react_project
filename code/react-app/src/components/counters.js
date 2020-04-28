import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onAddingRow, onDecrement, onSubmit, onChange} = this.props

    return(
      <div>
        <button
          // Button for resetting all the counters
          className="button.btn.btn-primary btn-sm m-2"
          onClick={onReset}
          >
          Reset
        </button>

        {this.props.counters.map(counter => (
          //Handles the states of the individual counters
          // Makes sure that the counter has access to all the methods needed
          // for handling events
          <Counter
            key={counter.id}
            onDelete = {onDelete}
            onIncrement = {onIncrement}
            onDecrement = {onDecrement}
            counter={counter}
            onSubmit = {onSubmit}
            onChange = {onChange}
            >
          </Counter>))}
          <button
            // button for handling adding a row
            className="buttton.btn.btn-info btn-sm m-2"
            onClick={onAddingRow}
            >
            Add Line
          </button>
      </div>
    );
  }
}

export default Counters;
