import React, {useEffect} from 'react';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import {Container} from 'react-bootstrap';
import LangContextProvider from './contexts/LangContext';

function App() {

    useEffect(() => {
        document.title = 'Nitrax entertainment';
    }, []);
    return (
        <LangContextProvider>
            <Router>
                <Container fluid={"xxl"}>
                    <Menu/>
                    <Content/>
                    <Footer/>
                </Container>
            </Router>
        </LangContextProvider>
    );
}

export default App;
