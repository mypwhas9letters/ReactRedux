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
  constructor(props){
    super(props)
    this.state = {term: ''}
  }

  // onInputChange = (event) =>{
  // this.setState({term: event.target.value})
  // console.log(this.state)
  // }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term)
  }

  render(){
    return(
    <div>
      <input
        onChange={event => this.onInputChange(event.target.value)}
        value={this.state.term}
      />
    </div>
  )}
}

export default SearchBar
