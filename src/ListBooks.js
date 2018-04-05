import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

const currentlyReadingKey = 'currentlyReading';
const wantToReadKey = 'wantToRead';
const readKey = 'read';

class ListBooks extends Component {

	state = {
		currentlyReading: [],
		wantToRead: [],
		read: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			console.log('All Books: ', books)
		  	this.setState({
				currentlyReading: books.filter((book) => book.shelf === currentlyReadingKey),
				wantToRead: books.filter((book) => book.shelf === wantToReadKey),
				read:  books.filter((book) => book.shelf === readKey)
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
				currentlyReading: books.filter((book) => book.shelf === currentlyReadingKey),
				wantToRead: books.filter((book) => book.shelf === wantToReadKey),
				read:  books.filter((book) => book.shelf === readKey)
			}))
		})}).catch((error) => console.log(error) )
	}


	render(){

		return(
      		<div className="list-books">
	            <div className="list-books-title">
	              <h1>{this.props.title}</h1>
	            </div>

	            <div className="list-books-content">
					<div>
						<BookShelf books={this.state.currentlyReading} shelfName="Currently Reading" onMoveBook={(book, shelf) => this.moveBookToShelf(book, shelf)} />
						<BookShelf books={this.state.wantToRead} shelfName="Want to Read" onMoveBook={(book, shelf) => this.moveBookToShelf(book, shelf)}/>
						<BookShelf books={this.state.read} shelfName="Read" onMoveBook={(book, shelf) => this.moveBookToShelf(book, shelf)}/>
					</div>
				</div>
	            <div className="open-search">
	              <Link to="/search">Add a book</Link>
	            </div>
	        </div>
		)
	}
}

export default ListBooks