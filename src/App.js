import React, { Component } from "react";
import "./App.css";
import BookList from "./story-components/BookList";
import "antd/dist/antd.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      bookChange: [], //books when searching
      isSearch: false, // check that onChange was trigger
      isLoaded: false
    };
    this.onChange = this.onChange.bind(this);
    this.inputElement = React.createRef();
  }
  componentDidMount() {
    fetch("https://bai27-rest-api.glitch.me/api/books")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            books: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    this.inputElement.current.focus();
  }
  onChange(e) {
    let text = e.target.value;
    let books = this.state.books.filter(
      x => x.title.toLowerCase().indexOf(text.toLowerCase()) !== -1
    );

    this.setState({
      bookChange: books,
      isSearch: true
    });
  }

  render() {
    let search = !this.state.isSearch;
    const { books, bookChange } = this.state;
    console.log(books);
    return (
      <div className="App">
        {this.state.isSearch && ( //when not searching
          <BookList className="table" books={bookChange} />
        )}
        {search && <BookList className="table" books={books //when searching
            } />}

        <input
          className="input"
          onChange={this.onChange}
          ref={this.inputElement}
        ></input>
      </div>
    );
  }
}

export default App;
