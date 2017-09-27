import React from 'react';
import ReactDOM from 'react-dom';//use ReactDOM to rendor to the DOM
import SearchBar from './components/search_bar';
const API_KEY = "AIzaSyC95vdwBN-VlJZr0x5pqYIpnCgdQxd1ruE";

//create a new component. this component should produce
//some html
const App = function() {
  return (<div>
            <SearchBar />
          </div>);
}

// Fat arrow is identical to function()
//const App = () => {
//  return <div>Hi!</div>
//}



//Take this component's generated HTML and put it on the page (in the DOM)
//React.render(App); - React is not defined. We installed react when we did `npm install`
//React.render(App); - React.render is depreciated
//ReactDOM.render(); - make an instance of the component first

//<App />; //self closing tag. Creates an instance.
//ReactDOM.render(<App />); - doesn't say where to put the element on the page

ReactDOM.render(<App />, document.querySelector('.container'));
