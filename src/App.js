
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import Top from './components/Top';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {

  const slides = [
    { bg: 1, title: "Немного упругости", text: "Чуть-чуть сияния, и ощущение, что вы о себе позаботились" },
    { bg: 2, title: "Немного упругости", text: "Чуть-чуть сияния, и ощущение, что вы о себе позаботились" },
    { bg: 3, title: "Немного упругости", text: "Чуть-чуть сияния, и ощущение, что вы о себе позаботились" },
    { bg: 4, gradient: true, title: "Немного упругости", text: "Чуть-чуть сияния, и ощущение, что вы о себе позаботились" },
    { bg: 5, gradient: true, title: "Немного упругости", text: "Чуть-чуть сияния, и ощущение, что вы о себе позаботились" },
  ];

  return (
    <div className="App">
      <Top></Top>
      <Slider slides={slides}></Slider>
      <Form></Form>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default App;
