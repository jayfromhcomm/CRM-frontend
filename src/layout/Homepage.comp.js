//jshint esversion:7
import React, { useLayoutEffect } from 'react';
import Header from './partials/Header.comp';
import Footer from './partials/Footer.comp';

// main page component

export const Homepage = ({children}) => {
    return (
            <div className="homepage" >
                <header className="header">
                <Header />
                </header>
                
                <main className="main">
                    {children}
                </main>
                
                <footer className="footer">
                <Footer />
                </footer>
                
            </div>
    );
};

