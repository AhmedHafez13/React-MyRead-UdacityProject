import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class Shelves extends Component {
  render() {
    const allBooks = this.props.allBooks;
    const [CURRENTLY_READING, WANT_TO_READ, READ] = ["currentlyReading", "wantToRead", "read"];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf shelfName="Currently Reading"
            shelfBooks={
              allBooks.filter((book) => (book.shelf === CURRENTLY_READING))
            }/>
          <Shelf shelfName="Want to Read"
            shelfBooks={
              allBooks.filter((book) => (book.shelf === WANT_TO_READ))
            }/>
          <Shelf shelfName="Read"
            shelfBooks={
              allBooks.filter((book) => (book.shelf === READ))
            }/>
        </div>
        <div className="open-search">
          <Link to="/search" className="open-search-button">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Shelves
