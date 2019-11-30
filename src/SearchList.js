import React, {Component} from 'react';
import BookItem from './BookItem'

class SearchList extends Component {
  render() {
    const {resultBooks, categorizedBooks} = this.props;
    return (
      <div className="bookshelf">
        <div className="bookshelf-books">
          <ol className="books-grid">
            {resultBooks &&
              resultBooks.map(book => {
                if (book.imageLinks) {
                  let feltered = categorizedBooks.filter(catedBook =>
                    book.id === catedBook.id);
                  let targetBook = feltered.length == 0 ? book : feltered[0];
                  return (
                    <li key={book.id}>
                      <BookItem bookData={targetBook} />
                    </li>
                )}
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchList
