import React from "react" //Know how to work with react components. create and manage components
import ReactDom from "react-dom" //interact with the regular DOM
import SearchBar from './components/search_bar'

//When we are creating a component, we are creating a class of a component, a type of component. This is a class not an instance.
//we are passing the App class not an instance to the DOM. Not an instance of the component. We need to instantiate before passing to the DOM.
// const App = function(){
//   return <div>Hi!</div>
// }
const API_KEY = "AIzaSyA3MIjfT_IzjGBweqN640etNeyRi4oETj8"
const App = () => {
    return(
    <div>
    <SearchBar />
  </div>
  )

}


ReactDom.render(<App />, document.querySelector('.container'))
