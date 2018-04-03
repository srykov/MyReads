import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component {

	render(){
		return(

			<div className="bookshelf" key="{this.props.shelfName">
	          <h2 className="bookshelf-title">{this.props.shelfName}</h2>
	          <div className="bookshelf-books">
	            <ol className="books-grid">
					{this.props.books.map((book) => (
	                  <Book book={book} key={book.id}/>
					))}
				</ol>
			  </div>
			</div>

		)
	}
}

export default BookShelf