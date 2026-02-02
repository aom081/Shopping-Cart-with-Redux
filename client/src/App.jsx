import React from 'react'
import "./index.css";
import Navbar from './component/navbar.jsx'
import Page from './Pages/page.jsx'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';


function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <Page />
  
    </Provider>
  );
}

export default App
