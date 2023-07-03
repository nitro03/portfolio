import React from 'react';

import "./content.scss"
import {Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import Career from '../Career/Career';
import Projects from '../Projects/Projects';
import FreeTime from '../FreeTime/FreeTime';
import Contact from '../Contact/Contact';

function Content() {
    return (
        <main className="content bg-dark bg-opacity-75 py-5 px-5">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/career" element={<Career/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/freetime" element={<FreeTime/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </main>
    );
}

export default Content;