import React from "react";
import { useEffect, useState } from "react";

import {ReactDOM } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, useParams } from 'react-router-dom';

import { Navigate } from "react-router-dom";

import ArticleList from './ArticleList'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {    
    
    return (<>
            <Navbar />
            <Routes>
            <Route exact path="/" element={<Navigate to="/articles/all" />} />
            <Route path="/articles" element={<Navigate to="/articles/all" />} />
            <Route path="/articles/:topic" element={
                                             <ArticleList />
                                            } />
            </Routes>
            <Footer />
        </>
    );
}

export default App;


