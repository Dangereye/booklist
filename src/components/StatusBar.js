import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const StatusBar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className='status-bar'>
            <div className="container">
                <p className="status">You currently have <span>{books.length}</span> books to read. </p>
            </div>

        </div>
    )
}

export default StatusBar
