/* eslint-disable quotes, jsx-quotes */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
// import './App.css';
import Greeting from "./components/Greeting/Greeting";
import { randomGreeting } from "./redux/greetings";

store.dispatch(randomGreeting());

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Greeting />} />
          <Route path='/greeting' element={<Greeting />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
