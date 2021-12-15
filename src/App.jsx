/* eslint-disable quotes, jsx-quotes */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import Greeting from "./Greeting";
import { randomGreeting } from "./redux/greetings";

store.dispatch(randomGreeting());

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<Greeting />} />
        <Route path='/greeting' element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
