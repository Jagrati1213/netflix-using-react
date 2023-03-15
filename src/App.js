import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import './App.scss';
import PlayMovie from './Components/PlayMovie';
import Mylist from './Components/Mylist';

function App() {
  return (
    <BrowserRouter>
      <Header/>
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/mylist' element={<Mylist/>}/>
        <Route path='/playmovie' element={<PlayMovie/>}/>
        <Route path='/mylist' element={<Mylist/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
