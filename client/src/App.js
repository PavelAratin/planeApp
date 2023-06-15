import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
