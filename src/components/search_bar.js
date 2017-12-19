import React, { Component } from 'react'
//import react amd pull off the property component as a variable called component

//functional component. bc it is a fucntion. some info goes in some JSX comes out
// const SearchBar = () => {
//   return <input />
// };

//class component. used whenever we want some sort of internal record keeping. some ability to be aware of itself. and whats happend to it since it was rendered.

// class SearchBar extends React.Component{
//   render(){
//     return <input />
//   }
// }

class SearchBar extends Component{

  onInputChange(){}
  render(){
    return <input onChange={this.onInputChange}/>
  }
}

export default SearchBar
