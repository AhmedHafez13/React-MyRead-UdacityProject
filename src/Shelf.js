import React, {Component} from 'react';
import BookItem from './BookItem'

class Shelf extends Component {
  render() {
    const {shelfName, shelfBooks} = this.props;
    //console.log(shelfName, shelfBooks);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks &&
              shelfBooks.map(book => {
                if (book.imageLinks) {
                  return (
                    <li key={book.id}>
                      <BookItem bookData={book} />
                    </li>
                )}
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
