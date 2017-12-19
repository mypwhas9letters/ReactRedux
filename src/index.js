import React, { Component } from "react" //Know how to work with react components. create and manage components
import ReactDom from "react-dom" //interact with the regular DOM
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

//When we are creating a component, we are creating a class of a component, a type of component. This is a class not an instance.
//we are passing the App class not an instance to the DOM. Not an instance of the component. We need to instantiate before passing to the DOM.
// const App = function(){
//   return <div>Hi!</div>
// }
const API_KEY = "AIzaSyA3MIjfT_IzjGBweqN640etNeyRi4oETj8"



class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: []}


    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
      // ES6 syntax. If the key and value are identical terms. You just need to type it once.
    })
  }

  render(){
    console.log(this.state);
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}


ReactDom.render(<App />, document.querySelector('.container'))
