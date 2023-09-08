import React, {useEffect, useState} from 'react';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

import {Col, Container, Row} from 'react-bootstrap';
import LangContextProvider from './contexts/LangContext';
import './App.scss';
import classNames from 'classnames';

const WIDTH_LG_BREAKPOINT = 991;

function App() {
    const [isMobile, setIsMobile] = useState(false);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        document.title = 'Nitrax entertainment';
        const handleWindowResize = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            setWindowSize([windowWidth, windowHeight]);
            if(windowWidth <= WIDTH_LG_BREAKPOINT){
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const classes = !isMobile ? "menu-container" : "menu-container-mobile";
    const contentClasses = classNames("content-container", {
        'mobile': isMobile
    });
    return (
        <LangContextProvider>
            <Router>
                <div className={classes}>
                    <Menu isMobile={isMobile}/>
                    <div className={contentClasses}>
                        <Content/>
                        <Footer/>
                    </div>
                </div>
            </Router>
        </LangContextProvider>
    );
}

export default App;
