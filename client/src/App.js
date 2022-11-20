import './App.css';

import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import {Hero} from './components/Hero/Hero'
import {Contacts} from './components/contacts/Contacts'
function App() {
  return (
    <div className="App">
     <Header></Header>
     <main className="main">
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
     </main>
    </div>
  );
}

export default App;
