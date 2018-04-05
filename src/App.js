import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

const shelfKeys = {
  currentlyReading: 'currentlyReading',
  wantToRead: 'wantToRead',
  read: 'read',
}

const shelfDisplayNames = {
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want to Read',
  read: 'Read'
}

class BooksApp extends React.Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({
        currentlyReading: books.filter((book) => book.shelf === shelfKeys.currentlyReading),
        wantToRead: books.filter((book) => book.shelf === shelfKeys.wantToRead),
        read:  books.filter((book) => book.shelf === shelfKeys.read)
        })
    })
  }

  moveBookToShelf(book, destinationShelf){

    if(destinationShelf === 'none'){
      destinationShelf = ' ';
    }
    BooksAPI.update(book, destinationShelf)
    .then(data => {
      BooksAPI.getAll().then(books =>{
      this.setState(state => ({
        currentlyReading: books.filter((book) => book.shelf === shelfKeys.currentlyReading),
        wantToRead: books.filter((book) => book.shelf === shelfKeys.wantToRead),
        read:  books.filter((book) => book.shelf === shelfKeys.read)
      }))
    })}).catch((error) => console.log(error) )
  }


  render() {
    return (
      <div className="app">
        <Route path="/search" render={ () => (
            <SearchBooks
              onMoveBook={(book, shelf) => this.moveBookToShelf(book, shelf)}
              booksInLibrary={this.state}
              shelfNames={shelfDisplayNames}
              shelfKeys={shelfKeys}
            />
          )}
        />
        <Route exact path="/" render={ () => (
            <ListBooks
              title="My Reads"
              onMoveBook={(book, shelf) => this.moveBookToShelf(book, shelf)}
              books={this.state}
              shelfNames={shelfDisplayNames}
              shelfKeys={shelfKeys}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp