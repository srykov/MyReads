import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {

	render(){
		console.log('Props', this.props.books)

		const currentlyReading = this.props.books.filter((book) => (
			book.shelf ===  'currentlyReading'
		))

		const wantToRead = this.props.books.filter((book) => (
			book.shelf ===  'wantToRead'
		))

		const read = this.props.books.filter((book) => (
			book.shelf ===  'read'
		))

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