import React, { useState } from'react';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Article from './Component/Article';
import Create from './Component/Create';
import Update from './Component/Update';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id: 1, title: "html", body:"html is ..."},
    {id: 2, title: "css", body:"css is ..."},
    {id: 3, title: "javascript", body:"javascript is ..."}
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header title="WEB"/>
        <Nav topics={topics}></Nav>
        <Routes>
          <Route path="/" element={<Article/>}></Route>
          <Route path="/read/*" element={<Article topics={topics} setTopics={setTopics}/>}></Route>
          <Route path="/create" element={<Create nextId={nextId} topics={topics} setId={setId} setNextId={setNextId} setTopics={setTopics}/>}></Route>
          <Route path="/update/*" element={<Update topics={topics} setTopics={setTopics}/>}></Route>
          <Route path="*" element={<Article/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
