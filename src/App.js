import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookContextProvider from './contexts/BookContext';
import StatusBar from './components/StatusBar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
    return (
        <div className='app'>
            <BookContextProvider>
                <Navbar />
                <StatusBar />
                <main>
                    <section>
                        <div className="container">
                            <BookList />
                            <BookForm />
                        </div>
                    </section>
                </main>
                <Footer />
            </BookContextProvider>
        </div >
    )
}

export default App
