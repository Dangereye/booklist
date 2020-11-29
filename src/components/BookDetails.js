import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext)

    return (
        <li className='book' onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
            <div className="book-highlight"></div>
            <div className="book-info">
                <p className='book-title'>{book.title}</p>
                <p className='book-author'>By {book.author}</p>
            </div>

        </li>
    )
}

export default BookDetails
