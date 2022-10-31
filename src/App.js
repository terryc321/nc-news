import React from "react";
import { useEffect, useState } from "react";

import {ReactDOM } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ArticleList from './ArticleList'

import './App.css';

function App() {
  return (
          <div className="App">
          <h1> My Application </h1>
          <ArticleList />
    </div>
  );
}

export default App;


