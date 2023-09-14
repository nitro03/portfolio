import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Welcome from '../Home/Welcome';
import Career from '../Career/Career';
import Projects from '../Projects/Projects';
import FreeTime from '../FreeTime/FreeTime';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import "./content.scss"

Content.propTypes = {
    isMobile: PropTypes.bool
}

function Content({isMobile}) {

    const classes = classNames("content content bg-dark bg-opacity-75", {
        'mobile': isMobile
    })
    return (
        <main className={classes}>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/career" element={<Career/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/freetime" element={<FreeTime/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </main>
    );
}

export default Content;