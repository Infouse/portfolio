import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import React from 'react'
import './style/reset.scss';


function App() {
  
  return (
    <>
      <Header/>
    <div className="container">
      <Main/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
