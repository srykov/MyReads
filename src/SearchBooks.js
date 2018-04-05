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
		this.setState({query: event.target.value.trim()})
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
	                  <Book book={book} key={book.id}/>
					))}
				  </ol>
				</div>
			</div>
		)
	}

}

export default SearchBooks