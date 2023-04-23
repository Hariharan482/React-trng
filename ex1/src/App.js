import './App.css';
import Homepage from './pages/homepage'; 
import Detailspage from './pages/detailsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route exact path='/details/:cityName' element={<Detailspage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
