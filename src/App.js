import './App.css';

import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Companies from './pages/Companies';
import Shop from './pages/Shop';
import SinglePage from './components/SinglePage';
import ShortCuts from './components/nested/ShortCuts';
import Tools from './components/nested/Tools';
import Test from './components/nested/Test';
import Soft from './components/nested/Soft';
import SoftA from './components/nested/nest/SoftA';

function App() {
  return (
    <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' exact index element={<Home />} />
        <Route path='/learn' element={<Learn />}>
          <Route index element={<ShortCuts />} />
          <Route path='short' element={<ShortCuts />} />
          <Route path='tools' element={<Tools />} />
          <Route path='text' element={<Test />} />
        </Route>
        <Route path='/com' element={<Companies />} >
          <Route index element={<Soft />} />
          <Route path='soft/*' element={<Soft />} >
            <Route path='soft/:id' element={<SoftA />} />
          </Route>
        </Route>
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
