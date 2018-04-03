import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'


class ListBooks extends Component {

	state = {
		books: [],
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
		  this.setState({books});
		})

	}

	getBooksByShelf(shelfKey){
		const booksForShelf = this.state.books.filter((book) => (
			book.shelf ===  shelfKey
		))
		return booksForShelf
	}

	render(){
		console.log('Props', this.state.books)

		const currentlyReading = this.getBooksByShelf('currentlyReading');
		const wantToRead = this.getBooksByShelf('wantToRead');
		const read = this.getBooksByShelf('read');

		return(

      		<div className="list-books">
	            <div className="list-books-title">
	              <h1>{this.props.title}</h1>
	            </div>

	            <div className="list-books-content">
					<div>
						<BookShelf books={currentlyReading} shelfName="Currently Reading" />
						<BookShelf books={wantToRead} shelfName="Want to Read" />
						<BookShelf books={read} shelfName="Read" />
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