import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Movie from './Components/Movie';
import TvShows from './Components/TvShows';
import './App.scss';

function App() {
  return (
    <BrowserRouter basename='/netflix-using-react'>
      <Header/>
    <Routes>
        <Route path='/netflix-using-react' element={<Home/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/tvshows' element={<TvShows/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
