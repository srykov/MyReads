import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

	state = {
		filteredBooks: [],
		query: ''
	}

	handleUpdateQuery = (event) => {
		this.setState({query: event.target.value})
		if(this.state.query.length > 0){
			BooksAPI.search(this.state.query)
			.then((books) => {
			  	this.setState({filteredBooks: books})
			}).catch((error) => {
				this.setState({filteredBooks: []})
			})
		}
	}

	clearQuery = () => {
		this.setState({query: '', filteredBooks: []})
	}

	getCurrentShelf = (book) => {
		const libraryBooks = this.props.booksInLibrary;
		let currentShelf = null;
		if(libraryBooks.currentlyReading.find( (b) => b.id === book.id)) {
			currentShelf = this.props.shelfKeys.currentlyReading
		} else if (libraryBooks.currentlyReading.find( (b) => b.id === book.id)){
			currentShelf = this.props.shelfKeys.wantToRead
		} else if (libraryBooks.currentlyReading.find( (b) => b.id === book.id)){
			currentShelf = this.props.shelfKeys.read
		}
		return currentShelf
	}

	render(){
		return (
			<div className="search-books">
				<div className="search-books-bar">
				  <Link className="close-search" to="/">Close</Link>
				  <div className="search-books-input-wrapper">
				    <input type="text" value={this.state.query} onChange={this.handleUpdateQuery} placeholder="Search by title or author"/>
				  </div>
				</div>
				<div className="search-books-results">
				  <ol className="books-grid">
					{this.state.filteredBooks.map((book) => (
	                  	<Book
	                  		book={book}
	                  		currentShelf={this.getCurrentShelf(book)}
	                  		key={book.id}
	                  		onMoveBook={(book, shelf) => this.props.onMoveBook(book, shelf)}
                  		/>
					))}
				  </ol>
				</div>
			</div>
		)
	}

}

export default SearchBooks