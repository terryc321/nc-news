import React from "react";
import { useEffect, useState } from "react";

import { ReactDOM } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, useParams } from 'react-router-dom';

import { Navigate } from "react-router-dom";

import ArticleList from './ArticleList';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Article from './Article';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {    

    const [updateArticleList, setUpdateArticleList] = useState(false);
    const updateArticles = () => {
        setUpdateArticleList(!updateArticleList);
    }
    
    return (<>
            <Navbar updateArticles={updateArticles} />
            <Routes>

            
            
            <Route exact path="/" element={<Navigate to="/articles" />} />            
            <Route path="/articles" element={ <ArticleList updateArticleList={updateArticleList}/>  } />
            <Route path="/article/:article_id" element={ <Article /> } />

            </Routes>
            <Footer />
        </>
    );
}

export default App;


// <Route path="/articles" element={<Navigate to="/articles/all" />} />
// <Route path="/articles/:topic" element={ <ArticleList updateArticleList={updateArticleList}/> } />
// <Route path="/articles" element={<ArticleList />} />
            

