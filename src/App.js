import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <main>
                <section>
                    <div className="container">
                        <h1>Section one</h1>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default App
