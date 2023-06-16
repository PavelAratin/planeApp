import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import { paths } from './path/path';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<HomePage></HomePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
