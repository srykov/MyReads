import React from 'react'
import Book from './Book'

function BookShelf(props){

	return(

		<div className="bookshelf" key="{this.props.shelfName">
	      <h2 className="bookshelf-title">{props.shelfName}</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">
				{props.books.map((book) => (
	              <Book book={book} key={book.id} onMoveBook={props.onMoveBook}/>
				))}
			</ol>
		  </div>
		</div>

	)
}

export default BookShelf