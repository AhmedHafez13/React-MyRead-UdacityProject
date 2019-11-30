import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchList from './SearchList';

class Search extends Component {
  state = {
    queryResults: []
  }

  typingTimer = false;
  updateQuery = (query) => {
    if (this.typingTimer) {
      clearInterval(this.typingTimer);
    }

    this.typingTimer = setInterval(() => {
      query === ''
      ? this.updateResults([])
      : BooksAPI.search(query).then((books) => {
          this.updateResults(books.error ? [] : books);
        });

      clearInterval(this.typingTimer);
    }, 600);
  }

  updateResults = (results) => {
    this.setState(() => ({
      queryResults: results
    }))
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              className='search-contacts'
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <SearchList resultBooks={this.state.queryResults} categorizedBooks={this.props.allBooks}/>
        </div>
      </div>
    )
  }
}

export default Search
