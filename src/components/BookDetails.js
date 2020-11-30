import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext)
    const [selected, setSelected] = useState(false)
    return (
        <li className={selected ? 'book active' : 'book'} onClick={() => setSelected(!selected)}>
            <div className="book-info">
                <p className='book-title'>{book.title}</p>
                <p className='book-author'>By {book.author}</p>
                <div className='book-delete' onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
                    <i className="fas fa-trash-alt"></i>
                </div>
            </div>
        </li>
    )
}

export default BookDetails
