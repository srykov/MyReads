import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'


export class Shelf {
	constructor(key, displayName){
		this.shelfKey = key;
		this.displayName = displayName;
		this.books = [];
	}

	getBooksForShelf(allBooks){
		const booksForShelf = allBooks.filter((book) => (
			book.shelf ===  this.shelfKey
		))
		return booksForShelf
	}
}

export const currentlyReading = new Shelf ('currentlyReading', 'Currently Reading');
export const wantToRead = new Shelf('wantToRead', 'Want to Read');
export const read = new Shelf('read', 'Read');


class ListBooks extends Component {

	state = {
		books: [],
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
		  this.setState({books});
		})

	}

	moveBookToShelf(event, book){
		console.log(book);
		BooksAPI.update(book, event.target.value).then((json) => {
		  console.log(json);
		})
	}

	render(){

		return(
      		<div className="list-books">
	            <div className="list-books-title">
	              <h1>{this.props.title}</h1>
	            </div>

	            <div className="list-books-content">
					<div>
						<BookShelf books={currentlyReading.getBooksForShelf(this.state.books)} shelfName={currentlyReading.displayName} onMoveBook={this.updateShelfForBook}/>
						<BookShelf books={wantToRead.getBooksForShelf(this.state.books)} shelfName={wantToRead.displayName} />
						<BookShelf books={read.getBooksForShelf(this.state.books)} shelfName={read.displayName} />
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