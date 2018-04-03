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
            <div className="list-books-content">
              <div>
				<BookShelf books={currentlyReading} shelfName="Currently Reading" />
				<BookShelf books={wantToRead} shelfName="Want to Read" />
				<BookShelf books={read} shelfName="Read" />
              </div>
            </div>
		)
	}
}

export default ListBooks