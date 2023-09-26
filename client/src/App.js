import React, {useEffect, useState} from 'react';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import {BrowserRouter as Router} from 'react-router-dom';

import LangContextProvider from './contexts/LangContext';
import NavContextProvider from './contexts/NavContext';
import classNames from 'classnames';

import './fonts/fonts.css';
import './index.scss';
import './App.scss';

const WIDTH_LG_BREAKPOINT = 991;

function App() {
    // eslint-disable-next-line no-unused-vars
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= WIDTH_LG_BREAKPOINT);

    useEffect(() => {
        document.title = 'Nitrax Software - Krzysztof Bartosik';
        const handleWindowResize = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            setWindowSize([windowWidth, windowHeight]);
            if (windowWidth <= WIDTH_LG_BREAKPOINT) {
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
            <NavContextProvider>
                <Router>
                    <div className={classes}>
                        <Menu isMobile={isMobile}/>
                        <div className={contentClasses}>
                            <Content isMobile={isMobile}/>
                        </div>
                    </div>
                </Router>
            </NavContextProvider>
        </LangContextProvider>
    );
}

export default App;
