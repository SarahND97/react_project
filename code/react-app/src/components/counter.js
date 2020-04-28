import React, { Component } from 'react';

class Counter extends Component {
  // render method contains all of the components in the counter
  // this includes a dropdown-list, a submit button, an incrementation button,
  // a decrementation button and a delete button
  render() {
    return (
      <React.Fragment >
        <view style = {{justifyContent: 'space-between', flexDirection: 'column'}}>
        <div>
         <span
          className = {this.getBadgeClasses()}
         >{this.formatCount()}</span>
         <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
            >
            Increment
         </button>
         {" "}
         <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
            >
            Decrement
         </button>
         <button
            onClick = {() => this.props.onDelete(this.props.counter.id)}
            className = "btn btn-danger btn-sm m-2"
            >
            Delete
         </button>
         <form onSubmit={event => this.props.onSubmit(event, this.props.counter)}>
          <label>
             <select className = "custom-select"
                     value={this.props.counter.form_value}
                     onChange={event => this.props.onChange(event, this.props.counter)}
                     style={{width: 200, background: '#18EA21'}}
              >
               <option>Choose an option</option>
               <option value="grapefruit(s)">Grapefruit</option>
               <option value="lime(s)">Lime</option>
               <option value="coconut(s)">Coconut</option>
               <option value="lemon(s)">Lemon</option>
               <option value="orange(s)">Orange</option>
               <option value="mango(es)">Mango</option>
               <option value="strawberry(ies)">Strawberry</option>
               <option value="passion fruit(s)">Passion Fruit</option>
               <option value="banan(as)">Banana</option>
             </select>
          </label>
         <input type="submit" value="Submit" />
        </form>
      </div>
      </view>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "primary" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value <= 0 ? 0 : value;
  }
}

export default Counter;
