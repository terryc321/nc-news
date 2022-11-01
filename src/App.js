import React from "react";
import { useEffect, useState } from "react";

import {ReactDOM } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ArticleList from './ArticleList'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [topic, setTopic] = useState("all");
    
    return (
            <div className="App">
            <Navbar setTopic={setTopic}/>
            <section>
            <ArticleList topic={topic}/>
            </section>
            <Footer />
            </div>
    );
}

export default App;


