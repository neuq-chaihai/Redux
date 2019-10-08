import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Provider } from 'react-redux';
import Main from './components/main/main'
import store from './store/store'

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Main />
      </Provider>
      <Footer />
      
    </>
  );
}

export default App;
