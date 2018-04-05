import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {

	render(){

		return(
      		<div className="list-books">
	            <div className="list-books-title">
	              <h1>{this.props.title}</h1>
	            </div>

	            <div className="list-books-content">
					<div>
						<BookShelf
							books={this.props.books.currentlyReading}
							shelfDisplayName={this.props.shelfNames.currentlyReading}
							shelfKey={this.props.shelfKeys.currentlyReading}
							onMoveBook={(book, shelf) => this.props.onMoveBook(book, shelf)}
						/>
						<BookShelf
							books={this.props.books.wantToRead}
							shelfDisplayName={this.props.shelfNames.wantToRead}
							shelfKey={this.props.shelfKeys.wantToRead}
							onMoveBook={(book, shelf) => this.props.onMoveBook(book, shelf)}
						/>
						<BookShelf
							books={this.props.books.read}
							shelfDisplayName={this.props.shelfNames.read}
							shelfKey={this.props.shelfKeys.read}
							onMoveBook={(book, shelf) => this.props.onMoveBook(book, shelf)}/>
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