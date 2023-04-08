import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { useDentiStates } from "./Components/utils/Context";

function App() {

    const {themeState} = useDentiStates()

    useEffect(() => {
        localStorage.removeItem('favs');
    }, []);

    return (
        <div className={themeState.theme ? 'App' : 'App-dark'} style={{backgroundColor: themeState.bgColor, color: themeState.color}}>
          <Navbar/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/dentist/:id'} element={<Detail/>}/>
              <Route path={'/contact'} element={<Contact/>}/>
              <Route path={'favs'} element={<Favs/>}/>
              <Route path='*' element={<h2>Not found</h2>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;