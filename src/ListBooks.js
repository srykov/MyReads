import React, {Component} from 'react'
import BookShelf from './BookShelf'

class ListBooks extends Component {

	render(){
		console.log('Props', this.props.books)

		const currentlyReading = this.props.books.filter((book) => (
			book.shelfName ===  'Currently Reading'
		))

		const wantToRead = this.props.books.filter((book) => (
			book.shelfName ===  'Want to Read'
		))

		const read = this.props.books.filter((book) => (
			book.shelfName ===  'Read'
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
	              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
	            </div>
	        </div>
		)
	}
}

export default ListBooks