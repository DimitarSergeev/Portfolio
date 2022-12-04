import './App.css';

import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero'
import { Contacts } from './components/contacts/Contacts'
import { Skils } from './components/skils/Skils'
import { Footer } from './components/footer/Footer';
import {AboutMe} from './components/About/AboutMe'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="main">
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/skils' element={<Skils />} />
          <Route path='/about' element={<AboutMe />} />
        </Routes>
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
