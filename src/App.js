import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Services />
                <About />
                <Contact />
            </main>
            <footer>
                <p>&copy; 2024 Miroku Consultancy Services. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
