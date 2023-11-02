import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import "../src/index.css";

const App = () => {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}
export default App;