import './App.css';

import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Companies from './pages/Companies';
import Shop from './pages/Shop';
import SinglePage from './components/SinglePage';

function App() {
  return (
    <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' exact index element={<Home />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/com' element={<Companies />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<SinglePage />} />
        <Route path='' element />
        <Route path='' element />
      </Routes>
    </div>
    </>
  );
}

export default App;
