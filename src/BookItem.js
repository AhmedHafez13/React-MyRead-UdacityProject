import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';

class BookItem extends Component {
  changeShelf(book, newShelf) {
    BooksAPI.update(book, newShelf).then(() =>
      window.location.assign("/")
    );
  }

  render() {
    const {bookData} = this.props;
    this.theBook = bookData
    const thumbnail = 'url("' + bookData.imageLinks.thumbnail + '")';
    const bookTitle = bookData.title;
    const bookAuthors = bookData.authors;
    const bookShelf = bookData.shelf;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: thumbnail }}>
          </div>
          <div className="book-shelf-changer">
            <select
              defaultValue={bookShelf ? bookShelf : "none"}
              onChange={(event) => {this.changeShelf(bookData, event.target.value)}}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors && bookAuthors.join(", ")}</div>
      </div>
    )
  }
}

export default BookItem
