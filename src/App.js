import React, { Component } from 'react';
import { Provider } from 'react-redux';


import store from './store';
import logo from './logo.svg';
import './App.css';
import ListPosts from './components/ListPosts';
import CreatePost from './components/CreatePost';

class App extends Component {

  onCreatePost(e){
          console.log(e)
  }

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        {/* <header className="App-header">
    
            Learn React
     
        </header> */}
        <CreatePost/>
        <ListPosts />
        
      </div>
      </Provider>
    );
  }
}

export default App;
