import React from 'react';
import MainPage from "./components/MainPage";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Paimon from "../src/chatting/Paimon";
import Harry from "../src/chatting/Harry"
import Shrek from "../src/chatting/Shrek";
import Terra from "../src/chatting/Terra";
import BoardList from "../src/board/BoardList";
import BoardCreate from "../src/board/BoardCreate";
import BoardUpdate from "../src/board/BoardUpdate";
import BoardDetail from "../src/board/BoardDetail";

function App() {
  return (
      <div className="App">
          <BrowserRouter basename="/">
              <Routes>
                  <Route path="/" element={<MainPage/>}></Route>
                  <Route path="/paimon" element={<Paimon/>}></Route>
                  <Route path="/harry" element={<Harry/>}></Route>
                  <Route path="/shrek" element={<Shrek/>}></Route>
                  <Route path="/terra" element={<Terra/>}></Route>
                  <Route path="/boards" element={<BoardList/>}></Route>
                  <Route path="/boards/create" element={<BoardCreate/>}></Route>
                  <Route path="/boards/update/:bno" element={<BoardUpdate/>}></Route>
                  <Route path="/boards/:bno" element={<BoardDetail/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
