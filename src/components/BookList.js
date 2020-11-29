import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length
        ? (
            <div className='book-list'>
                <h2>Browse books</h2>
                <ul>
                    {books.map(book => {
                        return (
                            <BookDetails book={book} key={book.id} />
                        )
                    })}
                </ul>
            </div>
        )
        : (
            <div>
                <h2>You don't have any books.</h2>
            </div>
        )
}

export default BookList
