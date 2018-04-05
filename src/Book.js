import React, {Component} from 'react'

class Book extends Component {

	handleMoveBook = (book, event) => {
		event.preventDefault()
		this.props.onMoveBook(book, event.target.value)
	}

	render(){

		const {book, currentShelf} = this.props
		return(
		    <li>
				<div className="book">
		          <div className="book-top">
		            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
		            <div className="book-shelf-changer">

		              <select value={currentShelf? currentShelf : 'none'} onChange={ (event) => this.handleMoveBook(book, event)}>
		                <option value="none" disabled>Move to...</option>
		                <option value="currentlyReading">Currently Reading</option>
		                <option value="wantToRead">Want to Read</option>
		                <option value="read">Read</option>
		                {currentShelf && (
		                	<option value="none">None</option>
		                )}
		              </select>
		            </div>
		          </div>
		          <div className="book-title">{book.title}</div>
		          <div className="book-authors">{book.authors}</div>
		        </div>
		     </li>
		)
	}
}

export default Book