import React, { Component } from 'react'; //whenever we translate JSX to JS we need react.createElement
//const Component = React.Component
//exporting modules, classes and states

//this input needs to be aware if it is typed into
//create a class based component. ES6 class. Do this to add functionality

//const SearchBar = () => {
//  return <input />
//};
//class SearchBar extends React.Component {
class SearchBar extends Component {//give it all the functionality that React.component has
  constructor(props) { //all js classes have constructor. called whenever a new instance is created.
    super(props);

    this.state = { term: 'Starting Value' };
  }

  //every class should have a render methods
  render() {
    //shorter code:
    //return <input onChange={event => console.log(event.target.value)} />;0
    return (

      <div>
        <input
          value = {this.state.term}
          onChange={event => this.setState({term: event.target.value})} />

      </div>
    );
  }
  //handing events EventHandler. Detect whenever the user types
  onInputChange(event) { // on/handle  input tag changes
    //remember to pass it to the element we want to monitor
    //event.target.value has the thing in input
    console.log(event.target.value);
    //console.log(event) //tells you everything in the EventHandler

    this.setState({ term: event.target.value }); //USE setState. This tells react that the state changed

  }

}

export default SearchBar; // any function that imports searchbar
