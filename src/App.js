import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Shelves from './Shelves';
import Search from './Search';
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Shelves allBooks={this.state.books}/>
        )} />
        <Route exact path='/search' render={() => (
          <Search allBooks={this.state.books}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
