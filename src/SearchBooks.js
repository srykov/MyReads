import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

	state = {
		matchingBooks: [],
		query: ''
	}

	handleUpdateQuery = (event) => {
		this.setState({query: event.target.value.trim()})
		if(this.state.query.length > 0){
			BooksAPI.search(this.state.query)
			.then((books) => {
			  	this.setState({matchingBooks: books})
			}).catch((error) => {
				this.setState({matchingBooks: []})
			})
		}
	}

	clearQuery = () => {
		this.setState({query: '', matchingBooks: []})
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
					{this.state.matchingBooks.map((book) => (
	                  <Book book={book} key={book.id}/>
					))}
				  </ol>
				</div>
			</div>
		)
	}

}

export default SearchBooks