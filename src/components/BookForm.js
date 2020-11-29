import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="title">Title</label>
                <input type="text" name='title' placeholder='Book title' value={title} onChange={e => setTitle(e.target.value)} required autoComplete='off' />
            </div>
            <div className="input-group">
                <label htmlFor="author">Author</label>
                <input type="text" name='author' placeholder='Author' value={author} onChange={e => setAuthor(e.target.value)} required autoComplete='off' />
            </div>
            <input type="submit" value='Add Book' />
        </form >
    )
}

export default BookForm
