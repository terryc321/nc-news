import React from "react";
import { useEffect, useState } from "react";

import {ReactDOM } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ArticleList from './ArticleList'
import Header from './Header'
import Footer from './Footer'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
            <div className="App">
            <Header />
            <section>
            <ArticleList />
            </section>
            <Footer />
            </div>
    );
}

export default App;


