import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./index.css";
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import ContentList from "./components/ContentList.jsx";

ReactDOM.render(
  <BrowserRouter>
    <div className="index">
    <Route exactly path="/" component={App} />

        <Link to="/content">Content</Link><span>    </span>
        <Link to="/contenlist">ContentList</Link>
  
    <Route path="/header" component={Header} />
    <Route path="/content" component={Content}/>
    <Route path="/contenlist" component={ContentList}/>
    
    </div>

</BrowserRouter>,
document.getElementById('root')
);
